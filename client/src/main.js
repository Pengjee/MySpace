import React from 'react'
import ReactDom from 'react-dom'
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'
import Routers from './router'
import NotFound from './view/Error/NotFound'

class App extends React.Component {
	render() {

		return (
			<Router>
				<div>
					<Switch>
						{
							Routers.map((item, index) =>{
								return <Route key={index} path={item.path}/>
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
