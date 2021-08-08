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
                        <div class="card">
                            <div class="card-header">
                                Homework 1
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">HTML</h5>
                                <p class="card-text">Upload File in the format of .pdf</p>
                                <a href="#h" class="btn btn-outline-primary">Upload File</a>
                            </div>
                        </div>
                        <br></br>
                        <div class="card">
                            <div class="card-header">
                                Homework 2
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">CSS</h5>
                                <p class="card-text">Upload File in the format of .pdf</p>
                                <a href="#h" class="btn btn-outline-primary">Upload File</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Assignment;