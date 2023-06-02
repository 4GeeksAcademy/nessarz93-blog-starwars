import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import CardCharacter from "../component/cardCharacter";
import CardPlanet from "../component/cardPlanets";

export const Home = () => {

//Traer el API de personajes
	const [people, setPeople] = useState([]);
	function getPeople(){
		console.log('getPeople')
		fetch('https://www.swapi.tech/api/people/')
		.then( (response) => response.json())
		.then( (data) => setPeople(data.results))
		// .then((data)=> console.log(data.results))
	}

	const [planets, setPlanets] = useState([]);
	function getPlanets(){
		console.log('getPlanets')
		fetch('https://www.swapi.tech/api/planets')
		.then( (response) => response.json())
		.then( (data) => setPlanets(data.results))
	}

//Iniciar API al cargar la página -Personajes
	useEffect(()=> {
		getPeople()
		getPlanets()
	},[]);


	//Aquí empieza el body
	return (
	<div className="container">
		{/*Espacio para personajes*/}
		<h2 className="text-danger m-3">Characters</h2>
		<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 overflow-auto">
				{people.map( (ppl) => <CardCharacter className="col-xs-4"  idc={ppl.uid} name={ppl.name} gender={ppl.gender} hair_color={ppl.hair_color} eye_color={ppl.eye_color}/>)}
		</div>

		{/*Espacio para Planetas*/}
		<h2 className="text-danger m-3">Planets</h2>
		<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 overflow-auto">
				{planets.map( (planet)=> <CardPlanet className="col-xs-4" idp={planet.uid} name={planet.name} population={planet.population} terrain={planet.terrain}/>)}
		</div>
		
	</div>
	)
};
