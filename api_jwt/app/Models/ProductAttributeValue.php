<?php

namespace App\Models;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\AttributeValues;
use AuthorizesRequests;
use DB;

class ProductAttributeValue extends Authenticatable
{
  use HasApiTokens, HasFactory, Notifiable;
  public $table = "product_attributes";
  
  protected $fillable = [
    'attributes_id',
    'attributes_val_id',
    'category_id',
    'product_id',
    'stock_qty_out',
    'balance',
    'size_qty'
  ];
 
  public function subattribute()
    {
        return $this->hasMany(SubAttribute::class,'attributes_id');
    }


}
