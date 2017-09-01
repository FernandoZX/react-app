import React from 'react';
import PropTypes from 'prop-types';
import Button from './ButtonComponent';
import Widget from './Widget';
import Title from './Title';
import TextAreaComponent from './TextAreaComponent';
import ReferencingComponent from './ReferencingComponent';
import MountComponent from './MountComponent';
import UpdateComponentProps from './UpdateComponentProps';
import ReactMapArrayData from './ReactMapArrayData';
import HigherOrderComponent from './HigherOrderComponent';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    }
  }

  update(e) {
    this.setState({ txt: e.target.value })
  }
  // render() {
  //   return (
  //     <div>
  //       <h1>Hello Series</h1>
  //       <b>Bold</b>
  //     </div>
  //   )
  // }

  // render(){
  //   let txt = this.props.txt
  //   return <h1>{txt}</h1>
  // }

  // render(){
  //   return (
  //     <div>
  //       <input type="text" 
  //         onChange={this.update.bind(this)}/>
  //         <h1>{this.state.txt} - {this.state.cat}</h1>
  //     </div>
  //   )
  // }
  render() {
    return (
      <div>
        <Title text="12345678" />
        <br />
        <h1>{this.state.txt}</h1>
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
        <br />
        <Button />
        <br/>
        <TextAreaComponent />
        <br />
        <ReferencingComponent />
        <br />
        <MountComponent />
        <br />
        <div id="root-second"><UpdateComponentProps /></div>
        <br/>
        <ReactMapArrayData />
        <br />
        <HigherOrderComponent />
      </div>
    )
  }
}

// App.PropTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number
// }

// App.defaultProps = {
//   txt: "this is the default txt"
// }
//const App = () => <h1>Hello stateless</h1>

export default App

