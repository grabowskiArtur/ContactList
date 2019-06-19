export const isLoaded = (state = false, action) => { // (1)
	switch (action.type) { // (2)
		case 'CONCTACTS_DID_NOT_LOADED':
			return
				isLoaded = false;

		default:
			return state
	}
};