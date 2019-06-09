<?php

use Illuminate\Database\Seeder;

class HomesTableSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(){
        $file = fopen(base_path('public/data/data.csv'), 'r');
        $i = 0;
        while(($data = fgetcsv($file, 0, ',')) !== false){
            if($i == 0){
                $i++;
                continue;
            }
            \App\Models\Home::create([
                'name'      => $data[0],
                'price'     => $data[1],
                'bedrooms'  => $data[2],
                'bathrooms' => $data[3],
                'storeys'   => $data[4],
                'garages'   => $data[5],
            ]);
        }

    }
}
