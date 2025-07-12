<?php

namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use AuthorizesRequests;
use DB;

class AdditionalProducts extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    public $table = "additional_product";
    protected $fillable = [
        'product_id',
        'referrance_product_id',
        'add_product_qty',
        'add_product_price',
        'final_price',
    ];

 
}
