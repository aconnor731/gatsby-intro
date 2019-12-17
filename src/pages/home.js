import React from 'react'
import styled from '@emotion/styled'

export default () => {

    return (
      <>
        <p>This site is hosted on &nbsp;
          <a 
            href="https://cloud.google.com/compute/"
            target="blank"
          >
            Google Cloud Platform's Compute Engine.
          </a>
        </p>
        <p>
          The site was also built with GraphQL and Gatsby.js
        </p>
      </>
    )
}