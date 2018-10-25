import createReducer from '../createReducer'
import { ACTION_HANDLERS } from '../action/menu'
import initState from '../store/initState'

export default createReducer(initState.menu, ACTION_HANDLERS)
