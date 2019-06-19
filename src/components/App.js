import React, {Component} from 'react';

import AppHeader from './AppHeader';
import ContactsList from './ContactsList';

import { connect } from "react-redux";
import { contactsFetched } from "../actions/index";
import { ContactsFilterContainer } from "./ConctactsFilter"
import { getFilteredContacts } from "../selectors/getFilteredContacts";

class App extends Component {

	componentDidMount() {
		fetch("https://randomuser.me/api/?format=json&results=10")
			.then(res => res.json())
			.then(json => this.props.contactsFetched(json.results));
	}

	render() {
		return (
			<div>
				<AppHeader/>
				<main className="ui main text container">
					<hr/>
					<hr/>
					<hr/>
					<hr/>
					<hr/>
					<p>Ala ma kota </p>
					<ContactsFilterContainer />
					{/* eslint-disable-next-line no-undef */}
					{this.props.isLoaded ? <ContactsList contacts={this.props.contacts} /> : "Loading..."}
				</main>
			</div>
		);
	}
}
export default App;

const mapStateToProps = (state) => {
	let isDefined = true;
	//console.log("state.contacts" + state.contacts);
	if (state.contacts === 'undefined')
	{
		isDefined = false;
	}
	return {
		contacts: getFilteredContacts(state.contacts, state.contactsSearch),
		isLoaded: isDefined
	}
};
const mapDispatchToProps = { contactsFetched };

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);