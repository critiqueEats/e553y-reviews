import React from 'react'
import { shallow, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import jestSerializerHtml from 'jest-serializer-html'

import Links from '../Links.jsx'
import Icon from '../../Icon/Icon.jsx'

configure({adapter: new Adapter()})

expect.addSnapshotSerializer(jestSerializerHtml)

jest.mock('../../Icon/Icon.jsx')

describe('Links Component ', function() {
  beforeAll(()=> {
    Icon.mockImplementation((props) => 'Mock-Icon-Component')
  })

  it('should generate matching html snapshot', function() {   
    expect(shallow(<Links name="testName" show={true} />).html()).toMatchSnapshot()
  })
  
  it('should render Icon five times',function() {
    mount(<Links name="testName" show={true} />)
    expect(Icon).toHaveBeenCalledTimes(5)
  })

  it('should render Icon with correct props 5 times', function() {
    mount(<Links name="testName" show={true} />)

    let expectedProps = {
      name: expect.any(String),
      height: expect.any(String),
      width: expect.any(String),
      fill: expect.any(String)
    }
    let expectedContext = {}

    Icon.mock.calls.map(args => {
      expect(args).toMatchObject([expectedProps, expectedContext])
    })
  })

  it('should be hidden with "false" show prop', function() {

    let wrapper = shallow(<Links name="testName" show={false} />)

    expect(wrapper.hasClass('hiddenContainer')).toBe(true)
  })
})