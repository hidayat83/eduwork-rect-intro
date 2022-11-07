import React from "react";
import ClassKomponent from "./pembahasan/ClassKomponen";
import FunctionalComponent from "./pembahasan/FunctionalComponnen";
import ClassKomponen2 from "./pembahasan/ClassKomponen2";
export default class Komponen extends React.Component{
	render(){
		return(
			<div>
				<ClassKomponent nama="Edi Hidayat" />
				<ClassKomponen2 nama = "Sinung Hidayat"/>

				<FunctionalComponent nama="Dedi Prakoso" />
			</div>
		)
	}
}