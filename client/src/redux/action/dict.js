import {listpageDict, getDict, addDict, updateDict, delDict} from '../../service/dict'

// action
const GET_DICT = 'GET_DICT'
const ADD_DICT = 'ADD_DICT'
const LISTPAGE_DICT = 'LISTPAGE_DICT'
const UPDATE_DICT = 'UPDATE_DICT'
const DEL_DICT = 'DEL_DICT'

//Action Creator
const getListpageDict = params => async dispatch => {
	const ret = await listpageDict(params)
	if(ret.code === 0) {
		dispatch({
			type:GET_MENU,
			payload: ret.data
		})
	}
}

const addDataDict = params => async dispatch => {
	const ret = await addDict(params)
	if(ret.code === 0) {
		dispatch({
			type:GET_MENU,
			payload: ret.data
		})
	}
}

const getDataDict = params => async dispatch => {
	const ret = await getDict(params)
	if(ret.code === 0) {
		dispatch({
			type:GET_MENU,
			payload: ret.data
		})
	}
}

const delDataDict = params => async dispatch => {
	const ret = await delDict(params)
	if(ret.code === 0) {
		dispatch({
			type:GET_MENU,
			payload: ret.data
		})
	}
}

const updateDataDict =  params => async dispatch => {
	const ret = await updateDict(params)
	if(ret.code === 0) {
		dispatch({
			type:GET_MENU,
			payload: ret.data
		})
	}
}

export default {
	getListpageDict,
	updateDataDict,
	delDataDict,
	addDataDict,
	getDataDict
}

// 暴露方法
export const ACTION_HANDLERS = {
	[GET_DICT] : (dict, {payload}) => payload,
	[DEL_DICT] : (dict, {payload}) => payload,
	[ADD_DICT] : (dict, {payload}) => payload,
	[UPDATE_DICT] : (dict, {payload}) => payload,
	[LISTPAGE_DICT] : (dict, {payload}) => payload,
}
