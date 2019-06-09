import React, {Component} from 'react';

class AppHeader extends Component {
	render() {
		return (
			<header className="ui menu fixed">
				<nav className="ui container">
					<a href="#" className="header item">
						<img
							className="logo"
							src="https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png"
						/>
						Lista kontaktów
					</a>
					<div className="header item">
						<button className="ui button">Dodaj</button>
					</div>
				</nav>
			</header>
		);
	}
}

export default AppHeader;