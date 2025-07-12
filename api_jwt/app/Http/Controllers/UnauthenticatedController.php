<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\AdditionalProducts;
use App\Models\Category;
use Illuminate\Http\Request;
use Auth;
use Validator;
use Helper;
use App\Models\Product;
use App\Models\Sliders;
use App\Models\ProductAdditionalImg;
use App\Models\ProductCategory;
use App\Models\PromoCode;
use App\Models\Categorys;
use App\Models\TicketHistory;
use App\Models\Setting;
use App\Models\User;
use Illuminate\Support\Str;
use App\Rules\MatchOldPassword;
use App\Models\Attribute;
use App\Models\Countrys;
use App\Models\ProductAttributes;
use Illuminate\Support\Facades\Hash;
use DB;
use File;
use PhpParser\Node\Stmt\TryCatch;
use function Ramsey\Uuid\v1;

class UnauthenticatedController extends Controller
{
    protected $frontend_url;
    protected $userid;

    public function resetPassword(Request $request)
    {
        //dd($request->all());
        $validator = Validator::make($request->all(), [
            'number' => 'required|numeric',
        ], [
            'number.required' => 'Mobile number is required.',
            'number.numeric' => 'Mobile number must be a numeric value.',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $number = $request->number;
        $user = User::where('phone_number', $number)->first();
        if (!empty($user)) {

            $reset_url = url('/reset-password', $user->id);
            $reset_url_without_tags = html_entity_decode(strip_tags($reset_url));
            $url = "http://139.99.39.237/api/smsapi";
            // $message = "Your reset link: $reset_url";
            $message = "We received a request to reset your password. Visit $reset_url to reset your password. Thanks, WINUP360.COM";

            $smsData = [
                "api_key" => "0YvO1UoW99Z4TprlGUr4",
                "senderid" => "8809604902507",
                "number" => "88$number",
                "message" => $message,
            ];
            // echo '<pre>';
            //  print_r($smsData);exit; 
            $this->sendSms($url, $smsData);
            $response = [
                'message' => "Success! We've sent you a reset link to your number. ***" . substr($number, -4),
                'otp_sts' => 1,
            ];
        } else {
            $response = [
                'message' => 'Invalid Number.',
                'otp_sts' => 0,
            ];
        }

        return response()->json($response);
    }

    // Method to send SMS using cURL or any other SMS service
    private function sendSms($url, $data)
    {

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

    public function verificationCode(Request $request)
    {
        $validator =   Validator::make($request->all(), [
            'step1' => 'required|numeric',
            'step2' => 'required|numeric',
            'step3' => 'required|numeric',
            'step4' => 'required|numeric',
        ], [
            'step1.required' => 'Step 1 is required.',
            'step1.numeric' => 'Step 1 must be a numeric value.',
            'step2.required' => 'Step 2 is required.',
            'step2.numeric' => 'Step 2 must be a numeric value.',
            'step3.required' => 'Step 3 is required.',
            'step3.numeric' => 'Step 3 must be a numeric value.',
            'step4.required' => 'Step 4 is required.',
            'step4.numeric' => 'Step 4 must be a numeric value.',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $verifyCode =  (int)$request->step1 . $request->step2 . $request->step3 . $request->step4;
        $checkpost = User::where('verifyCode', $verifyCode)->first();

        if (!empty($checkpost)) {

            $data['status'] = 1;
            User::where('verifyCode', $verifyCode)->update($data);
            $response = [
                'message' => 'Verification Successfull',
                'otp_sts' => 1
            ];
        } else {

            $response = [
                'message' => 'Verification failed',
                'otp_sts' => 0
            ];
        }
        return response()->json($response);
    }

    public function allCategory(Request $request)
    {
        $categories = Categorys::with('children.children.children.children.children')->where('parent_id', 0)->get();
        return response()->json($categories);
    }

    public function getCountrys(Request $request)
    {
        $categories = Countrys::where('status', 1)->get();
        return response()->json($categories);
    }

    public function preSetting()
    {

        $setting = Setting::find(1);
        $id       =  $this->userid;
        $response = User::find($id);
        $walletAddress =  !empty($response->wallet_balance) ? $response->wallet_balance : 0;

        $data = [
            'wallet_balance' => $walletAddress,
            'currency'      => $setting->currency,
            'shipping_fee'  => $setting->shipping_fee,
            'vat_percentage' => $setting->vat_percentage,
            'name'          => $setting->name,
            'email'         => $setting->email,
            'address'       => $setting->address,
            'whatsApp'      => $setting->whatsApp,
            'description'   => $setting->description,
            'website'       => $setting->website,
            'copyright'     => $setting->copyright,
            'fblink'        => $setting->fblink,
            'bkash_number'  => $setting->bkash_number,
            'bkash_fee'     => $setting->bkash_fee,
            'nagad_number'  => $setting->nagad_number,
            'nagad_fee'     => $setting->nagad_fee,
            'rocket_number' => $setting->rocket_number,
            'rocket_fee'    => $setting->rocket_fee,
            'upay_number'   => $setting->upay_number,
            'upay_fee'      => $setting->upay_fee,
        ];

        //dd($data);
        return response()->json($data);
        // $response = Setting::find(1);
        // return response()->json($response);
    }

    public function limitedProducts()
    {

        $data = Product::orderBy('id', 'desc')->select('id', 'name', 'thumnail_img', 'slug')->limit(12)->get();
        //dd($data);
        $collection = collect($data);
        $modifiedCollection = $collection->map(function ($item) {
            return [
                'id'        => $item['id'],
                'name'      => substr($item['name'], 0, 20),
                'thumnail'  => !empty($item->thumnail_img) ? url($item->thumnail_img) : "",
                'slug'        => $item['slug'],
            ];
        });
        //dd($modifiedCollection);
        return response()->json($modifiedCollection, 200);
    }

    public function topSellProducts()
    {
        $data = Product::orderBy('id', 'desc')->select('id', 'name', 'thumnail_img', 'slug')->limit(12)->get();
        foreach ($data as $v) {
            $result[] = [
                'id'   => $v->id,
                'name' => substr($v->name, 0, 12) . '...',
                'thumnail'  => !empty($v->thumnail_img) ? url($v->thumnail_img) : "",
                'slug'     => $v->slug,
            ];
        }

        // dd($result);
        return response()->json($result, 200);
    }

    public function findProductSlug($slug)
    {

        $pro_row  =  Product::where('product.slug', $slug)
            ->select('product.id', 'product.id as product_id', 'product.name', 'product.slug as pro_slug', 'product.stock_status', 'product.thumnail_img', 'description', 'product.price', 'product.discount', 'product.stock_qty', 'product.stock_mini_qty')
            ->first();

        $data['attrData'] = ProductAttributes::join('attributes_values', 'attributes_values.id', '=', 'product_attributes.attributes_val_id')
            ->select('product_attributes.*', 'attributes_values.name')
            ->where('product_id', $pro_row->id)->get();

        $additionalProducts  = AdditionalProducts::join('product', 'product.id', '=', 'additional_product.referrance_product_id')
            ->select('product.name as addi_pname', 'product.thumnail_img as addi_thumnail_img', 'description as addi_description', 'referrance_product_id', 'add_product_qty', 'add_product_price')
            ->where('product_id', $pro_row->id)->first();

        $proAtt =  ProductAttributes::join('attributes', 'attributes.id', '=', 'product_attributes.attributes_id')
            ->select('attributes.name', 'attributes.id')
            ->where('product_attributes.product_id', $pro_row->id)
            ->get();

        $prodAttr = [];
        foreach ($proAtt as $key => $v) {

            $prodAttr[] = [
                'id'     => $v->id,
                'name'   => $v->name,
            ];
        }

        // Add the 'attributes' key
        $data['pro_row'] = [
            'id'                => $pro_row->id,
            'product_id'        => $pro_row->product_id,
            'name'              => $pro_row->name,
            'pro_slug'          => $pro_row->pro_slug,
            'thumnail_img'      => url($pro_row->thumnail_img),
            'thumnail'          => url($pro_row->thumnail_img),
            'description'       => $pro_row->description,
            'price'             => $pro_row->price,
            'stock_status'      => $pro_row->stock_status,
            'discount'          => $pro_row->discount,
            'stock_qty'         => $pro_row->stock_qty,
            'stock_mini_qty'    => $pro_row->stock_mini_qty,
            'addi_pname'                => !empty($additionalProducts->addi_pname) ? $additionalProducts->addi_pname : "",
            'addi_thumnail_img'         => !empty($additionalProducts->addi_thumnail_img) ? url($additionalProducts->addi_thumnail_img) : "",
            'addi_description'          => !empty($additionalProducts->addi_description) ? $additionalProducts->addi_description : "",
            'referrance_product_id'     => !empty($additionalProducts->referrance_product_id) ? $additionalProducts->referrance_product_id : "",
        ];
        //dd($data['pro_row']);

        $ref         = AdditionalProducts::join('product', 'product.id', '=', 'additional_product.referrance_product_id')
            ->select('product.name as addi_pname', 'product.thumnail_img as addi_thumnail_img', 'description as addi_description', 'referrance_product_id', 'add_product_qty', 'add_product_price')
            ->where('product_id', $pro_row->id)->first();

        $data['additional'] = [
            'addi_pname'          => !empty($ref->addi_pname) ? $ref->addi_pname : "",
            'addi_thumnail'       => !empty($ref->addi_thumnail_img) ? url($ref->addi_thumnail_img) : "",
            'addi_ref_id'         => !empty($ref->referrance_product_id) ? $ref->referrance_product_id : "",
            'addi_product_price'  => !empty($ref->add_product_price) ? $ref->add_product_price : "",
            'add_product_qty'     => !empty($ref->add_product_qty) ? $ref->add_product_qty : "",
            'addi_description'    => !empty($ref->addi_description) ? $ref->addi_description : "",
        ];

        $product_chk       = Product::where('product.slug', $slug)
            ->select('product.id', 'product.id as product_id', 'product.name', 'product.slug as pro_slug', 'product.thumnail_img', 'description', 'product.price', 'product.discount', 'product.stock_qty', 'product.stock_mini_qty')
            ->get();
        $products = [];
        foreach ($product_chk as $key => $v) {

            $products[] = [
                'id'           => $v->id,
                'product_id'   => $v->product_id,
                'product_name' => $v->pro_name,
                'discount'     => $v->discount,
                'price'        => number_format($v->price, 2),
                'thumnail_img' => url($v->thumnail_img),
                'pro_slug'     => $v->pro_slug,

            ];
        }
        $findproductrow   = $data['pro_row'];
        //dd($findproductrow);

        $insertimg['product_id'] = $findproductrow['id'];
        $insertimg['images'] = $findproductrow['thumnail_img'];
        //dd($insertimg);

        $chkCategory = ProductCategory::where('product_id', $findproductrow['id'])->first();

        $chkpoings  = ProductAdditionalImg::where('product_id', $findproductrow['id'])->where('images', $findproductrow['thumnail_img'])->first();
        // dd($chkpoings);
        if (empty($chkpoings)) {
            ProductAdditionalImg::create($insertimg);
        }

        $data['att_img']   = ProductAdditionalImg::orderBy('id', 'desc')->where('product_id', $findproductrow['id'])->get();

        $mul_slider_img = [];
        foreach ($data['att_img'] as $v) {
            $mul_slider_img[] = [
                'product_id' => $v->product_id,
                'thumnail' => !empty($v->images) ? url($v->images) : "", // Assuming thumnail_img is the correct column name
            ];
        }

        //  dd($mul_slider_img);
        $data['slider_img']    = !empty($mul_slider_img) ? $mul_slider_img : "";
        $data['featuredImage'] = url($findproductrow['thumnail_img']);
        $data['product']       = $products;
        $data['category_id']   = $chkCategory->category_id;
        $data['prodAttr']      = $prodAttr;
        return response()->json($data, 200);
    }

    public function randomProductslimit()
    {

        $category_id = 27; //for tickets categoryies id 27. 
        $data = productCategory::join('product', 'product.id', '=', 'produc_categories.product_id')
            //  ->where('produc_categories.category_id', '!=', $category_id)
            ->inRandomOrder()
            ->orderBy('product.id', 'desc')
            ->select('product.id', 'product.name', 'product.thumnail_img', 'product.slug', 'product.price', 'product.stock_qty')
            ->limit(12)
            ->groupby('product.id')
            ->get();

        foreach ($data as $v) {
            $ref = AdditionalProducts::join('product', 'product.id', '=', 'additional_product.referrance_product_id')
                ->select('product.name as addi_pname', 'product.thumnail_img as addi_thumnail_img', 'referrance_product_id', 'add_product_qty', 'add_product_price')
                ->where('product_id', $v->id)->first();

            $result[] = [
                'id'                  => $v->id,
                'name'                => $v->name, //substr($v->name, 0, 50) . '...',
                'price'               => $v->price,
                'thumnail'            => !empty($v->thumnail_img) ? url($v->thumnail_img) : "",
                'slug'                => $v->slug,
                'addi_pname'          => !empty($ref->addi_pname) ? $ref->addi_pname : "",
                'addi_thumnail'       => !empty($ref->addi_thumnail_img) ? url($ref->addi_thumnail_img) : "",
                'addi_ref_id'         => !empty($ref->referrance_product_id) ? $ref->referrance_product_id : "",
                'addi_product_price'  => !empty($ref->add_product_price) ? $ref->add_product_price : "",
            ];
        }
        return response()->json($result, 200);
    }

    public function randomProducts(Request $request)
    {

        $data = ProductCategory::join('product', 'product.id', '=', 'produc_categories.product_id')
            // ->inRandomOrder()
            ->orderBy('product.id', 'desc')
            ->select('product.id', 'product.name', 'product.thumnail_img', 'product.slug', 'product.price', 'product.stock_qty', 'product.description')
            ->groupBy('product.id')
            ->paginate(8); // Paginate with 5 items per page

        $result = [];
        foreach ($data as $v) {
            $ref = AdditionalProducts::join('product', 'product.id', '=', 'additional_product.referrance_product_id')
                ->select('product.name as addi_pname', 'product.thumnail_img as addi_thumnail_img', 'referrance_product_id', 'add_product_qty', 'add_product_price')
                ->where('product_id', $v->id)->first();

            $result[] = [
                'id'        => $v->id,
                'name'      => $v->name, //substr($v->name, 0, 500) . '...',
                'price'     => $v->price,
                'thumnail'  => !empty($v->thumnail_img) ? url($v->thumnail_img) : "",
                'slug'                => $v->slug,
                'description'         => $v->description,
                'addi_pname'          => !empty($ref->addi_pname) ? $ref->addi_pname : "",
                'addi_thumnail'       => !empty($ref->addi_thumnail_img) ? url($ref->addi_thumnail_img) : "",
                'addi_ref_id'         => !empty($ref->referrance_product_id) ? $ref->referrance_product_id : "",
                'addi_product_price'  => !empty($ref->add_product_price) ? $ref->add_product_price : "",
            ];
        }

        return response()->json([
            'data' => $result,
            'pagination' => [
                'total' => $data->total(),
                'per_page' => $data->perPage(),
                'current_page' => $data->currentPage(),
                'last_page' => $data->lastPage(),
                'from' => $data->firstItem(),
                'to' => $data->lastItem(),
            ],
        ]);
    }

    public function sellingFast()
    {
        //$data = Product::orderBy('id', 'desc')->select('id', 'name', 'thumnail_img', 'slug')->limit(12)->get();

        $category_id = 27; //for tickets categoryies id 27. 
        $data = productCategory::join('product', 'product.id', '=', 'produc_categories.product_id')
            ->where('produc_categories.category_id', '!=', $category_id)
            ->orderBy('product.id', 'desc')
            ->select('product.id', 'product.name', 'product.thumnail_img', 'product.slug', 'product.price', 'product.stock_qty')
            ->limit(12)
            ->groupby('product.id')
            ->get();

        foreach ($data as $v) {

            $ref = AdditionalProducts::join('product', 'product.id', '=', 'additional_product.referrance_product_id')
                ->select('product.name as addi_pname', 'product.thumnail_img as addi_thumnail_img', 'referrance_product_id', 'add_product_qty', 'add_product_price')
                ->where('product_id', $v->id)->first();

            $result[] = [
                'id'   => $v->id,
                'name' => substr($v->name, 0, 50) . '...',
                'price' => $v->price,
                'thumnail'  => !empty($v->thumnail_img) ? url($v->thumnail_img) : "",
                'slug'      => $v->slug,
                'addi_pname'          => !empty($ref->addi_pname) ? $ref->addi_pname : "",
                'addi_thumnail'       => !empty($ref->addi_thumnail_img) ? url($ref->addi_thumnail_img) : "",
                'addi_ref_id'         => !empty($ref->referrance_product_id) ? $ref->referrance_product_id : "",
                'addi_product_price'  => !empty($ref->add_product_price) ? $ref->add_product_price : "",
            ];
        }
        return response()->json($result, 200);
    }

    public function getTickets()
    {

        $category_id = 27; //for tickets categoryies id 27. 
        $data = productCategory::join('product', 'product.id', '=', 'produc_categories.product_id')
            ->where('produc_categories.category_id', $category_id)
            ->orderBy('product.id', 'desc')
            ->select('draw_details', 'product.qty_status', 'product.id', 'product.name', 'product.thumnail_img', 'product.slug', 'product.price', 'product.stock_qty', 'product.stock_status', 'produc_categories.category_id')
            //->limit(12)
            ->get();

        $result = [];
        foreach ($data as $v) {

            $total_tickets  = TicketHistory::where('product_id', $v->id)->count();
            $total_selling  = TicketHistory::where('product_id', $v->id)->whereNotNull('orderId')->count();
            $current_stock  = ($total_tickets - $total_selling);

            $result[] = [
                'id'            => $v->id,
                'name'          => substr($v->name, 0, 350) . '...',
                'thumnail'      => !empty($v->thumnail_img) ? url($v->thumnail_img) : "",
                'slug'          => $v->slug,
                'price'         => $v->price,
                'stock_qty'     => $v->stock_qty,
                'category_id'   => $v->category_id,
                'qty_status'    => $v->qty_status,
                'stock_status'  => $v->stock_status,
                'total_tickets' => $total_tickets,
                'total_selling' => $total_selling,
                'draw_details'  => $v->draw_details,
            ];
        }

        $tdata['tickets']     = $result;
        $tdata['category_id'] = $category_id;
        return response()->json($tdata, 200);
    }

    public function slidersImages()
    {
        $data = Sliders::where('status', 1)->get();

        foreach ($data as $v) {
            $result[] = [
                'id'           => $v->id,
                'images'       => !empty($v->images) ? url($v->images) : "",
                'redirect_url' => $v->redirect_url,
            ];
        }

        return response()->json($result, 200);
    }

    public function productCategory($category_id)
    {
        $categorys = ProductCategory::join('product', 'product.id', '=', 'produc_categories.product_id')
            ->join('categorys', 'categorys.id', '=', 'produc_categories.category_id')
            ->select('categorys.name as categoryname', 'produc_categories.product_id', 'product.name', 'product.price', 'product.slug', 'product.thumnail_img')
            ->orderByDesc('product.id')
            ->where('produc_categories.category_id', $category_id)
            ->groupby('product.id') // Add this line to remove duplicate products
            ->get();

        // dd($categorys);

        $result = [];
        foreach ($categorys as $v) {

            $ref = AdditionalProducts::join('product', 'product.id', '=', 'additional_product.referrance_product_id')
                ->select('product.name as addi_pname', 'product.thumnail_img as addi_thumnail_img', 'referrance_product_id', 'add_product_qty', 'add_product_price')
                ->where('product_id', $v->product_id)->first();

            $result[] = [
                'product_id'   => $v->product_id,
                'price'        => $v->price,
                'name'         => substr($v->name, 0, 12) . '...',
                'thumnail'     => !empty($v->thumnail_img) ? url($v->thumnail_img) : "",
                'slug'         => $v->slug,
                'addi_pname'          => !empty($ref->addi_pname) ? $ref->addi_pname : "",
                'addi_thumnail'       => !empty($ref->addi_thumnail_img) ? url($ref->addi_thumnail_img) : "",
                'addi_ref_id'         => !empty($ref->referrance_product_id) ? $ref->referrance_product_id : "",
                'addi_product_price'  => !empty($ref->add_product_price) ? $ref->add_product_price : "",
                'category_name' => $v->categoryname,
            ];
        }

        //dd($result);

        $data['result']  = !empty($result) ? $result : [];
        return response()->json($data, 200);
    }

    public function filterCategory(Request $request)
    {
        $categories = Categorys::where('status', 1)->orderBy("name", "asc")->get();;
        return response()->json($categories);
    }

    public function sliders(Request $request)
    {
        $data = Sliders::where('status', 1)->orderBy("name", "asc")->get();;
        return response()->json($data);
    }

    public function filderProduct(Request $request)
    {
        $slug = $request->slug;
        $chkProNameRow   = Product::where('slug', $slug)->select('id', 'slug', 'name')->first();

        $prodata  = ProductCategory::where('product_id', $chkProNameRow->id)
            ->select('product.id', 'categorys.name as category_name', 'produc_categories.product_id', 'product.description', 'product.name as pro_name', 'produc_categories.category_id', 'thumnail_img', 'product.slug as pro_slug', 'product.download_link')
            ->join('product', 'product.id', '=', 'produc_categories.product_id')
            ->join('categorys', 'categorys.id', '=', 'produc_categories.category_id')
            ->first();
        //dd($prodata);
        $data['categoryname']  = $prodata->category_name;
        $data['description']   = $prodata->description;
        $data['download_link'] = $prodata->download_link;
        $data['product_name']  = substr($prodata->pro_name, 0, 12) . '...';
        $data['thumnail_img']  =  url($prodata->thumnail_img);
        return response()->json($data, 200);
    }

    public function getPaginatedData(Request $request)
    {

        $chkCategory = Categorys::where('slug', $request->slug)->select('id', 'parent_id', 'name', 'slug')->first();
        $proCategorys = ProductCategory::where('category_id', $chkCategory->id)
            ->select('product.id', 'product.discount', 'produc_categories.product_id', 'product.name as pro_name', 'produc_categories.category_id', 'description', 'price', 'thumnail_img', 'product.slug as pro_slug')
            ->join('product', 'product.id', '=', 'produc_categories.product_id')
            ->paginate($request->input('perPage', 20));

        $result = [];
        foreach ($proCategorys as $key => $v) {
            $result[] = [
                'id'           => $v->id,
                'product_name' => substr($v->pro_name, 0, 12) . '...', //$v->pro_name, // Use the alias 'pro_name' here
                'thumnail_img' => url($v->thumnail_img),
                'pro_slug'     => $v->pro_slug,
            ];
        }
        $data['result']        = $result;
        $data['pro_count']     = count($result);
        $data['categoryname']  = $chkCategory->name;
        $data['category_id']   = $chkCategory->parent_id;
        $data['category_slug'] = $chkCategory->slug;
        return response()->json($data, 200);
    }

    public function getProductrow(Request $request)
    {

        $products     = Product::where('slug', $request->slug)->select('product.counter', 'product.id', 'product.name', 'description', 'thumnail_img', 'product.download_link')->first();
        $proCategorys = ProductCategory::where('product_id', $products->id)
            ->select('categorys.id', 'categorys.name', 'categorys.slug')
            ->join('categorys', 'categorys.id', '=', 'produc_categories.category_id')
            ->first();

        $data['product_name']  = !empty($products->name) ? $products->name : "";
        $data['description']   = !empty($products->description) ? $products->description : "";
        $data['thumnail_img']  = url($products->thumnail_img);
        $data['download_link'] = !empty($products->download_link) ? $products->download_link : "";
        $data['category_id']   = $proCategorys->id;
        $data['category_slug'] = $proCategorys->slug;
        $data['category_name'] = $proCategorys->name;
        $data['counter']       = $products->counter;

        $product = Product::find($products->id);
        $product->counter += 1250;
        //Product::where('id', $products->id)->update(['counter' => $updateCounter]);
        $product->save();

        //dd($data);
        return response()->json($data, 200);
    }

    public function defaultShowingProduct()
    {
        $products     = Product::where('status', 1)->select('product.id', 'product.name', 'description', 'thumnail_img', 'slug')->limit(8)->get();
        $result = [];
        foreach ($products as $key => $v) {
            $categoryName = ProductCategory::where('product_id', $v->id)->select('categorys.name as category_name')->join('categorys', 'categorys.id', '=', 'produc_categories.category_id')->first();
            $result[] = [
                'id'           => $v->id,
                'product_name' => substr($v->name, 0, 12) . '...',
                'thumnail_img' => url($v->thumnail_img),
                'pro_slug'     => $v->slug,
                'category_name' => !empty($categoryName->category_name) ? $categoryName->category_name : "",
            ];
        }
        //dd($data);
        return response()->json($result, 200);
    }

    //filter category
    public function findCategorys($slug)
    {
        $chkCategory   = Categorys::where('slug', $slug)->select('id', 'slug', 'parent_id', 'name')->first();
        $proCategorys  = ProductCategory::where('category_id', $chkCategory->id)
            ->join('product', 'product.id', '=', 'produc_categories.product_id')
            ->select('product.id', 'product.download_link', 'produc_categories.product_id', 'product.name as pro_name', 'produc_categories.category_id', 'description', 'thumnail_img', 'product.slug as pro_slug')
            ->get();;

        $result = [];
        foreach ($proCategorys as $key => $v) {
            $result[] = [
                'id'           => $v->id,
                'product_id'   => $v->product_id,
                'name'         => $v->pro_name, // substr($v->pro_name, 0, 12) . '...',
                'p_name'       => $v->pro_name,
                'category_id'  => $v->category_id,
                'download_link' => $v->download_link,
                'thumnail'     => url($v->thumnail_img),
                'slug'         => $v->pro_slug,

            ];
        }

        $data['result']        = $result;
        $data['pro_count']     = count($result);
        $data['categoryname']  = $chkCategory->name;
        $data['category_slug'] = $chkCategory->slug;
        $data['category_id']   = $chkCategory->parent_id;
        //dd($data);
        return response()->json($data, 200);
    }

    //For Home Pages Load More....
    public function defaultShowingMoviesHome(Request $request)
    {
        $perPage = 24; // Update to load 10 products at a time
        $page = $request->input('page', 1);
        $categoryId = 19; // 4k Movies
        $skip = ($page - 1) * $perPage;
        $products = ProductCategory::where('category_id', $categoryId)
            ->select('product.id', 'categorys.name', 'product.slug', 'product.name as product_name', 'product.thumnail_img')
            ->join('categorys', 'categorys.id', '=', 'produc_categories.category_id')
            ->join('product', 'product.id', '=', 'produc_categories.product_id')
            ->skip($skip)
            ->take($perPage)
            ->get();

        $result = [];
        foreach ($products as $key => $v) {
            $result[] = [
                'id'           => $v->id,
                'product_name' => substr($v->product_name, 0, 12) . '...',
                'thumnail_img' => url($v->thumnail_img),
                'pro_slug'     => $v->slug,
            ];
        }
        return response()->json($result);
    }
    public function loadMorePagination(Request $request)
    {
        $chkCategory = Categorys::where('slug', $request->slug)->select('id', 'parent_id', 'name', 'slug')->first();
        //dd($chkCategory->id);
        $perPage = 12; // Change this to the number of items per page
        $page = $request->input('page', 1);
        $products = ProductCategory::where('category_id', $chkCategory->id)
            ->select('product.id', 'categorys.name', 'product.slug', 'product.name as product_name', 'product.thumnail_img', 'product.download_link')
            ->join('categorys', 'categorys.id', '=', 'produc_categories.category_id')
            ->join('product', 'product.id', '=', 'produc_categories.product_id')
            ->paginate($perPage, ['*'], 'page', $page);

        $result = [];
        foreach ($products as $key => $v) {
            $result[] = [
                'id'           => $v->id,
                'product_name' => substr($v->product_name, 0, 12) . '...',
                'p_name'       => $v->product_name,
                'download_link'       => $v->download_link,
                'thumnail_img' => url($v->thumnail_img),
                'pro_slug'     => $v->slug,
            ];
        }

        // dd($result);
        return response()->json(['data' => $result, 'meta' => $products]);
    }

    public function autocomplete(Request $request)
    {
        $query = $request->input('q');
        $results = Product::where('name', 'like', "%$query%")->select('name', 'id', 'slug')->limit(10)->get();
        $data = [];
        foreach ($results as $key => $v) {
            $productid = (int)$v->id;
            $chkcat = ProductCategory::where('product_id', $productid)->select('category_id')->first();
            //echo $chkcat->category_id."===<br>"; 
            $parent = Categorys::where('id', $chkcat->category_id)->select('parent_id')->first();

            $data[] = [
                'value' => $productid,
                'label' => $v->name,
                'slug'  => $v->slug,
                'parent_id' => !empty($parent->parent_id) ? $parent->parent_id : '',

            ];
        }
        //dd($results);
        return response()->json($data);
    }

    public function search(Request $request)
    {
        $query = $request->query('query');
        $products = Product::where('name', 'LIKE', "%{$query}%")
            ->select('id', 'name','slug')
            ->limit(10)
            ->get();

        return response()->json($products);
    }

    public function allsubCategory()
    {
        try {
            $categories =  Categorys::where('parent_id', '!=', 0)->where('file', '!=', '')->where('status', 1)->get();
            $collection = collect($categories);
            $modifiedCollection = $collection->map(function ($item) {
                return [
                    'id'         => $item['id'],
                    'slug'       => $item['slug'],
                    'name'       => $item['name'],
                    'thumnail'   => !empty($item->file) ? url($item->file) : "",
                    'status'     => $item['status'],

                ];
            });
            //dd($modifiedCollection);
            return response()->json($modifiedCollection, 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function checkCoupon(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'couponCode' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Coupon code is required'], 422);
        }

        $dateToCheck = date("Y-m-d"); //'2023-12-20';
        //  echo $date;exit;
        $couponCode = $request->input('couponCode');
        $promoCode = PromoCode::where('coupon_code', $couponCode)
            ->whereDate('frm_date', '<=', $dateToCheck)
            ->whereDate('to_date', '>=', $dateToCheck)
            ->first();

        if ($promoCode) {
            return response()->json([
                'wallet_amount' => (int) $promoCode->coupon_amount,
                'message' => 'Coupon code is valid',
            ]);
        } else {
            return response()->json([
                //'wallet_amount' => '',
                'message' => 'Coupon code is invalid or has expired',
            ], 422);
        }
    }

    public function sendmail(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name'      => 'required',
            'email'     => 'required',
            'subject'   => 'required',
            'messages'  => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $name     = $request->name;
        $email    = $request->email;
        $subject  = $request->subject;
        $msg  = $request->messages;

        $to = "mdbijon@gmail.com";
        $subject = "$subject (matrix360sourcing)";

        $message = "
        <html>
        <head>
        <title>matrix360sourcing</title>
        </head>
        <body>
        <p>This email come contact us</p>
        <table>
        <tr>
        <th>Name</th>
        <th>Email</th>
         <th>Message</th>
        </tr>
        <tr>
        <td>$name</td>
        <td>$email</td>
        <td>$msg</td>
        </tr>
        </table>
        </body>
        </html>
        ";

        // Always set content-type when sending HTML email
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

        // More headers
        //$headers .= 'From: <webmaster@example.com>' . "\r\n";
        //$headers .= 'Cc: myboss@example.com' . "\r\n";

        mail($to, $subject, $message, $headers);
        return response()->json(['message' => 'Email sent successfully']);
    }
}
