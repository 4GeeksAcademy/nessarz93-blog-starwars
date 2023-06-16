import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar bg-body-tertiary">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					<i className="fa-regular fa-starship-freighter">Star Wars</i>
				</Link>
				<div className="btn-group">
					<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu">
						<li><a className="dropdown-item" href="#">Favorito</a></li>
					</ul>
				</div>
			</div>
		</nav>

	);
};

export default Navbar;