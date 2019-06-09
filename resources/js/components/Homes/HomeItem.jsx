import React from 'react'
import PropTypes from "prop-types";

const HomeItem = ({id, name, bedrooms, bathrooms, storeys, garages, price}) =>
    (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{bedrooms}</td>
            <td>{bathrooms}</td>
            <td>{storeys}</td>
            <td>{garages}</td>
            <td>{price}</td>
        </tr>
    )
HomeItem.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    bedrooms: PropTypes.number,
    bathrooms: PropTypes.number,
    storeys: PropTypes.number,
    garages: PropTypes.number,
    price: PropTypes.number,
}

export default HomeItem;
