<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use App\Models\Setting;
use Validator;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use DB;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register', 'showProfileData', 'updateprofile', 'updatePassword']]);
    }
    protected function validateLogin(Request $request)
    {
        $request->validate([
            'email' => 'required|string',
            'password' => 'required|string',
        ]);
    }
    public function login(Request $request)
    {
        // Validate the request
        $this->validateLogin($request);
        $credentials = request(['email', 'password']);
        if (!$token = auth('api')->attempt($credentials)) {
            return response()->json([
                'errors' => [
                    'account' => [
                        "Invalid username or password"
                    ]
                ]
            ], 422);
        }

        $user = auth('api')->user();
        if ($user && $user->status == 1) {
            return $this->respondWithToken($token);
        } elseif ($user && $user->status == 0) {
            return response()->json([
                'errors' => [
                    'account' => [
                        "Your Account is not verified"
                    ]
                ]
            ], 401);
        } else {
            // User is not authenticated
            return response()->json([
                'errors' => [
                    'account' => [
                        "Authentication failed"
                    ]
                ]
            ], 401);
        }
    }
    function generateUniqueNumber()
    {

        $randomNumber = rand(1000, 9999);
        return $randomNumber;
    }


    public function register(Request $request)
    {
        $setting = Setting::find(1);

        if (!empty($setting)) {
            $presetting =  (int) $setting->wallet_balance;
        } else {
            $presetting =  1;
        }
        $uniqueNumber = $this->generateUniqueNumber();

        $this->validate($request, [
            'name' => 'required',
            'phone_number' => 'required|numeric|unique:users,phone_number',
            'email' => 'required|unique:users,email',
            'password' => 'required|min:6'
        ]);
        $user = User::create([
            'name'     => $request->name,
            'email'    => $request->email,
            'role_id'  => 2,
            'status'   => 0,
            'wallet_balance' => $presetting,
            'phone_number'   => $request->phone_number,
            'password'       => bcrypt($request->password),
            'show_password'  => $request->password,
            'verifyCode'     => $uniqueNumber,

        ]);
        $this->sms_send($request->phone_number, $uniqueNumber);
        $token = auth('api')->login($user);
        return $this->respondWithToken($token);
    }

    function sms_send($phone_number, $uniqueNumber)
    {
        $url = "http://139.99.39.237/api/smsapi";
        $api_key  = "0YvO1UoW99Z4TprlGUr4";
        $senderid = "8809604902507";
        //$number = "88016xxxxxxxx,88019xxxxxxxx";
        $number   = "88$phone_number";
        $message  = "Your Winup360 verification code is $uniqueNumber. Please visit https://winup360.com/";
        $data = [
            "api_key" => $api_key,
            "senderid" => $senderid,
            "number" => $number,
            "message" => $message
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
    public function me()
    {
        return response()->json($this->guard('api')->user());
    }
    public function logout()
    {
        auth()->guard('api')->logout();
        return response()->json(['message' => 'Successfully logged out']);
    }
    public function refresh()
    {
        return $this->respondWithToken($this->guard('api')->refresh());
    }
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60
        ]);
    }
    public function guard()
    {
        return Auth::guard();
    }
    public function profile(Request $request)
    {
        $user = auth('api')->user();
        $this->validate($request, [
            'name' => 'required',
            'email' => "required|unique:users,email, $user->id",
            'password' => 'sometimes|nullable|min:8'
        ]);
        $user->update([
            'name' => $request->name,
            'email' => $request->email,
        ]);
        if ($request->password) {
            $user->update([
                'password' => bcrypt($request->password),
            ]);
        }
        return response()->json([
            'success' => true,
            'user' => $user
        ], 200);
    }
    public function updateprofile(Request $request)
    {
        $user = auth('api')->user();
        $authId = $user->id;
        $validator = Validator::make($request->all(), [
            'name'           => 'required',
            'email'          => 'required',
            'phone_number'   => 'required',
            // 'address_1' => 'required',
            // 'state_id' => 'required',
            //'address' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $data = array(
            'id'                => $authId,
            'name'              => !empty($request->name) ? $request->name : "",
            'email'             => !empty($request->email) ? $request->email : "",
            'phone_number'      => !empty($request->phone_number) ? $request->phone_number : "",
            'address_1'         => !empty($request->address_1) ? $request->address_1 : "",
            'address_2'         => !empty($request->address_2) ? $request->address_2 : "",
            'nationality_id'    => !empty($request->nationality_id) ? $request->nationality_id : "",
            'state_id'          => !empty($request->state_id) ? $request->state_id : "",
            'address'           => !empty($request->address) ? $request->address : "",
            'website'           => !empty($request->website) ? $request->website : "",
            'github'            => !empty($request->github) ? $request->github : "",
            'twitter'           => !empty($request->twitter) ? $request->twitter : "",
            'instagram'         => !empty($request->instagram) ? $request->instagram : "",
            'facebook'          => !empty($request->facebook) ? $request->facebook : "",
            'gender'            => !empty($request->gender) ? $request->gender : "",
            'date_of_birth'     => !empty($request->date_of_birth) ? $request->date_of_birth : "",
        );
        if (!empty($request->file('file'))) {
            $documents = $request->file('file');
            $fileName = Str::random(20);
            $ext = strtolower($documents->getClientOriginalExtension());
            $path = $fileName . '.' . $ext;
            $uploadPath = '/backend/files/';
            $upload_url = $uploadPath . $path;
            $documents->move(public_path('/backend/files/'), $upload_url);
            $data['image'] = $upload_url;
        }
        //dd($data);
        DB::table('users')->where('id', $authId)->update($data);
        $response = [
            'imagelink' => !empty($user) ? url($user->image) : "",
            'message' => 'User successfully update'
        ];
        return response()->json($response);
    }

    function get_balance()
    {
        $url = "http://139.99.39.237/api/getBalanceApi";
        $api_key = "0YvO1UoW99Z4TprlGUr4";
        $data = [
            "api_key" => $api_key
        ];
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        $response = curl_exec($ch);
        curl_close($ch);
        $responseData = json_decode($response, true);
        if ($responseData['response_code'] === 202) {
            // Return the balance in number format
            return number_format($responseData['balance'], 2, '.', '');
        } else {
            // Handle the case when the response code is not 202
            return "Error: Unable to fetch balance";
        }
    }


    public function showProfileData(Request $request)
    {
        $data    = auth('api')->user();
        $balance = $this->get_balance();
        $tdate   = date('Y-m-d');

        $countsProducts = Product::where('status', 1)->count();
        $customer       = Customer::where('status', 1)->count();
        $countsOrder    = Order::whereDate('created_at', '=', $tdate)->count();



        return response()->json([
            'data'        => $data,
            'sms_balance' => $balance,
            'countProduct' => $countsProducts,
            'countOrder'  => $countsOrder,
            'countCust'   => $customer,
            'dataImg'     => !empty($data->image) ? url($data->image) : "",
            'message'     => 'User Profile Data'
        ]);
    }
    public function changesPassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'password' => 'required|min:1|confirmed',
            'password_confirmation' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $id = auth('api')->user();
        $user = User::find($id->id);
        //dd($currentuser->username);
        $user->password = Hash::make($request->password);
        $user->show_password = $request->password;
        $user->save();
        $response = "Password successfully changed!";
        return response()->json($response);
    }
}
