<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;


class CheckAuthenticatedUser
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next)
    {
        // Check if the user is authenticated
        if (Auth::check()) {
            // Access the authenticated user's ID
            $userId = Auth::id();

            // Other validation logic related to the authenticated user

            // Pass the request to the next middleware in the pipeline
            return $next($request);
        }

        // User is not authenticated, return an error response
        return response()->json(['error' => 'User not authenticated'], 401);
    }
}
