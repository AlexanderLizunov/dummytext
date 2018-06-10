import React, {Component} from 'react';
import axios from 'axios';
import Output from './Output'
import Input from './Input'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paras: 2,
            html: true,
            text: ['biba', 'boba']
        }
    }

    componentWillMount() {
        this.getText()
    }



    getText() {
        axios.get('https://baconipsum.com/api/?type=meat-and-filler?paras=' + this.state.paras)
            .then((response) => {
                // console.log(response.data);
                this.setState(
                    {
                        text: response.data
                    },
                    function () {
                        console.log(this.state)
                    })

            })
            .catch((error) => {
                console.log('api error')
            })
    }

    changeParas(num){
        this.setState(
            {
                paras: num
            },
            function () {
                this.getText()
            })

    }

    render() {
        console.log('Render INPUT', this.state.text)
        return (
            <div>
                <h1>Dummy text</h1>
                <Input value={this.state.paras} onChange={this.changeParas.bind(this)}/>
                <Output value={this.state.text}/>

            </div>
        );
    }
}

export default App;
