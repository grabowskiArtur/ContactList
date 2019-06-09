import React from 'react';

import AvatarItem from './AvatarItem';

function ContactItem({login, name, department }) {
	return (
		<li className="item">
			<AvatarItem login = {login} />
			<div className="content">
				<h4 className="header">{name}</h4>
				<div className="description">{department}</div>
			</div>
		</li>
	);
}

export default ContactItem;