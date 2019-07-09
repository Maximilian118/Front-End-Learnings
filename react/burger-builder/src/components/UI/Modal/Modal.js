import React from 'react'
import classes from './scss/Modal.module.css'
import WithClass from '../../../hoc/WithClass'
import Backdrop from '../Backdrop/Backdrop'

const displayModal = props => {
  let hideModal = classes.hideModal
  if (props.show) {
    hideModal = classes.Modal
  }

  return (
    <>
      <Backdrop show={props.show} clicked={props.modalClose}/>
      <WithClass classes={hideModal}>
        {props.children}
      </WithClass>
    </>
  )
}

export default displayModal