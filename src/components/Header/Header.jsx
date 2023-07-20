import React, {useRef,useEffect} from 'react'

import './header.css'
import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'
import { NavLink } from 'react-router-dom';
import {motion} from 'framer-motion'

import { Container, Row } from 'reactstrap';

const nav__links = [
  {
    path:'home',
    dispay: 'Home'
  },
  {
    path:'shop',
    dispay: 'Shop'
  },
  {
    path:'cart',
    dispay: 'Cart'
  },
]

const Header = () => {

  const headerRef = useRef(null)

  const stickyHeaderFunc= ()=>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop
        > 80){
          headerRef.current.classList.add('sticky__header')
        } else{
          headerRef.current.classList.remove('sticky__header')
        }
    })
  }
  useEffect(()=>{
        stickyHeaderFunc()

        return ()=> window.removeEventListener('scroll', stickyHeaderFunc)
  })

  return <header className="header" ref={headerRef}>
    <Container>
      <Row>
        <div className="nav__wrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
            <div>
              <h1>Multimart</h1>
            </div>
          </div>
            
              <div className="navigation">
                  <ul className='menu'>
                    {
                      nav__links.map((item, index) => (
                        <li className="nav__item" key={index}>
                        <NavLink to={item.path} className={(navClass)=>
                          navClass.isActive ? 'nav__active' : ''
                          } 
                          >
                            {item.dispay}
                          </NavLink>
                    </li>
                      ))}
                  </ul>
              </div>
  
              <div className="nav__icons">
                
                <span className='fav__icon'><i class="ri-heart-line"></i>
                <span className='badge'>1</span>
                </span>
                <span className='cart__icon'><i class="ri-shopping-bag-line"></i>
                <span className='badge'>1</span>
                </span>
              
                <span>
                  <motion.img whileTap={{scale:1.2}} src={userIcon} alt="" />
                </span>
                <div className="mobile__menu">
                <span><i class="ri-menu-line"></i></span>
                </div>
              </div>

          

        </div>
      </Row>
    </Container>
  </header>
};

export default Header;