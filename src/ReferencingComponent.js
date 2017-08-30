import React from 'react';
import Input from './Input';

export default class ReferencingComponent extends React.Component {
    constructor() {
        super();
        this.state = { a: '', b: '' }
    }
    update() {
        this.setState({
            a: this.a.refs.input.value,
            b: this.refs.b.value
        })
    }
    render() {
        return (
            <div>
                <Input
                    ref={component => this.a = component}
                    update={this.update.bind(this)}
                /> {this.state.a}
                <hr />
                <input
                    ref="b"
                    type="text"
                    onChange={this.update.bind(this)}
                /> {this.state.b}
            </div>
        )
    }
}