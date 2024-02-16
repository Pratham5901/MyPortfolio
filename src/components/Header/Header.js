import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <div>
    <Container><Div1>
    <Link href="/" style={{display:"flex",alignItems:"center",color:"white",marginBottom:'20px'}}>
      
      <DiCssdeck size='3rem' /><Span>Portfolio</Span>
      
    </Link>
    </Div1>
    <Div2>
      <li>
          <NavLink href="#projects">Projects</NavLink>
      </li>
      <li>
          <NavLink href="#tech">Tecnologies</NavLink>
      </li>
       <li>
          <NavLink href="#about">About</NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/Pratham5901'>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/prathamdhiman/'>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.instagram.com/prathamdhiman.1/'>
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </Div3>
    </Container>
  </div>
);

export default Header;
