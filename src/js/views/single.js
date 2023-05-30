import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {

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
						<p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
					</div>
					</div>
				</div>
			</div>

			<hr className="my-4 text-danger" />

			<div class="container text-center text-danger">
				<div class="row">
					<div class="col">
						<p>Name</p>
						<p>{props.name}</p>
					</div>
					<div class="col">
						<p>Birth Year</p>
					</div>
					<div class="col">
						<p>Gender</p>
						<p>{props.gender}</p>
					</div>
					<div class="col">
						<p>Height</p>
					</div>
					<div class="col">
						<p>Skin Color</p>
					</div>
					<div class="col">
						<p>Eye Color</p>
					</div>
				</div>
				<br/>
			</div>
			

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
