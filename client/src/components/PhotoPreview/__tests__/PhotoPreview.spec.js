import React from 'react'
import { shallow, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import jestSerializerHtml from 'jest-serializer-html'

configure({adapter: new Adapter()})

expect.addSnapshotSerializer(jestSerializerHtml)

import PhotoPreview from '../PhotoPreview.jsx'

describe('PhotoPreview Component', function(){
  it('should generate matching html snapshot', function() {
    let testProps = {
      photos:['url1', 'url2', 'url3']
    }

    expect(shallow(<PhotoPreview {...testProps} />).html()).toMatchSnapshot()

  })


  it('should render full width if 1 photo', function() {
    let testProps = {
      photos: ['url1']
    }
    
    let wrapper = shallow(<PhotoPreview {...testProps} />)
    expect(wrapper.find('.photoCardFull')).toHaveLength(1)
  })

  it('should render side by side if 2 photos', function() {
    let testProps = {
      photos: ['url1', 'url2']
    }
    
    let wrapper = shallow(<PhotoPreview {...testProps} />)
    expect(wrapper.find('.photoCardHalf')).toHaveLength(2)
  })
  
  it('should render with correct class if 3 photos', function() {
    
    let testProps = {
      photos: ['url1', 'url2', 'url3']
    }
    
    let wrapper = shallow(<PhotoPreview {...testProps} />)
    expect(wrapper.find('.photoCardHalf')).toHaveLength(2)
    expect(wrapper.find('.photoCardFull')).toHaveLength(1)
  })

  it('should render only first 3 if more than 3 photos', function() {
    
    let testProps = {
      photos: ['url1', 'url2', 'url3', 'url4']
    }
    
    let wrapper = shallow(<PhotoPreview {...testProps} />)

    expect(wrapper.find('.photoCardHalf')).toHaveLength(2)
    expect(wrapper.find('.photoCardFull')).toHaveLength(1)
    
    wrapper.find('img').map(imgWrapper => {

      expect(imgWrapper.prop('src')).not.toBe('url4')

    })
  })
})