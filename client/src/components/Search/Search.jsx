import React from 'react';
import Icon from '../Icon/Icon.jsx'
import styles from './styles.css';

class Search extends React.Component { 
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: null,
        }
        
        this.onSeachbarChange = this.onSeachbarChange.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onSeachbarChange(event) {
        const searchTerm = event.target.value;
        this.setState({searchTerm});
    }

    onButtonClick() {
        const {onSearch} = props;
        const searchTerm = this.state.searchTerm;

        onSearch(searchTerm);
    }

    render() {
        return (
            <span className={styles.container}>    
                <input 
                    type="text" 
                    className={styles.searchbar} 
                    onChange={this.onSeachbarChange} 
                    placeholder="Search within the reviews"></input>
                <button className={styles.searchButton} onClick={this.onButtonClick}>
                <Icon name="search_small" size="small" fill="#FFF" />
                </button>
            </span>
        );
    }

}

export default Search;
