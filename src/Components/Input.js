import React, {Component} from 'react';


class Input extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            value: props.value,
        }
    }

    onChange(event) {
        console.log(event.target.value)
        console.log(this)
        this.setState(
            {value: event.target.value},
            function () {
                this.props.onChange(this.state.value)
            })
        // App.getText()
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" value={this.state.value} onChange={this.onChange.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default Input;