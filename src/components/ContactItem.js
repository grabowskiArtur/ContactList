import React, {Component} from 'react';

import AvatarItem from './AvatarItem';

class ContactItem extends Component {
	render() {
		const {login, name, department } = this.props;
		return (
			<li className="item">
				<AvatarItem login={login}/>
				<div className="content">
					<h4 className="header">{name}</h4>
					<div className="description">{department}</div>
				</div>
			</li>
		);
	}
}

export default ContactItem;