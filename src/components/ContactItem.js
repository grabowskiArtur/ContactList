import React, {Component} from 'react';


class ContactItem extends Component {

	onMouseOverHandler(name){
		console.log("Najechalem na " + name);
	}

	render() {
		const {avatarUrl, name, phone } = this.props;
		return (
			<li className="item" onMouseOver={this.onMouseOverHandler.bind(null,name)}>
				<img src={avatarUrl} className="ui mini rounded image" alt="" />
				<div className="content">
					<h4 className="header">{name}</h4>
					<div className="description">{phone}</div>
				</div>
			</li>
		);
	}
}

export default ContactItem;