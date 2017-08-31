import React from 'react';

export default class ReactChildrenUtilitiesComponent extends React.Component {
    render() {
        return (
            <Parent>
                <div className="childA"></div>

            </Parent>
        )
    }
}
//<!--<div className="childB"></div>-->
class Parent extends React.Component {
    render() {
        //console.log(this.props.children)
        // let items = React.Children
        //    .forEach(this.props.children,
        //    child => console.log(child.props.className))
        //let items = React.Children.toArray(this.props.children)
        let items = React.Children.only(this.props.children)
        console.log(items)
        return null
    }
}