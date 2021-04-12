import React from 'react';
import ReactDOM from 'react-dom';

function Index() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Employee Performance Review: Mutual Feedback System</div>
                        <div className="card-body">
                            <ui>
                                <li>
                                    <a href="employees">Employees</a>
                                </li>
                                <li>
                                    <a href="performance-review">Performance Review</a>
                                </li>
                            </ui>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
