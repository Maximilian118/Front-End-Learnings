import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { BurgerBuilder } from './BurgerBuilder'

import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Burger from '../../components/Burger/Burger'
import Model from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import PopUp from '../../components/UI/PopUp/PopUp'
import Spinner from '../../components/UI/Spinner/Spinner';

configure({adapter: new Adapter()})

describe('<BurgerBuilder />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}}/>)
  })
  it("should render <BuildControls/> if props.ingredients is truthy", () => {
    wrapper.setProps({ingredients: {salad: 0}})
    expect(wrapper.find(BuildControls)).toHaveLength(1)
  })
  it("should render <Burger/> if props.ingredients is truthy", () => {
    wrapper.setProps({ingredients: {salad: 0}})
    expect(wrapper.find(Burger)).toHaveLength(1)
  })
  it("should render <OrderSummary/> if props.ingredients is truthy and Model rendered", () => {
    wrapper.setProps({ingredients: {salad: 0}, Model})
    expect(wrapper.find(OrderSummary)).toHaveLength(1)
  })
  it("should render <PopUp/> if props.popUp is truthy", () => {
    wrapper.setProps({popUp: true})
    expect(wrapper.find(PopUp)).toHaveLength(1)
  })
  it("should render error message if props.error is truthy", () => {
    wrapper.setProps({error: true})
    expect(wrapper.find(<p></p>))
  })
  it("should render <Spinner/> if props.error is falsy and props.ingredients falsy", () => {
    wrapper.setProps({ingredients: {salad: 0}, error: false})
    expect(wrapper.find(Spinner))
  })
})