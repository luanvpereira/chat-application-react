import users from './users'
import * as types from '../constants/ActionTypes'

describe('Users reducer', () => {
    it('Should return the initial state, empty', () => {
        expect(users(undefined, {})).toEqual([])
    })

    it('Should handle ADD_USER and store every user', () => {
        expect(
            users([], {
                type: types.ADD_USER,
                name: 'Tony',
                id: 0
            })
        ).toEqual([
            {
                name: 'Tony',
                id: 0
            }
        ])

        expect(
            users(
                [
                    {
                        name: 'Tony',
                        id: 0
                    }
                ],
                {
                    type: types.ADD_USER,
                    name: 'Mark',
                    id: 1
                }
            )
        ).toEqual([
            {
                name: 'Tony',
                id: 0
            },
            {
                name: 'Mark',
                id: 1

            }
        ])
    })
})