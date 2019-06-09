import React from 'react';
import ReactDOM from 'react-dom';
import { Homes } from './index'
const Example = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">Home Component</div>

                        <div className="card-body">
                            <Homes/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example/>, document.getElementById('example'));
}
