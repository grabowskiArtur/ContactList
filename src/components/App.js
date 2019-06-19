import React, {Component} from 'react';

import AppHeader from './AppHeader';
import ContactsList from './ContactsList';

import { connect } from "react-redux";
import { contactsFetched } from "../actions/index";
import {displayWarning} from "../actions";

class App extends Component {

	componentDidMount() {
		fetch("https://randomuser.me/api/?format=json&results=10")
			.then(res => res.json())
			.then(json => this.props.contactsFetched(json.results));
	}

	render() {
		const contacts = this.props.contacts;
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
					{contacts ? <ContactsList contacts={contacts} /> : this.props.displayWarning("Loading")}
				</main>
			</div>
		);
	}
}
export default App;

const mapStateToProps = (state) => {
	return {
		contacts: state.contacts, // (1)
		isLoaded: state.isLoaded
	}
};
const mapDispatchToProps = { contactsFetched, displayWarning }; // (2)

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App); // (3)