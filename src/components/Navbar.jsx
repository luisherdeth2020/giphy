const Navbar = ({title}) => {
	return (
		<nav className="navbar">
			<div className="container">
				<a href="/">{title}</a>
			</div>
		</nav>
	);
};

export default Navbar;
