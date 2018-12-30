import React from 'react';
import styles from './styles.css';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayOptions: false,
            selectedIdx: props.selectedIdx
        }

        this.toggleOptions = this.toggleOptions.bind(this);
        this.hideOptions = this.hideOptions.bind(this);
        this.onOptionClick = this.onOptionClick.bind(this);
    }

    toggleOptions() {
        this.setState( state => ({displayOptions: !state.displayOptions}));
    }
    
    hideOptions() {
        this.setState({displayOptions: false})
    }

    onOptionClick(optionIdx) {
        const {onSelectionChange} = this.props;
        this.setState({selectedIdx: optionIdx},
            () => onSelectionChange(optionIdx)
        )
    }
    render() {
        const {options, label} = this.props;
        const {selectedIdx, displayOptions} = this.state;

        return(
            <div className={styles.container}>
                <div className={styles.display} tabIndex="-1" onClick={this.toggleOptions} onBlur={this.hideOptions}>
                    {label}&nbsp;
                    <strong>{options[selectedIdx]}</strong>

                    <ul className={displayOptions ? 
                        styles.optionsContainer : styles.hiddenOptionsContainer
                    }>

                        {options.map((optionText, idx) => (
                        <li key={idx} 
                            className={idx === selectedIdx ? styles.selectedOption: styles.option} 
                            onClick={this.onOptionClick.bind(null, idx)}>

                            {optionText}
                        </li>
                        ))}

                    </ul>
                </div>
            </div>
        )
    }
}
    
export default Dropdown;