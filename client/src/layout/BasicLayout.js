import React from 'react'
import {Layout, Menu, Breadcrumb, Icon, Card} from 'antd';
import {Route, Switch, Link} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
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
	}

	componentDidMount() {
		const {getMenuList} = this.props
		getMenuList()
	}

	onCollapse = (collapsed) => {
		this.setState({collapsed});
	}
	createMenu = (menu) => {
		let newMenu = []
		let menuList = [...menu]
		while (menuList.length > 0) {
			let curMenu = menuList.shift()
			if (curMenu.parentId === '0') {
				curMenu.child = []
				newMenu.push(curMenu)
				continue
			}
			for (let i = 0; i < newMenu.length; i++) {
				if (newMenu[i].id === curMenu.parentId) {
					newMenu[i].child.push(curMenu)
					continue
				}
			}
		}
		return newMenu.map((item) => {
			if (item.child && item.child.length > 0) {
				return (
					<SubMenu
						key={item.id}
						title={<span><Icon type="user"/><span>{item.menuName}</span></span>}
					>
						{
							item.child.map(child => {
								return (
									<Menu.Item key={child.id}>
										<Link to={child.path}>
											{child.menuName}
										</Link>
									</Menu.Item>
								)
							})
						}
					</SubMenu>
				)
			} else {
				return (
					<Menu.Item key={item.id}>
						<Link to={item.path}>
							<Icon type="pie-chart"/>
							<span>{item.menuName}</span>
						</Link>
					</Menu.Item>
				)
			}
		})
	}

	render() {
		const {menu} = this.props
		return (
			<Layout style={{minHeight : '100vh'}}>
				<Sider
					collapsible
					collapsed={this.state.collapsed}
					onCollapse={this.onCollapse}
				>
					<div className="logo"/>
					<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
						{
							this.createMenu([...menu])
						}
					</Menu>
				</Sider>
				<Layout>
					<Header style={{background : '#fff', padding : 0}}/>
					<Content style={{margin : '0 16px'}}>
						<Breadcrumb style={{margin : '16px 0'}}>
							<Breadcrumb.Item>User</Breadcrumb.Item>
							<Breadcrumb.Item>Bill</Breadcrumb.Item>
						</Breadcrumb>
						<Card bordered={false}>
							<Switch>
								{
									Routers.map((item) => {
										return (
											<Route path={item.path} component={item.component} key={item.path}/>
										)
									})
								}
							</Switch>
						</Card>
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
		menu : state.menu
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(menuAction, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)
