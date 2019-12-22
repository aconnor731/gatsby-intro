import React from 'react'
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

const Header = () => (
    <header
      css={css`
        background: #eee;
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
        padding: 0.5rem;

        nav {
          margin-top: 0;

        }
      `}
    >
        <nav>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"></path>
            </svg> */}
        <NavLink to="/">Austin Connor</NavLink>
            <NavLink to="/" activeClassName={"current-page"}>Home</NavLink>
            <NavLink to="/about/" activeClassName={"current-page"}>About</NavLink>
            <NavLink to="/mywork/" activeClassName={"current-page"}>Work</NavLink>
        </nav>

    </header>
)

export default Header;