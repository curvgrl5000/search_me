import React from 'react';

export default function SearchForm(props){
	return(
		<form onSubmit={event => event.preventDefault()}>
			<label htmlFor="search">Search</label>&emsp;
			<input type="search" id="search" name="search" 
			placeholder="Dale Cooper" 
			onChange={event => props.onChange(event.target.value)}
			value={props.value}/>
		</form>
	);
}