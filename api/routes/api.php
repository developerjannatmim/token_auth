<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeeController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

use App\Http\Controllers\UsersController;

// Public routes
Route::get('/employees', [EmployeeController::class, 'index']);
Route::post('/register', [UsersController::class, 'register']);
Route::post('/login', [UsersController::class, 'login']);

// Protected routes
Route::group(["middleware" => ["auth:sanctum"]], function () {
    Route::post('/save', [EmployeeController::class, 'store']);
    Route::get('/employees/{id}/edit', [EmployeeController::class, 'edit']);
    Route::put('/update/{id}', [EmployeeController::class, 'update']);
    Route::delete('/delete/{id}', [EmployeeController::class, 'destroy']);
    Route::post('/logout', [UsersController::class, 'logout']);
    Route::get('/me', fn (Request $request) => $request->user());
});

Route::get('/server', fn (Request $request) => response()->json($_SERVER));

// Accept: application/json
// Content-Type: application/json