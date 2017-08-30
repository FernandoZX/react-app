import React from 'react';
import Heart from './Heart';

class ButtonComponent extends React.Component {
    render() {
        return <Button>I <Heart /> React</Button>
    }
}

const Button = (props) => <button>{props.children}</button>

export default ButtonComponent