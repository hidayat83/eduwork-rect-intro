import React from "react";

// export default class Conditional extends React.Component{
// 	render() {
// 		const isLogin =  false
// 		if (isLogin) {
// 			return (
// 				<div>
// 					<h1>anda sudah login</h1>
// 				</div>
// 			)
// 		} else {
// 			return (
// 				<div>
// 					<h1>silahkan login terlebih dahulu</h1>
// 				</div>
// 			)
// 		}
// 	}
// }

// export default class Conditional extends React.Component{
// 	render() {
// 		const isLogin = false
// 		let message = ''
// 		if (isLogin) {
// 			message = 'anda sudah login'
// 		} else {
// 			message = 'silahkan login terlebih dahulu'
// 		}
// 		return (
// 			<div>
// 				<h1>{message}</h1>
// 			</div>
// 		)
// 	}
// }

export default class Conditional extends React.Component {
	state = {
		isLoading: true
	}
	render() {
		setTimeout(() => {
			this.setState({
				isLoading: false
			})

		}, 3000)

		return (
			<div>
				{	this.state.isLoading
					? <h1>Loading...</h1>
					: <h1>selamat datang di kelas Mern</h1>}
			</div>
		)
	}
}


