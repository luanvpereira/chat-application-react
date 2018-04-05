import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Sidebar from './index'

const setup = () => {
    const props = {
        users: [],
        addUser: jest.fn()
    }

    Enzyme.configure({ adapter: new Adapter() })
    const enzymeWrapper = mount(<Sidebar {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('Sidebar', () => {
    it('Should render self', () => {
        const { enzymeWrapper } = setup()
        expect(enzymeWrapper.find('aside').length).toBe(1)
    })
})