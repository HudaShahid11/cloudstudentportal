import React from 'react';
import Dnavbar from './Dnavbar';
import Dcdata from "./Dcdata";
import Card from "../components/Card";

const Dashboard = () => {
    return(
        <>
            <Dnavbar />
            <div className="my-5">
                <h1 className="text-center"> Enrolled Courses </h1>
            </div>
            <div className="container mb-5">
                <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                    {Dcdata.map((val, ind) => {
                        return <Card key={ind} imgsrc={val.imgsrc} title={val.title} desc={val.desc} btntext={val.btntext} btnlink={"/cmaterial"}/>;
                    })}
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}
export default Dashboard;