import React from "react";
import * as Validator from 'validatorjs'

const Input = ({ label, type, name,onChange }) => {
	return (
		<div>
			<label>
				{label}:	</label>
			<br />
			<input type={type} name={name} onChange={e => onChange(e.target.value)} />
			<br />
		</div>
	)
}

const ShowErrors = ({ errors }) => {
	return (
		<ul style={{color:'red'}}>
			{
				errors.map((error, i) => <li key={i}>{error}</li>)
			}
		</ul>
	)
}

class Validatorjs extends React.Component {
	state = {
		email: '',
		password: '',
		errors:[]
	}

	handleSubmit = event => {
		event.preventDefault();
		const { email, password } = this.state;

		let data = {
			email, password
		  };

		  let rules = {
			  email: 'required|email',
			  password:'min:8|required'
		};
		let Validation =  new Validator (data, rules)
		Validation.passes();
		// console.log(Validation.errors.all())
		this.setState({
			errors: [
				...Validation.errors.get('email'),
				...Validation.errors.get('password')
			]
		})

	}


	render() {
		const style = {
			width: '400px',
			margin: '100px auto 0',
			border: '1px solid black',
			padding: '10px'
		}

		return (
			<div style={style}>
				<ShowErrors  errors={this.state.errors}/>
				<h4>Login Page </h4>
				<form onSubmit={this.handleSubmit}>
					<Input type="text" name="email" label="Email" onChange={value => this.setState({email:value})} />
					<Input type="password" name="password" label="Password" onChange={value =>this.setState({password:value}) } />
					<br />
					<button type="submit">Login</button>
				</form>
			</div>
		)
	}
}
export default Validatorjs