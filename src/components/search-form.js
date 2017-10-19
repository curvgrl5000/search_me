import React from 'react';

export default function SearchForm(props){
	return(
		<form className="top_form" onSubmit={event => event.preventDefault()}>
			<label htmlFor="search">Search</label>&emsp;
			<input type="search" id="search" name="search" size='27'
			placeholder="Dale Cooper" 
			onChange={event => props.onChange(event.target.value)}
			value={props.key}/>
		</form>
	);
}