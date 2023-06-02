import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav class="navbar bg-body-tertiary">
			<div class="container-fluid">
				<Link class="navbar-brand" to="/home">
					<i class="fa-regular fa-starship-freighter">Star Wars</i>
				</Link>
				<button class="btn btn-primary d-flex justify-content-end" type="button">Favorites 0</button>
			</div>
		</nav>

	);
};

export default Navbar;