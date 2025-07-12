<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\PasswordReset;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;

class PasswordResetController extends Controller
{

    public function resetPassowrd($id)
    {
        $data['id'] =  $id;
        return view('forget', $data);
    }

    public function passwordReset(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'id' => 'required',
            'password' => 'required|min:6',
            'password_confirmation' => 'required|same:password|min:6',
        ]);

        if ($validator->fails()) {
            if ($request->wantsJson()) {
                return response()->json(['errors' => $validator->errors()], 422);
            } else {
                return redirect()->back()->withErrors($validator)->withInput();
            }
        }

        $user = User::find($request->id);

        if (!$user) {
            return redirect()->back()->withErrors(['id' => 'User not found.'])->withInput();
            
        }

        $user->password = Hash::make($request->password);
        $user->show_password = $request->password;
        $user->save();

        if ($request->wantsJson()) {
            return response()->json(['message' => 'Password reset successfully']);
        } else {
            return redirect()->back()->with('message', 'Password reset successfully');
        }
    }
}
