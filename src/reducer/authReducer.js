// eslint-disable-next-line import/no-named-as-default
import types from '../types/types'

const authReducer = (action, state = {}) => {
    switch (action.type) {
        case types.login:
            return {}
        case types.logout:
            return {}
        default:
            return state
    }
}

export default authReducer
