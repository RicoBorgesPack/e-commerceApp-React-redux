import React from 'react';
import { Link } from 'react-router-dom';


export default function Menubar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="col-lg-8 container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="#" className="nav-link active" aria-current="page" href="#">Heavy machinery</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link" >Eletronics</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link">Agriculture</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link">Tools and pieces</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link">Food industry</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
