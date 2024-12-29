import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import aboutImage from './images/inotebook2.jpg';  // Place your image in the src/assets folder

const About = () => {
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h1 className="mb-4">About iNotebook</h1>
                    <p>
                        Welcome to <strong>iNotebook</strong>, your personal note-taking web app. iNotebook helps you organize and manage your notes efficiently.
                        Create, view, update, and delete your notes in a seamless and secure environment. 
                    </p>
                    <h3 className="mt-4">Features:</h3>
                    <ul className="list-group list-group-flush">
                  <li className="list-group-item bg-transparent border rounded-3 p-3 mb-2 shadow-sm hover:bg-light hover:shadow-lg">
                    Create personal notes easily
                  </li>
                  <li className="list-group-item bg-transparent border rounded-3 p-3 mb-2 shadow-sm hover:bg-light hover:shadow-lg">
                    Update existing notes in real-time
                  </li>
                  <li className="list-group-item bg-transparent border rounded-3 p-3 mb-2 shadow-sm hover:bg-light hover:shadow-lg">
                    View and organize all notes
                  </li>
                  <li className="list-group-item bg-transparent border rounded-3 p-3 mb-2 shadow-sm hover:bg-light hover:shadow-lg">
                    Secure your data with user authentication
                  </li>
                  </ul>
                </div>
                <div className="col-md-6 text-center">
                    <img src={aboutImage} alt="About iNotebook" className="img-fluid rounded shadow" />
                </div>
            </div>
        </div>
    );
};

export default About;
