import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default () => (
    <Layout>
      <h1>My Work</h1>
      <p>This is some of the work I have done.</p>
      <Link to="/">&larr; back to home</Link>
    </Layout>
)