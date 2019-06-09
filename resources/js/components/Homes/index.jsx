import React, {useEffect, useState} from 'react';
import {homesApi} from 'utils/api/index'
import useGlobal from "store/store";
import {SearchForm, Loader, ListHome} from 'components';

const Homes = () => {
    const [globalState, globalActions] = useGlobal();
    const {isReady, homes} = globalState;
    useEffect(() => {
        if (!isReady) {
            homesApi.get().then(response => {
                globalActions.addToHomes(response.data.data);
                globalActions.toggleReady();
            })
        }


    }, [])
    return (
        <div>
            <SearchForm/>
            {!isReady ? <Loader/> : <ListHome items={homes}/>}
        </div>
    )
}

export default Homes
