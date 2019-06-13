import React, {Component} from 'react';

import ContactItem from './ContactItem';

class ContactsList extends Component {
	render() {
		return (
			<ul className="ui relaxed divided list selection" onMouseOver={this.onMouseOverHandler}>
				<ContactItem
					login="typeofweb1"
					name="Lena"
					department="JavaScript Developer"
				/>
				<ContactItem
					login="typeofweb2"
					name="Brian"
					department="Human Resources"
				/>
				<ContactItem
					login="typeofweb3"
					name="Rick"
					department="QA"
				/>
				<ContactItem
					login="artur.csik@gmail.com"
					name="Artur"
					department="CEO"
				/>
			</ul>
		)
	}

	onMouseOverHandler(){
		console.log("Najechalem na " + this);
	}
}

export default ContactsList;