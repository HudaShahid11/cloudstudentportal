import React from 'react';
import Dnavbar2 from './Dnavbar2';

const Quiz = () => {
    return(
        <>
            <Dnavbar2 />
            <div className="my-5">
                <h1 className="text-center"> Quiz 1 </h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <form>
                        <div className="mb-2">
                        <label  className="form-label">
                            Question 1: Describe briefly about Web development.
                        </label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                        </div>
                        
                        <div className="mb-2">
                        <label  className="form-label">
                            Question 2: Define HTML.
                        </label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                        </div>

                        <div className="mb-2">
                        <label  className="form-label">
                            Question 3: Define CSS.
                        </label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                        </div>
                        
                        <div className="col-12">
                        
                            <button className="btn btn-outline-primary" type="submit">
                            Submit
                            </button>
                        
                        
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Quiz;