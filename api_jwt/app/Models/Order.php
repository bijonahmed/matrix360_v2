<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    public $table = "orders";
    protected $fillable = [
        'orderId', 'log_id', 'customer_id', 'amount', 'shipping_fee',
        'order_status',
        'billing_first_name',
        'billing_last_name',
        'billing_email',
        'billing_phone',
        'billing_street_address',
        'billing_appar_suite_address',
        'billing_state',
        'billing_post_code_zip',
        'shipper_first_name',
        'shipper_last_name',
        'shipper_email',
        'shipper_phone_number',
        'shipper_address',
        'shipper_apprt_suite_addr',
        'shipper_state',
        'shipper_zip',
        'payment_getway',
        'created_at'
    ];
}
