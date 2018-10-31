import {getMenu} from '../../service/menu'

// action
const GET_MENU = 'GET_MENU'

//Action Creator
const getMenuList = params => async dispatch => {
	const ret = await getMenu(params)
	if(ret.code === 0) {
		dispatch({
			type:GET_MENU,
			payload: ret.data
		})
	}
}
export default {
	getMenuList
}

// 暴露方法
export const ACTION_HANDLERS = {
	[GET_MENU] : (menu, {payload}) => payload
}
