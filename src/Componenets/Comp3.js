import React, {useContext} from 'react'
import { context } from '../App'
function Comp3() {
    let x=useContext(context)
  return (
    <>
    <h3>Welcome to {x}</h3>
    </>
  )
}
export default Comp3
