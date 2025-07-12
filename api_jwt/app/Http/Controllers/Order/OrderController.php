<?php

namespace App\Http\Controllers\Order;

use App\Http\Controllers\Controller;
use App\Models\AdditionalProducts;
use App\Models\AttributeValues;
use App\Models\Customer;
use Illuminate\Http\Request;
use App\Models\Product;
//use Darryldecode\Cart\Cart;
use Illuminate\Support\Facades\Session;
use App\Models\Order;
use Validator;
use App\Models\TicketHistory;
use App\Models\OrderStatus;
use App\Models\OrderHistory;
use App\Models\ProductCategory;
use App\Models\Setting;
use App\Models\WishList;
use App\Models\InventoryHistory;
use App\Models\ProductAttributeValue;
use App\Models\User;
use App\Models\TicketsBooking;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Claims\Custom;

class OrderController extends Controller
{

    protected $userid;
    public function __construct()
    {
        $this->middleware('auth:api');
        $id = auth('api')->user();
        $user = User::find($id->id);
        $this->userid = $user->id;
    }

    public function getOrderhistory($id)
    {
        $orderRow  = Order::where('customer_id', $this->userid)->where('id', $id)->first();
        $status    = OrderStatus::find($orderRow->order_status);
        $paytype   = (int)$orderRow->payment_getway;
        $ptype     = $this->paymenttype($paytype);
        $orderstatus              = !empty($status->name) ? $status->name : "";
        $odata['orderId']         = $orderRow->orderId;
        $odata['total']        = $orderRow->total;
        $odata['payment_getway']  = $ptype;
        $odata['order_status']    = $orderstatus;
        $odata['placeOn']         = date_format(date_create($orderRow->created_at), "d-m-Y");
        return response()->json($odata, 200);
    }

    public function paymenttype($id)
    {
        $name = "";
        if ($id === 2) {
            $name =  "Bkash";
        } elseif ($id === 3) {
            $name = "Nagad";
        } elseif ($id === 4) {
            $name = "Roket";
        } elseif ($id === 5) {
            $name = "Upay";
        }
        return $name;
    }

    public function orderStatusRow($id)
    {
        try {
            $row = OrderStatus::find($id);
            $response = [
                'data' => $row,
                'message' => 'success'
            ];
        } catch (\Throwable $th) {
            $response = [
                'data' => [],
                'message' => 'failed'
            ];
        }
        return response()->json($response, 200);
    }

    public function save_order(Request $request)
    {
        // dd($request->all());
        $validator = Validator::make($request->all(), [
            'name'           => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'name'        => $request->name,
            'description' => $request->description,
        );
        if (empty($request->id)) {
            OrderStatus::insertGetId($data);
        } else {
            OrderStatus::where('id', $request->id)->update($data);
        }

        $response = [
            'data' => $data,
            'message' => 'success'
        ];
        return response()->json($response, 200);
    }

    public function orderStatus()
    {

        try {
            $rows = OrderStatus::all();
            $response = [
                'data' => $rows,
                'message' => 'success'
            ];
        } catch (\Throwable $th) {
            $response = [
                'data' => [],
                'message' => 'failed'
            ];
        }
        return response()->json($response, 200);
    }

    function addtowish($slug)
    {
        $findproduct = Product::where('slug', $slug)->select('id')->first();
        $row                  = new WishList();
        $row->customer_id     = $this->userid;
        $row->product_id      = $findproduct->id;
        $row->save();
        return response()->json("Item successfully added to your wishlist!", 200);
    }

    function allWishList()
    {
        $rows = WishList::join('product', 'product.id', '=', 'wishlist.product_id')->select('wishlist.id as wishid', 'product.thumnail_img', 'product.slug', 'product.name', 'price', 'product.id')->get();
        $products = [];
        foreach ($rows as $key => $v) {
            $products[] = [
                'id'           => $v->id,
                'product_name' => $v->name,
                'wishid'       => $v->wishid,
                'price'        => number_format($v->price, 2),
                'thumnail_img' => url($v->thumnail_img),
                'slug'         => $v->slug,

            ];
        }

        return response()->json($products, 200);
    }

    function removeWishList($id)
    {

        $wishlistItem = WishList::find($id);
        if (!$wishlistItem) {
            return response()->json(['error' => 'WishList item not found'], 404);
        }
        $wishlistItem->delete();
        return response()->json(['message' => 'WishList item deleted successfully']);
    }

    function generateUniqueRandomNumber($length = 5)
    {
        do {
            $randomNumber = mt_rand(pow(10, $length - 1), pow(10, $length) - 1);
        } while (Order::where('id', $randomNumber)->exists());

        return $randomNumber;
    }

    public function getOrder()
    {

        $data['orders']  = Order::where('customer_id', $this->userid)->where('order_status', 1)->limit(2)->get();
        foreach ($data['orders'] as $v) {
            $orders[] = [
                'orderId'      => $v->orderId,
                'placeOn'      => date_format(date_create($v->created_at), "Y-m-d"),
                'total'        => number_format($v->total, 2),
            ];
        }

        $order['orderdata']      = $orders;

        return response()->json($order, 200);
    }

    public function update_order_status(Request $request)
    {

        $orderid = $request->orderId;
        $ckhOrder = Order::where('orderId', $orderid)->first();
        $orderstatus = (int) $request->orderstatus;
        $chkpoint = OrderHistory::select('order_history.quantity', 'order_history.product_id', 'order_history.attribue_val_id')
            ->where('order_history.order_id', $ckhOrder->id)
            ->get();

       // dd($chkpoint);

        if ($orderstatus == 10) {
            $totalQuantity = 0;
            foreach ($chkpoint as $v) {
                $checkAttrRow = ProductAttributeValue::where('product_id', $v->product_id)->where('id', $v->attribue_val_id)->first();

                if (!empty($checkAttrRow)) {
                    $inveData['size_qty']       = $checkAttrRow->size_qty - $v->quantity;
                    $inveData['stock_qty_out']  = $v->quantity;
                    $inveData['balance']        = $checkAttrRow->size_qty - $v->quantity;
                    ProductAttributeValue::where('product_id', $v->product_id)->where('id', $v->attribue_val_id)->update($inveData);

                    $invehistory['product_id'] = $v->product_id;
                    $invehistory['stock_out']  = $v->quantity;
                    InventoryHistory::create($invehistory);
                    $totalQuantity += $v->quantity;
                }
            }

            $chkProduct =  Product::where('id', $v->product_id)->first();
            if(!empty($chkProduct)){
                $odata['stock_qty']   = $chkProduct->stock_qty -  $totalQuantity;
                Product::where('id', $v->product_id)->update($odata);
            }
           
        }
        $updatests['order_status'] = $orderstatus;
        Order::where('orderId', $request->orderId)->update($updatests);
        return response()->json("update successfully", 200);
    }
    public function orderDetails($order_id)
    {

        $orderStatus     = orderStatus::all();
        $findorder       = Order::join('order_status', 'order_status.id', '=', 'orders.order_status')->select('orders.*', 'order_status.name as orderstatus', 'order_status.id as orderstatus_id')->where('orderId', $order_id)->first();
        $data['orders']  = OrderHistory::join('product', 'product.id', '=', 'order_history.product_id')
            ->select('product.name as product_name', 'product.thumnail_img', 'order_history.*')
            ->where('order_id', $findorder->id)->get();

        // dd($data['orders']);
        $ticketName = "";
        $implodedtickets = "";
        foreach ($data['orders'] as $v) {

            $attribue_val_id = !empty($v->attribue_val_id) ? $v->attribue_val_id : "";
            $attrVal         = ProductAttributeValue::where('id', $attribue_val_id)->first();
            $checkAatttr     = AttributeValues::where('id', $attrVal->attributes_val_id)->first();
            $attrvalName     = !empty($checkAatttr->name) ? $checkAatttr->name : "";



            $chkProCategory  = ProductCategory::where('product_id', $v->product_id)->first();
            $getrow = AdditionalProducts::where('product_id', $v->product_id)->first();
            //echo "$getrow->referrance_product_id.'<br>'";
            if (!empty($getrow->referrance_product_id)) {

                $proName = Product::where('id', $getrow->referrance_product_id)->first();
                $ticketName = !empty($proName) ? $proName->name : ""; //!empty($proName) ? '<b>'.$proName->name.':</b>' : "";
                $ticketHistory = TicketHistory::where('product_id', $getrow->referrance_product_id)
                    ->where('orderId', $order_id)
                    ->get();

                $tickets = [];
                foreach ($ticketHistory as $history) {
                    $tickets[] = $history->ticket_number;
                }
                $implodedtickets = empty($tickets) ? '' : implode(', ', $tickets);
                //echo "$chkProCategory->category_id-----products...pid : $v->product_id<br>";

            }

            $orders[] = [
                'product_id'      => $v->product_id,
                'product_name'    => $v->product_name,
                'attri_val_name'  => $attrvalName,
                'thumbnail_img'   => url($v->thumnail_img),
                'quantity'        => $v->quantity,
                'price'           => $v->price,
                'ticketName'      => strip_tags($ticketName),
                'ticketsNumber'   => $implodedtickets,
                'total'           => $v->quantity * $v->price,

            ];
        }

        $setting = Setting::where('id', 1)->first();
        $findCustomer = Customer::where('id', $findorder->customer_id)->first();
        $order['customername']      = !empty($findCustomer->name) ? $findCustomer->name : "";
        $order['customeremail']     = !empty($findCustomer->email) ? $findCustomer->email : "";
        $order['orderdata']         = $orders;
        $order['orderrow']          = !empty($findorder->orderstatus) ? $findorder->orderstatus : "";
        $order['orderstatus_id']    = !empty($findorder->orderstatus_id) ? $findorder->orderstatus_id : "";
        $order['total']             = $findorder->total;
        $order['amount']            = $findorder->amount;
        $order['odate']             = !empty($findorder->created_at) ? date('d-m-Y', strtotime($findorder->created_at)) : "";
        $order['txtid']             = !empty($findorder->txtid) ? $findorder->txtid : "";
        $order['orderId']           = $order_id;
        $order['OrderStatus']       = $orderStatus;
        $order['percentageAmount']  = $findorder->percentageAmount;
        $order['walletBalance']     = $findorder->walletBalance;

        $order['shipping_fee']      = number_format($setting->shipping_fee, 2);
        $calculate                  = $findorder->amount - $setting->shipping_fee;
        $order['subtotal']          = number_format($calculate, 2);
        $order['orderInfo']         = Order::join('order_status', 'order_status.id', '=', 'orders.order_status')->select('orders.*', 'order_status.name as orderstatus', 'order_status.id as orderstatus_id')->where('orderId', $order_id)->first();

        // $order['shipping_fee']      = $findorder->shipping_fee;

        //dd($data['orderStatus']);
        return response()->json($order, 200);
    }
    public function allOrders()
    {

        $data['orders']  = Order::join('order_status', 'orders.order_status', '=', 'order_status.id')
            ->select('orders.*', 'order_status.name')
            ->where('orders.customer_id', $this->userid)
            ->orderBy('orders.id', 'DESC')
            //
            ->get(); //Order::where('customer_id', $this->userid)->get();
        foreach ($data['orders'] as $v) {
            $orders[] = [
                'name'         => $v->name,
                'orderId'      => $v->orderId,
                'placeOn'      => date_format(date_create($v->created_at), "Y-m-d"),
                'total'        => number_format($v->total, 2),

            ];
        }

        $order['orderdata']      = $orders;

        return response()->json($order, 200);
    }

    public function activeTickets()
    {

        $tickets  = TicketHistory::join('product', 'product.id', '=', 'ticket_history.product_id')
            ->select('product.id', 'product.name', 'product.price', 'ticket_history.orderId', 'product.thumnail_img')
            ->where('ticket_history.category_id', 27)
            ->where('ticket_history.customer_id', $this->userid)
            ->groupBy('ticket_history.orderId')
            ->orderBy('product.id', 'desc')
            ->get();

        foreach ($tickets as $v) {
            $ticketHistory = TicketHistory::where('product_id', $v->id)
                ->where('orderId', $v->orderId)
                ->get();
            $tickets = [];
            foreach ($ticketHistory as $history) {
                $tickets[] = $history->ticket_number;
            }
            $implodedtickets = empty($tickets) ? '' : implode(', ', $tickets);

            $total_tickets  = TicketHistory::where('product_id', $v->id)->count();
            $total_selling  = TicketHistory::where('product_id', $v->id)->whereNotNull('orderId')->count();
            $tickets  = TicketHistory::where('orderId', $v->orderId)->where('ticket_history.category_id', 27)->count();
            $current_stock  = ($total_tickets - $total_selling);

            $orders[] = [
                'id'           => $v->id,
                'name'         => $v->name,
                'orderId'      => $v->orderId,
                'total_tickts' => $total_tickets,
                'ticketsSum'   => $tickets,
                'total_selling' => $total_selling,
                'implodedtickets' => $implodedtickets,
                'thumbnail_img'   => url($v->thumnail_img),
                'placeOn'      => date_format(date_create($v->created_at), "Y-m-d"),
                'price'        => number_format($v->price, 2),
            ];
        }

        $order['orderdata']      = $orders;

        return response()->json($order, 200);
    }

    public function allOrdersAdmin()
    {

        $orders = [];
        $data['orders']  = Order::join('order_status', 'orders.order_status', '=', 'order_status.id')
            ->select('orders.*', 'order_status.name')
            ->orderBy('orders.id', 'DESC')
            ->get(); //Order::where('customer_id', $this->userid)->get();
        foreach ($data['orders'] as $v) {


            $orders[] = [
                'id'                => $v->id,
                'name'              => $v->name,
                'orderId'           => $v->orderId,
                'amount'            => $v->amount,
                'payment_getway'    => $v->payment_getway,
                'placeOn'           => date_format(date_create($v->created_at), "Y-m-d"),
                'total'             => number_format($v->total, 2),
            ];
        }

        $order['orderdata']      = $orders;

        return response()->json($order, 200);
    }


    public function confirmemail($lastOrderId)
    {

        $to = "mdbijon@gmail.com";
        $cc = "pronaykumarbormon@gmail.com, mmdmamun@gmail.com";
        $subject = "WINUP360 ORDER NOTIFICATION";
        $message = "Your new order has arrived.Check the Orders section of the admin panel.Order ID: $lastOrderId";

        $headers = "From: Customer Order Confirmation\r\n";
        $headers .= "Cc: $cc\r\n"; // Add CC recipients here
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
        // Send the email
        mail($to, $subject, $message, $headers);
        return response()->json(['message' => 'Email sent successfully!']);
    }

    public function confirmsendMsg($lastOrderId)
    {
        $url = "http://139.99.39.237/api/smsapi";
        $api_key  = "0YvO1UoW99Z4TprlGUr4";
        $senderid = "8809604902507";
        $number = "8801915728982,8801760075076";
        //$number   = "88$phone_number";
        $message  = "WINUP360 ORDER NOTIFICATION. ORDER ID: $lastOrderId";
        $data = [
            "api_key"  => $api_key,
            "senderid" => $senderid,
            "number"   => $number,
            "message"  => $message
        ];

        //dd($data);
        //exit; 
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        $response = curl_exec($ch);
        curl_close($ch);
        return $response;
    }

    public function submitOrder(Request $request)
    {

        //$pre_setting  =  Setting::find(1);
        $chkWBalance = User::where('id', $this->userid)->first();
        if (!empty($chkWBalance) && floatval($chkWBalance->wallet_balance) > 0) {
            //echo "have balance";
            $udata['wallet_balance'] = 0;
            User::where('id', $this->userid)->update($udata);
        }
        $validator = Validator::make($request->all(), [
            'txtid'           => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $randomNum = $this->userid . $this->generateUniqueRandomNumber() . "-" . date("y");

        $cart     = $request->input('cart');
        $txtid    = $request->input('txtid');

        $total           = floatval($request->input('subtotal_amt'));
        $itemsubtotal    = $request->input('itemsubtotal');
        $percentageAmount = $request->input('percentageAmount');
        $walletBalance   = $request->input('walletBalance');
        $copon_amount    = $request->input('copon_amount');
        $payment_getway  = $request->input('payment_getway');
        $totalShippingFees  = $request->input('totalShippingFees');
        ///dd($cartData);

        $order                  = new Order();
        $order->orderId         = $randomNum;
        $order->txtid           = $txtid;
        $order->payment_getway  = $payment_getway;
        $order->itemstotal      = $itemsubtotal;
        $order->shipping_fee    = $totalShippingFees;
        $order->total           = $total;
        $order->percentageAmount = $percentageAmount;
        $order->walletBalance   = $walletBalance;
        $order->copon_amount    = $copon_amount;
        $order->customer_id     = $this->userid;
        $order->order_status    = 1; // Order Placed 
        $order->save();
        // Get the last inserted order ID
        $lastOrderId = $order->id;
        // Update orderId with the last inserted order ID

        $itemtotal = 0;
        foreach ($cart as $cartItem) {
            $productid        = $cartItem['id'];
            $quantity         = $cartItem['quantity'];
            $attribue_val_id  = $cartItem['attribue_val_id'];
            $price            = $cartItem['price']; //str_replace(',', '', $cartItem['price']); // Remove commas
            $price            = floatval($price); // Convert to float

            $subtotal = $quantity * $price;
            // Add the subtotal to the total
            $itemtotal += $subtotal;
            $order_history                  = new OrderHistory();
            $order_history->order_id        = $lastOrderId;
            $order_history->product_id      = $productid;
            $order_history->attribue_val_id      = $attribue_val_id;
            $order_history->quantity        = $quantity;
            $order_history->price           = $price;
            $order_history->total           = $itemtotal;
            $order_history->save();
        }
        $odata['orderid'] = $lastOrderId;
        $odata['msg']     = $lastOrderId;
        //send mail
        $this->confirmsendMsg($lastOrderId);
        //email 
        //$this->confirmemail($lastOrderId);
        return response()->json($odata);
    }
}
