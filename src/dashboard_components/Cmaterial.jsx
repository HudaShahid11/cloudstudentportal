import React from 'react';
import Dnavbar2 from './Dnavbar2';

const Cmaterial = () => {
    return(
        <>
            <Dnavbar2 />
            <div className="my-5">
                <h1 className="text-center"> Web Development </h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                <div className="col-10 mx-auto">
                <div class="card" >
                    {/* <img src="" class="card-img-top" alt="Image" /> */}
                   
                    <div class="card-body">
                        <h4 class="card-title">Overview</h4>
                        <p class="card-text">Web developers build and maintain websites. Web developers often work for clients who are trying to get their product or service onto the web. The work is typically very project focused and involves collaborating with a team that helps to coordinate the client's needs into the end product.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <h4 class="card-title">Introduction</h4>
                            <p class="card-text">
                                <ol>
                                    <li>Learn what the role of a web developer is and discuss the different types of web developers.</li>
                                    <li>Take a look at the skills required to become a web developer.</li>
                                    <li>Preview what we'll be learning over the next 5 days.</li>
                                    <li>Create your first webpage using a text editor and browser.</li>
                                </ol>
                            </p>
                        </li>
                        <li class="list-group-item">
                            <h4 class="card-title">Prerequisite</h4>
                            <p class="card-text">
                                <ol>
                                    <li>No pre-knowledge is required - enthusiasm is all you need!</li>
                                    <li>A PC or Mac is required</li>
                                    <li>No software is required in advance of the course (all software used in the course is free)</li>
                                </ol>
                            </p>
                        </li>
                        <li class="list-group-item">
                            <h4 class="card-title">Course Outline</h4>
                            <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem atque cumque, totam ipsum quo dicta illum hic facilis soluta modi, sunt ex excepturi, quidem accusantium. Doloribus, voluptate aperiam. Saepe, aut. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat ea eos reprehenderit voluptatem, exercitationem quia ad quam sed aspernatur suscipit deserunt mollitia cupiditate praesentium doloremque omnis tempora ratione a.</p>
                        </li>
                        <li class="list-group-item">
                            <h4 class="card-title">Resourses</h4>
                            <p class="card-text">
                                <ul>
                                    <li>Lecture 1: <a href="#pdf"> HTML5 </a></li>
                                    <li>Lecture 2: <a href="#pdf"> CSS </a></li>
                                    <li>Lecture 3: <a href="#pdf"> Flexbox </a></li>
                                    <li>Lecture 4: <a href="#pdf"> Responsive Design </a></li>
                                    <li>Lecture 5: <a href="#pdf"> JavaScript </a></li>
                                    <li>Lecture 6: <a href="#pdf"> Asynchronous JavaScript </a></li>
                                </ul>
                            </p>
                        </li>
                    </ul>
                    
                    {/* <div class="card-body">
                        <a href="#ho" class="card-link">Card link</a>
                        <a href="#jj" class="card-link">Another link</a>
                    </div> */}
                </div>
                </div>
                </div>
            </div>
            \
        </>
    );
}
export default Cmaterial;