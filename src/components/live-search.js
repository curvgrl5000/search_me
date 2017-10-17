import React from 'react';
import ReactDOM from 'react-dom';

import SearchForm from './search-form';
import CharacterList from './character-list';

export default function LiveSearch(props) {
	return (
		<div className="searching">
			<SearchForm />
			<CharacterList characters={props.characters} />
		</div>
	);
}