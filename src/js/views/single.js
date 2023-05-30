import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {

	const [people, setPeople] = useState({});
	function getPpl(){
		console.log('getPpl')
		fetch('https://swapi.dev/api/people/'+ params.theid)
		.then( (response) => response.json())
		.then( (data) => setPeople(data.result))
	}

	useEffect(()=> {
		getPpl()
	},[]);

	const { store, actions } = useContext(Context);
	const params = useParams();
	return (

		<div className="container">
			<div className="card mb-3">
				<div className="row g-0">
					<div className="col-md-4">
					<img src="https://www.acesalimpieza.com.mx/assets/images/team-1.jpg" className="img-fluid rounded-start" alt="..."/>
					</div>
					<div className="col-md-8">
					<div className="card-body">
						<h1 className="card-title">{params.theid}</h1>
						<p className="card-text"></p>
						<p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
					</div>
					</div>
				</div>
			</div>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
