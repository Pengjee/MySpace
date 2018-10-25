import React from 'react'
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
import {Route, Switch} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import menuAction from '../redux/action/menu'
import './BasicLayout.css'
import Routers from '../router'

const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;

class DashBoard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			collapsed : false,
		}
		this.onCollapse = this.onCollapse.bind(this)
	}
	componentWillMount () {
		const { getMenuList } = this.props
		getMenuList()
	}
	onCollapse(collapsed) {
		this.setState({collapsed});
	}

	render(){
		const { menu } = this.props
 		return (
			<Layout style={{minHeight : '100vh'}}>
				<Sider
					collapsible
					collapsed={this.state.collapsed}
					onCollapse={this.onCollapse}
				>
					<div className="logo"/>
					<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

						<Menu.Item key="1">
							<Icon type="pie-chart"/>
							<span>Option 1</span>
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="desktop"/>
							<span>Option 2</span>
						</Menu.Item>
						<SubMenu
							key="sub1"
							title={<span><Icon type="user"/><span>User</span></span>}
						>
							<Menu.Item key="3">Tom</Menu.Item>
							<Menu.Item key="4">Bill</Menu.Item>
							<Menu.Item key="5">Alex</Menu.Item>
						</SubMenu>
						<SubMenu
							key="sub2"
							title={<span><Icon type="team"/><span>Team</span></span>}
						>
							<Menu.Item key="6">Team 1</Menu.Item>
							<Menu.Item key="8">Team 2</Menu.Item>
						</SubMenu>
						<Menu.Item key="9">
							<Icon type="file"/>
							<span>File</span>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Header style={{background : '#fff', padding : 0}}/>
					<Content style={{margin : '0 16px'}}>
						<Breadcrumb style={{margin : '16px 0'}}>
							<Breadcrumb.Item>User</Breadcrumb.Item>
							<Breadcrumb.Item>Bill</Breadcrumb.Item>
						</Breadcrumb>
						<Switch>
							{
								Routers.map((item) => {
									<Route path={item.path} component={item.component}/>
								})
							}
						</Switch>

					</Content>
					<Footer style={{textAlign : 'center'}}>
						Ant Design ©2018 Created by Ant UED
					</Footer>
				</Layout>
			</Layout>
		);
	}
}

function mapStateToProps(state) {
	return {
		menu: state.menu
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(menuAction, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)
