import React from 'react';

function AvatarItem({login}) {
	let imgUrl = "dupa";
	if (!login.includes("@")) {
		imgUrl = `https://api.adorable.io/avatars/55/${login}.png`;
	} else {
		var gravatar = require('gravatar');
		imgUrl = gravatar.url({login}, {s: '200', r: 'pg', d: '404'})
	}


	return (
		<img src={imgUrl} className="ui mini rounded image" alt={"Ala ma kota"}/>
	)
}

export default AvatarItem;