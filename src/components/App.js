import React, {Component} from 'react';


import AppHeader from './AppHeader';
import ContactsList from './ContactsList';

class App extends Component {
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
					<ContactsList/>
				</main>
			</div>
		);
	}
}

export default App;