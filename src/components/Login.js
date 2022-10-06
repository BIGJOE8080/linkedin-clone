import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
   <Container>
    <Nav>
        <a href="/">
            <img src="/limk.png" alt=""/>
        </a>
    </Nav>
   </Container>
  )
}



const Container = styled.div`
padding: 0px;

`
const Nav = styled.nav`
max-width: 1128px;
margin: auto;
padding: 12px 0 16px;
display: flex;
align-item: center;
position: relative;
justify-content: space-between;
flex-wrap: nowrap;

& > a  > img {
    width: 138px;
    background: red;
    @media (max-width: 760px) {
        padding: 0 5px;
    }
}
`
export default Login;




