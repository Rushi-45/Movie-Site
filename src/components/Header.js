import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import chair from '../assets/images/ch.jpg'

const Header = (props) => {
    return (
        <header className="App-header">
            <div className="row pt-2">
                <div className="col-md-6 title-img" >                    
                    <img src={chair} style={{height:"1.875rem",width:"1.875rem"}} />
                </div>
                <div className="col-6" >
                    <h2 className="title-head">{props.text}</h2>
                </div>
            </div>
        </header>
    );
};

export default Header;