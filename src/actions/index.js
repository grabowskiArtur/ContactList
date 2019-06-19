export const contactsFetched = (contacts) => ({
	type: 'FETCH_CONTACTS_SUCCESS',
	contacts
});

export const displayWarning = (isLoaded) => ({
	type: 'CONTACTS_DID_NOT_LOADED',
	isLoaded
});