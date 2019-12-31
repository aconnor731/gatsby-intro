import React, { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'


const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
      border-bottom: 2px solid #222;
  }

  &:last-of-type {
      margin-right: 0;
  }
`

const NavMenu = () => (
  <nav className="nav-menu">
    <NavLink to="/">Austin Connor</NavLink>
    <NavLink to="/" activeClassName={"current-page"}>Home</NavLink>
    <NavLink to="/about/" activeClassName={"current-page"}>About</NavLink>
    <NavLink to="/mywork/" activeClassName={"current-page"}>Work</NavLink>
  </nav>
)

const SmallScreenNavMenu = () => (
  <div className="small-screen-nav-menu">
    <div className="navlink">
      <Link to="/">Home</Link>
    </div>
    <div className="navlink">
      <Link to="/about/">About</Link>
    </div>
    <div className="navlink">
      <Link to="/mywork/"><p>Work</p></Link>
    </div>
  </div>
)

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <header
      css={css`
        background: #eee;
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        .nav-menu {
          height: 100%;
          margin: 0.5rem 0.5rem;
        }

        @media screen and (min-width: 499px) {
          .hamburger {
            display: none;
          }
        }

        @media screen and (max-width: 499px) {
          .hamburger {
            width: 48px;
            height: 48px;
            padding: 0 0 0 0.5rem;
          }

          .nav-menu {
            display: none;
          }

          .hamburger:hover {
            cursor: pointer;
          }

          .small-screen-nav-menu {
            display: flex;
            flex-direction: column;
          }

          .small-screen-nav-menu .navlink {
            border-top: 2px solid #ddd;
            height: 44px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0 0 0 0.5rem;
          }

          .small-screen-nav-menu .navlink:hover {
            cursor: pointer;
            background-color: #ddd;
          }
        }


      `}
    >

        <svg 
          className="hamburger"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          onClick={() => setIsClicked(!isClicked)}
        >
          <path d="M2 4h20v2H2zm0 5h20v2H2zm0 5h20v2H2z"></path>
        </svg>
        {isClicked ? <SmallScreenNavMenu /> : <NavMenu />}
    </header>
  )
}

export default Header;