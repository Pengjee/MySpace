import {getMenu} from '../../service/menu'

// action
const GET_MENU = 'GET_MENU'

//Action Creator


// 暴露方法
export const ACTION_HANDLERS = {
	[GET_MENU] : (menu, {payload}) => payload
}
