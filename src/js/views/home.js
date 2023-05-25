import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import CardCharacter from "../component/cardCharacter";

export const Home = () => {

	const [people, setPeople] = useState([]);
//Traer el API
	function getPeople(){
		console.log('getPeople')
		fetch('https://swapi.dev/api/people')
		.then( (response) => response.json())
		.then( (data) => setPeople(data.results))
	}

//Iniciar API al cargar la página
	useEffect(()=> {
		getPeople()
	},[]);

	return (
	<div className="text-center">
		<h1>Characters</h1>
		<div class="card-group">
			{people.map( (ppl)=> <CardCharacter className="d-flex p-2" name={ppl.name}/>)}
		</div>
		
	</div>
	)
};
