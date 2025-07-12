<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TicketHistory extends Model
{
    use HasFactory;
   
    public $table = "ticket_history";
    protected $fillable = ['product_id', 'ticket_number', 'orderId','status'];
    
}

