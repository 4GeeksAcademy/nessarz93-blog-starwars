import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CardCharacter from "../component/cardCharacter";
import CardPlanet from "../component/cardPlanets";

export const Home = () => {

const{store} = useContext(Context)

//Traer el API de personajes
	const [people, setPeople] = useState([]);
	function getPeople(){
		console.log('getPeople')
		fetch('https://swapi.dev/api/people/')
		.then( (response) => response.json())
		.then( (data) => setPeople(data.results))
		// .then((data)=> console.log(data.results))
	}

	const [planets, setPlanets] = useState([]);
	function getPlanets(){
		console.log('getPlanets')
		fetch('https://swapi.dev/api/planets')
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
				{people.map( (ppl, index) => <CardCharacter className="col-xs-4"  idc={index + 1} name={ppl.name} gender={ppl.gender} hair_color={ppl.hair_color} eye_color={ppl.eye_color}/>)}
		</div>

		{/*Espacio para Planetas*/}
		<h2 className="text-danger m-3">Planets</h2>
		<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 overflow-auto">
				{planets.map( (planet, index)=> <CardPlanet className="col-xs-4" idp={index + 1} name={planet.name} population={planet.population} terrain={planet.terrain}/>)}
		</div>
		
	</div>
	)
};
