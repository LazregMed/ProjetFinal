import React from 'react'
import {Navbar,Container,Nav, Button} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import {Link,useNavigate} from 'react-router-dom'


const MenuProduct = () => {
  const User = useSelector(state => state.User.user) 
  return (
    <div>
      
         {User?.Role=='admin' && <Nav.Link as={Link} to="/Modif"> <button type="button" className='btn-modif-donne'>Temps Objectif</button></Nav.Link>}
         <Nav.Link as={Link} to="/Consulté"> <button type="button" className='btn-modif-donne'>Consulté</button></Nav.Link>
         <Nav.Link as={Link} to="/Saisie"> <button type="button" className='btn-modif-donne'>Temps réel</button></Nav.Link>
        
    </div>
  )
}

export default MenuProduct