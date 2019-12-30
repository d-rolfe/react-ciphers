import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class CaesarCipher extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            plainText: null,
            cipherText: null,
            key: 5,
            letters: 26
        }
    }

    keyValues = () => {

    }

    handleChange = (event) => {
        this.setState({
            plainText: event.target.value,
            cipherText: this.getCipherText(event.target.value, this.state.key)
        })
    }

    handleKeyChange = (event) => {
        this.setState({
            key: event.target.value
        })
    }

    getCipherText = (pt, key) => {
        let cipherText = ""
        let charCode = 0;
        for (let i = 0; i < pt.length; i++) {
            charCode = pt.charCodeAt(i);
            if (charCode >= 65 && charCode <= 90) {
                cipherText += String.fromCharCode(((charCode - 65 + key) % 26) + 65);
            }
            else if (charCode >= 97 && charCode <= 122) {
                cipherText += String.fromCharCode(((charCode - 97 + key) % 26) + 97);
            }
        }
        return cipherText;
    }

    render() {
        return (
            <div className="cipher-wrapper">
                <form className="cipher-form">
                    <label for="plainText">Enter plain text: </label>
                    <input
                        className="cipher-input"
                        name="plainText"
                        id="plainText"
                        placeholder="Marry had a little lam"
                        onChange={this.handleChange}>
                    </input>

                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.key}
                        onChange={this.handleKeyChange}
                    >
                        {this.keyValues}
                    </Select>

                </form>
                <span
                    className="cipher-output"
                    id="cipherText">
                    Cipher text: {this.state.cipherText}
                </span>
            </div>
        )
    }
}

export default CaesarCipher;