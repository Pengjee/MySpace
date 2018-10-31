import createReducer from '../createReducer'
import { ACTION_HANDLERS } from '../action/dict'
import initState from '../store/initState'

export default createReducer(initState.dictList, ACTION_HANDLERS)
