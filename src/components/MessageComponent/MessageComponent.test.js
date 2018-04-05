import React from 'react'
import Enzyme, { mount }  from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import MessageComponent from './index'

const setup = () => {
    const props = {
        author: 'Tony',
        message: 'Yeah'
    }

    Enzyme.configure({ adapter: new Adapter })
    const enzymeWrapper = mount(<MessageComponent {...props} />)

    return {
        props, 
        enzymeWrapper
    }
}

describe('Message', () => {
    it('should render self', () => {
        const { enzymeWrapper } = setup()
        expect(enzymeWrapper.find('.MessageItem'))
    })
})