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
	<div className="container">
		<h2 className="text-danger">Characters</h2>
		<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 overflow-auto">
		
				{people.map( (ppl)=> <CardCharacter className="col-xs-4" name={ppl.name}/>)}
		
		</div>
		
	</div>
	)
};
