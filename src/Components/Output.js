import React, {Component} from 'react';


class Output extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            value: props.value,
        }
    }

    render() {
        let articleArray = this.props.value;
        const articleBlocks = articleArray.map((number) =>
            <div>{number}</div>
        );
        return (
            <div>
                {articleBlocks}
            </div>
            // {displayText(parameters)}
        );
    }
}

export default Output;