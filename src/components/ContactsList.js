import React, {Component} from 'react';

import ContactItem from './ContactItem';

class ContactsList extends Component {
	render() {
		return (
			<ul className="ui relaxed divided list selection">
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
					login="arturo@wp.pl"
					name="Artur"
					department="CEO"
				/>
			</ul>


		)
	}
}

export default ContactsList;