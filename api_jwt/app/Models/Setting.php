<?php

namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use AuthorizesRequests;
use DB;

class Setting extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    public $table = "setting";

    protected $fillable = [
        'name',
        'deposit_service_charge',
        'bkash_number',
        'nagad_number',
        'rocket_number',
        'upay_number',
        'store_policy',
        'address',
        'email',
        'whatsApp',
        'copyright',



    ];
}
