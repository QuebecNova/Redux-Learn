import * as UserActionCreators from './user'
import * as TodoActionCreators from './todo'

const ActionsCreators = {
    ...UserActionCreators,
    ...TodoActionCreators,
}

export default ActionsCreators