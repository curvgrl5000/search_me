import React from 'react';
import ReactDOM from 'react-dom';

import SearchForm from './search-form';
import CharacterList from './character-list';
import peaks from '../peaks.json';

export default class LiveSearch extends React.Component {
		constructor(props){
		super(props);
		this.state = {
			dataSearch: ''
		};
		this.update = this.update.bind(this);
	}

	update(dataSearch){
		this.setState({
			dataSearch : dataSearch
		})
	}

	matched(dataSearch, peaks){
		if (dataSearch.value === peaks.value) {
			console.log("something is matched!");
		}
	}

	render() {
		console.log({peaks});
		const currentSearch = this.state.dataSearch;
		console.log(currentSearch);
		console.log(this.matched(currentSearch, peaks));
		
		const characters = peaks.filter(function(character){
      return character.name.toLowerCase().search(
        currentSearch.toLowerCase() ) !== -1;
    });
		
		/* onChange={this.update.bind(this)
			onChange={value => this.update(value)}
	 		onChange={x => this.update(x)}
	 		onChange={dummyCopy => this.update(dummCopy)}
	 		onChange={this.update}

		}*/

		return (
			<div className="searching">
				<SearchForm
					value = {this.state.dataSearch}
					onChange={dummyCopy => this.update(dummyCopy)} />
				<CharacterList characters={characters} />
			</div>
		);
	}
}