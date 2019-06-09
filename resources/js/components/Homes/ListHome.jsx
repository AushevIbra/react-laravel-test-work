import React from 'react'
import PropTypes from "prop-types";
import {HomeItem} from 'components'

const ListHome = ({items}) => {
    return (
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Bedrooms</th>
                    <th>Bathrooms</th>
                    <th>Storeys</th>
                    <th>Garages</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {items === null || !items.length
                    ?
                    <tr>
                        <td colSpan="7">No data</td>
                    </tr>
                    :
                    items.map(item => <HomeItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        bedrooms={item.bedrooms}
                        bathrooms={item.bathrooms}
                        storeys={item.storeys}
                        garages={item.garages}
                        price={item.price}
                    />)

                }
                </tbody>
            </table>
        </div>

    )
}

ListHome.defaultProps = {
    items: null
}

ListHome.propTypes = {
    items: PropTypes.array
}
export default ListHome
