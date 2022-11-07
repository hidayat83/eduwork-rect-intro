import { useState } from "react";

const FunctionalComponent =({nama})=> {
	const [value,setValue]= useState(0)
	const handlePlus=()=>{
		setValue(value + 1)
	}
	const handleMinus =()=>{
		if(value>0){
			setValue(value - 1)
		}
	}

	return(
		<div>
		<h1>Mmebuat Kompoen degan functional komponen  </h1>
		<h2>Hello {nama}, selamat belajar </h2>
		{/* <h2>Saya tiggal di {Domisili} </h2> */}
		<button onClick={handleMinus}>-</button>
		<span>{' '}{value}{' '} </span>
		<button onClick={handlePlus}>+</button>
		</div>
	)

}
export default FunctionalComponent;