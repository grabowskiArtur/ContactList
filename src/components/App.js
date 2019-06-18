import React, {Component} from 'react';

import AppHeader from './AppHeader';
import ContactsList from './ContactsList';


class App extends Component {
	state = {
		contacts: []
	};

	componentDidMount() {
		fetch("https://randomuser.me/api/?format=json&results=10")
			.then(res => res.json())
			.then(json => this.setState({ contacts: json.results }));
	}

/*	componentDidMount() {
		var data = require('../data/contacts.json'); // forward slashes will depend on the file location

		for(var i = 0; i < data.length; i++) {
			var obj = data[i];

			console.log("Name: " + obj.first_name + ", " + obj.last_name);
		}
	}*/


	render() {
		const contacts = this.state.contacts;
		return (
			<div>
				<AppHeader/>
				<main className="ui main text container">
					<hr/>
					<hr/>
					<hr/>
					<hr/>
					<hr/>
					{/* eslint-disable-next-line no-undef */}
					{contacts ? <ContactsList contacts={contacts} /> : 'Ładowanie…'}
				</main>
			</div>
		);
	}
}

export default App;