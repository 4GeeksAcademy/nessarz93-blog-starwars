import React, { Component } from "react";
import { Link } from "react-router-dom";

export const CardPlanet = (props) => {
	return (
        <>
            <div className="card m-2" style={{width: "18rem"}}>
                <img src="https://isccoquimbo.cl/images/400X200.gif" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">
                    Population: {props.population} <br/>
                    Terrain: {props.terrain}
                </p>
                <Link to={"/planet/" + props.idc} className="btn btn-primary">Learn more</Link>
            </div>
            </div>
        </>
    )
    };

    export default CardPlanet;