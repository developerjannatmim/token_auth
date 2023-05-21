<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function index()
    {
        return User::all();
    }

    public function store(Request $request)
    {
        return User::create($request->all());
    }

    public function show($id)
    {
        return User::findOrFail($id);
    }

    public function destroy($id)
    {
        return User::destroy($id);
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
        ]);

        return response()->json();
    }


}