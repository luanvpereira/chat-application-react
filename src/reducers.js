import { combineReducers } from "redux"
import messages from "./reducers/messages"
import users from "./reducers/users"

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