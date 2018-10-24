
import DashBoard from '../view/DashBoard'
import App from '../main'

export default [
	{path: "/", name: "App", component: App, meta:{title:'Pjee'} },
	{path: "/dashboard", name: "DashBoard", component: DashBoard, meta:{title:'Pjee - 首页'}},
]
