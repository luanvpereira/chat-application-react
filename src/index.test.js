import { addMessage, addUser } from './actions'
import * as types from './constants/ActionTypes'

describe('adding a message', () => {
    it('Should create an action to add a message with id 0', () => {
        const message = 'Something'
        const author = 'Me';

        const action = {
            type: types.ADD_MESSAGE,
            id: 0,
            message,
            author
        }

        expect(addMessage(message, author)).toEqual(action)
    })
})

describe('adding a second message', () => {
    it('Should create an action t oadd a message width id 1', () => {
        const message   = 'Something'
        const author    = 'Me'

        const action = {
            type: types.ADD_MESSAGE,
            id: 1,
            message,
            author
        }

        expect(addMessage(message, author)).toEqual(action)
    })
})

describe('adding a user', () => {
    it('Should create an action to add a user with id 0', () => {
        const user = 'Mark'
        
        const action = {
            type: types.ADD_USER,
            name: user,
            id: 0
        }

        expect(addUser(user)).toEqual(action)
    })
})

describe('adding a second user', () => {
    it('Should create an action to add a message with id 1', () => {
        const user = 'Tony'

        const action = {
            type: types.ADD_USER,
            name: user,
            id: 1 
        }

        expect(addUser(user)).toEqual(action)
    })
})