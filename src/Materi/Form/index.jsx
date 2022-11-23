import React from "react";
import Validator from "validatorjs";
import FormElement from "./formElement";
import Registrasi from "./registrasi";
import Validation from "./validation";
import Validatorjs from "./validator";


export default class Form extends React.Component{
	render() {
		return (
			<div>
				<Registrasi />
			</div>
		)
	}
}