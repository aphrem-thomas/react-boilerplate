import React from 'react';
import {connect} from 'react-redux';
import {addCounter,subCounter} from '../actions/globalActionCreator';
class App extends React.Component{
    constructor(props){
        super(props);
        this.addCounter=this.addCounter.bind(this);
        this.subCounter=this.subCounter.bind(this);
    }
    addCounter(){
        this.props.dispatch(addCounter());
    }
    subCounter(){
        this.props.dispatch(subCounter());
    }
    render(){
        return(
            <div>
            <div>howdi partner...</div>
            <h1>{this.props.counter}</h1>
            <button onClick={this.addCounter}>add</button>
            <button onClick={this.subCounter}>subtract</button>
            </div>
        );
    }
}
function mapStateToProps(state,ownProps){
    return({
        counter:state.counter,
    })
}

export default connect (mapStateToProps)(App);