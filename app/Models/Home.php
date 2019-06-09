<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Http\Request;

class Home extends Model {
    use SoftDeletes;
    protected $guarded = [];

    /**
     * @param array $params
     * @return Collection
     */
    public function filter(array $params){
        $name = $params['name'];
        $bedrooms = $params['bedrooms'];
        $bathrooms = $params['bathrooms'];
        $storeys = $params['storeys'];
        $garages = $params['garages'];
        $priceX = $params['priceX'];
        $priceY = $params['priceY'];
        $homes = Home::
        when($name, function($query, $name){
            return $query->where('name', 'like', "%{$name}%");
        })
            ->when($bedrooms, function($query, $bedrooms){
                return $query->where('bedrooms', $bedrooms);
            })
            ->when($bathrooms, function($query, $bathrooms){
                return $query->where('bathrooms', $bathrooms);
            })
            ->when($storeys, function($query, $storeys){
                return $query->where('storeys', $storeys);
            })
            ->when($garages, function($query, $garages){
                return $query->where('garages', $garages);
            })
            ->when($priceY || $priceY, function($query) use ($priceX, $priceY){
                if($priceX && $priceY){
                    return $query->whereBetween('price', [$priceX, $priceY]);
                } else {
                    $price = $priceX ?? $priceY;
                    return $query->where('price', $price);
                }

            });

        return $homes->get();
    }
}
