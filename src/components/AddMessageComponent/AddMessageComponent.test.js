import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AddMessage from './index'

const setup = () => {
    const props = {
        users: [],
        dispatch: jest.fn(),
        changeCurrentText: jest.fn(),
        addUser: jest.fn()
    }
    
    Enzyme.configure({ adapter: new Adapter() })
    const enzymeWrapper = mount(<AddMessage {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('AddMessage', () => {
    it('shuld render self', () => {
        const { enzymeWrapper } = setup()
        expect(enzymeWrapper.find('.NewMessage').length).toBe(1)
    })
})
