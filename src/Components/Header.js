import React from 'react'
import { Navbar, Container } from 'react-bootstrap';
import { Button } from 'antd';

function Header() {

    const onLogout = () => {
        localStorage.clear();
        window.location.href = '/login';
    }

  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
      Mindeft
      </Navbar.Brand>
      { localStorage.getItem('userId') ? <Button type="primary" onClick={onLogout}>Logout</Button> : <Button type="primary" onClick={()=> window.location.href = '/login'}>Login</Button> }
    </Container>
  </Navbar>
</>
  )
}

export default Header