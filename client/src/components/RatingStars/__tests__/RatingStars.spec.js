import React from 'react'
import { shallow, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import jestSerializerHtml from 'jest-serializer-html'

configure({adapter: new Adapter()})

expect.addSnapshotSerializer(jestSerializerHtml)

import RatingStars from '../RatingStars.jsx'

describe('RatingStars Component', function() {

  it('should always render 5 star icons', function() {
      const testProps = {
        rating: 3,
        size: 'medium'
      }
  
      const wrapper = shallow(<RatingStars {...testProps} />)
    expect(wrapper.find('Icon')).toHaveLength(5)
  })

  it('should render empty stars according to "rating" prop', function() {
    
    for( let i = 0; i <= 5; i++) {
      
      const testProps = {
        rating: i,
        size: 'medium'
      }

      let wrapper = shallow(<RatingStars {...testProps} />)
      let emptyStars = wrapper.find('Icon[fill="#CCC"]')
      
      expect(emptyStars).toHaveLength(5 - i)
    }
  })
})