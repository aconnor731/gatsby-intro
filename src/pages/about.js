import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default () => (
    <Layout>
      <h2>About Me</h2>
      <ul>
        <li>
          I started my career in software development roughly 5 
          years ago through self-teaching and &nbsp;
          <a href="https://freecodecamp.org" target="blank">
            freeCodeCamp.org
            </a>
        </li>
        <li>
          My favorite movie is The 40 Year Old Virgin or pretty much
          anything by Judd Apatow.
        </li>
      </ul>
      <br />
      <h2>Resources I Find Invaluable:</h2>
      <ul>
        <li>
          <a href="https://frontendmasters.com">
            Frontendmasters.com
          </a>
        </li>
      </ul>
    </Layout>
)