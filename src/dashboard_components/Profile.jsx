import React from 'react';
import Dnavbar from './Dnavbar';

const Profile = () => {
    return(
        <>
            <Dnavbar />
            <div className="my-5">
                <div className="mb-5">
                <h1 className="text-center"> Profile </h1>
                </div>
                <div className="container Sihnup_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto" >
                            <form>
                                <div className="mb-3">
                                <label className="form-label">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    
                                    name="fullname"
                                    placeholder="Enter your name"
                                />
                                </div>
                                <div className="mb-3">
                                <label className="form-label">
                                    Phone
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    
                                    name="phone"
                                    placeholder="mobile number"
                                />
                                </div>
                                <div className="mb-3">
                                <label className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    
                                    name="email"
                                    placeholder="name@example.com"
                                />
                                </div>

                                <div className="mb-3">
                                <label  className="form-label">
                                    Reset Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    
                                    name="password"
                                    placeholder="****"
                                />
                                </div>
                                <div className="mb-3">
                                <label  className="form-label">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    
                                    name="confirmpassword"
                                    placeholder="****"
                                />
                                </div>
                                <div className="col-12">
                                
                                    <button className="btn btn-outline-primary" type="submit">
                                    Save
                                    </button>
                                
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Profile;