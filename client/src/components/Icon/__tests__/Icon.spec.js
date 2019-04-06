import React from 'react';
import {shallow, mount, configure, } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
jest.mock('../reviews-icons.svg', ()=> 'svgfile'); 

import Icon from '../Icon.jsx';
describe('Icon component', function() {
  let testProps = {
    name: 'name',
    width: 18,
    height: 18,
    fill: 'red'
  }
  it('should generate matching html snap-shot', function() {
    let wrapper = shallow(<Icon  name="name"/>)
    expect(wrapper.html()).toMatchSnapshot()
  
  })
  it('should render an svg element', function() {
    
    let wrapper = shallow(<Icon {...testProps} />)

    expect(wrapper.name()).toBe('svg')
  })
  
  it('should render use element', function() {
    let wrapper = shallow(<Icon {...testProps} />)

    expect(wrapper.find('use')).toHaveLength(1)
  })
})