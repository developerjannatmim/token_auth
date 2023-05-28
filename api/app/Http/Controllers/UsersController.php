<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    public function index()
    {
        return User::all();
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        return User::findOrFail($id);
    }


    public function edit($id)
    {
        return User::find($id);

    }

    public function update(Request $request, $id)
    {
        $user = User::whereId($id);
        $user->update([
           'name'=>$request->name,
           'email'=>$request->email,
           'password'=> Hash::make($request->password),
        ]);

        return response()->json();
    }

    public function destroy($id)
    {
        return User::destroy($id);
    }


    public function register(Request $request)
    {
        User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>$request->password
         ]);
         return response()->json('successfully created');
    }


    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if(!$user || !Hash::check($request->password, $user->password)){
            return response([
                'message'=>['not a valid user']
            ], 404);
        }
        $token = $user->createToken('my-app-tokeh')->plainTextToken;

        $response = [
            'user'=>$user,
            'token'=>$token,
        ];
        return response($response, 201);
    }



}