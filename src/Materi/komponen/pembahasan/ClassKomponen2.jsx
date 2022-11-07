import React from "react"
import PropTypes from 'prop-types'
class  ClassKomponen2  extends React.Component{
	render(){
		return(
			<div>
				<h1>Hallo ini komponen ke 2 saya</h1>
				<h2>atas nama {this.props.nama}</h2>
			</div>
		)
	}
}
ClassKomponen2.propTypes ={
	nama : PropTypes.string.isRequired
	// Domisili : PropTypes.string.isRequired
}
export default ClassKomponen2