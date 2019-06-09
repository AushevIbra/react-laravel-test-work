import React, {useEffect, useState} from 'react';
import useGlobal from "store/store";
import {homesApi} from "../../utils/api";

const SearchForm = () => {
    const initialState = {
        name: null,
        bedrooms: null,
        bathrooms: null,
        storeys: null,
        garages: null,
        priceX: null,
        priceY: null
    };
    const [params, setParams] = useState(initialState);
    const [globalState, globalActions] = useGlobal();

    const filter = () => {
        globalActions.toggleReady();
        globalActions.addToHomes([]);
        homesApi.get(params).then(response => {
            globalActions.addToHomes(response.data.data);
            globalActions.toggleReady();
        })
    }

    return (
        <div className="row">
            <div className="col-md-3 col-xs-12 form-group">
                <input type="text" className="form-control" placeholder="Name" onChange={e => setParams({...params, name: e.target.value})}/>
            </div>
            <div className="col-md-3 col-xs-12 form-group">
                <input type="number" className="form-control" placeholder="Bedrooms" onChange={e => setParams({...params, bedrooms: e.target.value})}/>
            </div>
            <div className="col-md-3 col-xs-12 form-group">
                <input type="number" className="form-control" placeholder="Bathrooms" onChange={e => setParams({...params, bathrooms: e.target.value})}/>
            </div>
            <div className="col-md-3 col-xs-12 form-group">
                <input type="number" className="form-control" placeholder="Storeys" onChange={e => setParams({...params, storeys: e.target.value})}/>
            </div>

            <div className="col-md-3 col-xs-12 form-group">
                <input type="number" className="form-control" placeholder="Garages" onChange={e => setParams({...params, garages: e.target.value})}/>
            </div>

            <div className="col-md-3 col-xs-12 form-group">
                <input type="number" className="form-control" placeholder="PriceX" onChange={e => setParams({...params, priceX: e.target.value})}/>
            </div>

            <div className="col-md-3 col-xs-12 form-group">
                <input type="number" className="form-control" placeholder="PriceY" onChange={e => setParams({...params, priceY: e.target.value})}/>
            </div>

            <div className="col-md-3 col-xs-12 form-group">
                <button className="btn btn-primary w-100" onClick={filter.bind(this)}>Filter</button>
            </div>
        </div>
    )
}

export default SearchForm;
