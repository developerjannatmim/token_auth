<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

use App\Http\Controllers\UsersController;

Route::get('/users', [UsersController::class, 'index']);
Route::post('/store', [UsersController::class, 'store']);
Route::get('/users/{id}', [UsersController::class, 'show']);


Route::group(["middleware"=>"auth:santum"], function () {

    Route::delete('/users/{id}', [UsersController::class, 'destroy']);
    Route::get('/users/{id}/edit', [UsersController::class, 'edit']);
    Route::put('/users/{id}', [UsersController::class, 'update']);
});

Route::post('/register', [UsersController::class, 'register']);
Route::post('/login', [UsersController::class, 'login']);
//Route::post('/logout', [UsersController::class, 'logout']);