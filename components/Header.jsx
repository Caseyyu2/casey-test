import React from 'react'
import { createComponent } from 'react-fela'

 const header = props => ({
     fontSize: "40px", 
     color: "pink", 
     fontFamily: "Lato"
 })

const Header = createComponent(header, 'b')

export default Header;