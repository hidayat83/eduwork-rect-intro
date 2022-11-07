import React from "react";
import PropTypes from 'prop-types'

class ClassKomponent extends React.Component{
	// constructor(props){
	// 	super(props)

		state={
			value : 0
		}
		// this.handlePlus = this.handlePlus.bind(this)
		// this.handleMinus = this.handleMinus.bind(this)


		// }
		handlePlus=() => {
			this.setState({value: this.state.value + 1});
	}
	handleMinus = () => {
		if(this.state.value >0){
		this.setState({value: this.state.value - 1});
}
	}

	render(){
		return(
			<div>
			<h1>Komponen ini dibut dengan class komponen </h1>
			<h2>Hello {this.props.nama} </h2>
			{/* <h2>Saya tinggal doi {this.props.Domisili}</h2> */}
			<button onClick={this.handleMinus}>-</button>
			<span>{' '}{this.state.value}{' '}</span>
			<button onClick={this.handlePlus}>+</button>
			</div>
		)
	}
}
ClassKomponent.propTypes ={
	nama : PropTypes.string.isRequired
	// Domisili : PropTypes.string.isRequired
}

export default ClassKomponent	
