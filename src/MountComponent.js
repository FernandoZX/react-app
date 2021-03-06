import React from 'react';
import ReactDOM from 'react-dom';

class MountComponent extends React.Component {
    constructor() {
        super();
        this.state = { val: 0 }
        this.update = this.update.bind(this)
    }
    update() {
        this.setState({ val: this.state.val + 1 })
    }
    render() {
        console.log('render');
        return <button onClick={this.update}>{this.state.val * this.state.m}</button>
    }
    componentWillMount() {
        console.log('componentWillMount');
        this.setState({m: 2});
    }
    componentDidMount() {
        console.log('componentDidMount');
        this.inc = setInterval(this.update,500)
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.inc);
    }
}

export default class Wrapper extends React.Component {
    mount() {
        ReactDOM.render(<MountComponent />, document.getElementById('a'))
    }
    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
    }
    render() {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>UnMount</button>
                <div id="a"></div>
            </div>
        )
    }
}