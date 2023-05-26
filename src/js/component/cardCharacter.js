import React, { Component } from "react";
import { Link } from "react-router-dom";

export const CardCharacter = (props) => {
	return (
        <>
            <div className="card m-2" style={{width: "18rem"}}>
                <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="#" className="btn btn-primary">Go somewhere</Link>
            </div>
            </div>
        </>
    )
    };

    export default CardCharacter;