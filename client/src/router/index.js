
import App from '../main'
import DashBoard from '../view/DashBoard'
import DataDict from '../view/DataDict'

export default [
	{path: "/dashboard", name: "App", component: DashBoard, meta:{title:'Pjee'} },
	{path: "/setting/dict", name: "DataDict", component: DataDict, meta:{title:'Pjee - 数据字典'} },
]
