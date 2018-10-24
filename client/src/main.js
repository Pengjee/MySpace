import React from 'react'
import ReactDom from 'react-dom'
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'
import Routers from './router'
import NotFound from './view/Error/NotFound'
import { createStore } from 'redux'

const reducer = function(state, action) {
	return state;
}
const store = createStore(reducer); // 创建store

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Switch>
						{
							Routers.map((item, index) =>{
								return <Route key={index} path={item.path} component={item.component} />
							})
						}
						<Route component={NotFound} />
					</Switch>
				</div>
			</Router>
		)
	}
}

ReactDom.render(<App />, document.getElementById('root'))
