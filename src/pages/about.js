import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default () => (
    <Layout>
      <h1>About Me</h1>
      <p>This is my personal website.</p>
      <br />
      <h2>Fun Facts About Me:</h2>
      <ul>
        <li>
          Favorite movie is The 40 Year Old Virgin or pretty much
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