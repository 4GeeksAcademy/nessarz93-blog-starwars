import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {

	const { store, actions } = useContext(Context);
	const params = useParams();

	const [personaje, setPersonaje] = useState({});
	function getPpl(){
		console.log('getPpl')
		fetch('https://www.swapi.tech/api/people/'+ params.theid)
		.then( (response) => response.json())
		.then( (data) => setPersonaje(data.result.properties))
		// .then((data)=> console.log(data.result))
	}

	useEffect(()=> {
		getPpl()
	},[]);

	console.log(params.theid)
	console.log(personaje);

	return (

		<div className="container">
			<div className="card mb-3">
				<div className="row g-0">
					<div className="col-md-4">
					<img src={"https://starwars-visualguide.com/assets/img/characters/"+params.theid+".jpg"} className="img-fluid rounded-start" alt="..."/>
					</div>
					<div className="col-md-8">
					<div className="card-body">
						<h1 className="card-title">{personaje.name}</h1>
						<p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
					</div>
					</div>
				</div>
			</div>

			<hr className="my-4 text-danger" />

			<div className="container text-center text-danger">
				<div className="row">
					<div className="col">
						<p>Name</p>
						{/* <p>{personaje.name}</p> */}
					</div>
					<div className="col">
						<p>Birth Year</p>
						<p>{props.name}</p>
					</div>
					<div className="col">
						<p>Gender</p>
						<p>{props.gender}</p>
					</div>
					<div className="col">
						<p>Height</p>
						<p>{props.name}</p>
					</div>
					<div className="col">
						<p>Skin Color</p>
						<p>{props.name}</p>
					</div>
					<div className="col">
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
