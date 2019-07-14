import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { NavItems } from './NavItems'
import NavLink from './NavLink/NavLink'

configure({adapter: new Adapter()})

describe('<NavItems/>', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<NavItems />)
  })
  it('should render two <NavItems /> if not authenticated', () => {
    expect(wrapper.find(NavLink)).toHaveLength(2)
  })
  it('should render three <NavItems/> if authenticated', () => {
    // wrapper = shallow(<NavItems token/>)
    wrapper.setProps({token: true})
    expect(wrapper.find(NavLink)).toHaveLength(3)
  })
  it("should render a <NavItems/> with Log Out text and link to '/' if authenticated", () => {
    wrapper.setProps({token: true})
    expect(wrapper.contains(<NavLink link='/'>Log Out</NavLink>)).toEqual(true)
  })
})