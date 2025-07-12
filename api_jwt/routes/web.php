<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Cart\CartController;
use App\Http\Controllers\UnauthenticatedController;
use App\Http\Controllers\PasswordResetController; // Replace with your actual controller namespace
use App\Http\Controllers\PayPalController;
use App\Http\Controllers\StripePaymentController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/pay', function () {
//     return view('pay_failed');
// });
//Route::get('register', 'App\Http\Controllers\Api\RegisterController@register');
//Route::post('paypal', [PaypalController::class, 'paypal'])->name('paypal');

Route::get('/cc', function () {
    Artisan::call('cache:clear');
    Artisan::call('config:clear');
    Artisan::call('route:clear');
    Artisan::call('view:clear');
    Artisan::call('config:cache');
    return 'Cache cleared!';
});
Route::controller(StripePaymentController::class)->group(function () {
    Route::get('stripe', 'stripe')->name('stripe.index');
    Route::get('stripe/checkout', 'stripeCheckout')->name('stripe.checkout');
    Route::get('stripe/checkout/success', 'stripeCheckoutSuccess')->name('stripe.checkout.success');
});


Route::get('success', 'App\Http\Controllers\PaypalController@success')->name('success');
Route::get('cancel', 'App\Http\Controllers\PaypalController@cancel')->name('cancel');
//Route::get('success', [PaypalController::class, 'success'])->name('success');
//Route::get('cancel', [PaypalController::class, 'cancel'])->name('cancel');
Route::get('getStoreCartData/{id}', [PaypalController::class, 'getStoreCartData'])->name('getStoreCartData');


Route::post('/resetPassword', [PasswordResetController::class, 'passwordReset'])->name('passwordReset');
Route::get('reset-password/{id}', [PasswordResetController::class, 'resetPassowrd']);
Route::post('add-to-cart', [CartController::class, 'addToCart']);
Route::post('/remove-from-cart', 'CartController@removeFromCart');
Route::get('cart', [CartController::class, 'index']);
Route::get('clearCart', [CartController::class, 'clearCart']);

Route::get('/', function () {
    return view('welcome');
});
