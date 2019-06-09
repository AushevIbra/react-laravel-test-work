<?php

namespace App\Http\Controllers;

use App\Models\Home;
use Illuminate\Http\Request;

class HomeController extends Controller {

    public function getHomes(Request $request, Home $home) {
        $params = $request->all('name', 'bedrooms', 'bathrooms', 'storeys', 'garages', 'priceX', 'priceY');
        $data = $home->filter($params);
        return new \App\Http\Resources\Home($data);
    }
}
