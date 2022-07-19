import React from 'react'
import { Button } from 'reactstrap';
import Router from './routes/Router';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
	return (
		<div className="App">
			<ToastContainer />
			<Router />
		</div>
	);
}

export default App;
