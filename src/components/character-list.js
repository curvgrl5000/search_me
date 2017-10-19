import React from 'react';
import peaks from '../peaks.json';

export default function CharacterList(props) {
	const characters = props.characters.map((character, index) =>
		<li key={index}>
			<strong>{character.name}</strong> ({character.actor}) - 
			{character.description}</li>
	);
	 console.log(peaks[0].name + " is the actor");
	 console.log(peaks[2].name + " is the actor" );
	 console.log(`${peaks[74].name} is the actor`) ;

	return(
		<ul className="character-list" aria-live="polite">
			{characters}
		</ul>
	);
}