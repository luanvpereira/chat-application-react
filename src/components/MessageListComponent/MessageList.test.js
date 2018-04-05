import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MessageList from './index'

const setup = () => {
    const props = {
        messages: []
    }

    Enzyme.configure({ adapter: new Adapter() })
    const enzymeWrapper = mount(<MessageList {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('MessagesList', () => {
    it('Should render self', () => {
        const { enzymeWrapper } = setup()
        expect(enzymeWrapper.find('section#messages-list').length).toBe(1)
    })
})