import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { createTheme } from '@material-ui/core/styles';

import Landing from './pages/Landing/Landing';
import MailingList from './components/MailingList/MailingList';

const theme = createTheme({
	palette: {
		primary: {
			main: '#00aaff',
		},
		secondary: {
			main: '#000000',
		},
	},
});

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<Route path='/mailing'>
						<MailingList />
					</Route>
					<Route path='/'>
						<Landing />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
