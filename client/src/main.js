import React from 'react'
import ReactDom from 'react-dom'
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store/store'
import BasicLayout from './layout/BasicLayout'

class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/" component={BasicLayout}/>
				</Switch>
			</Router>
		)
	}
}

ReactDom.render(<Provider store={store}><App/></Provider>, document.getElementById('root'))
