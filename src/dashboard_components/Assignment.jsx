import React from 'react';
import Dnavbar2 from './Dnavbar2';

const Assignment = () => {
    return(
        <>
            <Dnavbar2 />
            <div className="my-5">
                <h1 className="text-center"> Homeworks </h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="card">
                            <div className="card-header">
                                Homework 1
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">HTML</h5>
                                <p className="card-text">Upload File in the format of .pdf</p>
                                <a href="#h" className="btn btn-outline-primary">Upload File</a>
                            </div>
                        </div>
                        <br></br>
                        <div className="card">
                            <div className="card-header">
                                Homework 2
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">CSS</h5>
                                <p className="card-text">Upload File in the format of .pdf</p>
                                <a href="#h" className="btn btn-outline-primary">Upload File</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Assignment;