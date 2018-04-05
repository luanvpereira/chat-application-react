import { combineReducers } from "redux"
import messages from "./reducers/messages"
import users from "./reducers/users"

import defaultState from './reducers/default-state'

const chat = combineReducers({
  messages,
  users,
  currentText: (state = '', action) => {
    switch(action.type) {
      case 'ON_TYPING':
        return action.currentText

      default:
        return state
    }
  }
});

export default chat