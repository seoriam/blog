import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.div`
  margin: -2em 0 0 0;
  padding: 0 1.5em 2em;
`

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  a {
    background: ${props => props.theme.colors.base};
    color: white;
    padding: 1em;
    border-radius: 2px;
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      background: ${props => props.theme.colors.highlight};
    }
  }
`

const PreviousLink = styled(Link)`
  margin-left: auto;
  order: 2;
`

const NextLink = styled(Link)`
  margin-right: auto;
  order: 1;
`

const PostLinks = props => {
  return (
    <Wrapper>
      <Box>
        {props.next && (
          <NextLink to={`/${props.next.slug}/`}>
            &#8592; Next Post
          </NextLink>
        )}
        {props.previous && (
          <PreviousLink to={`/${props.previous.slug}/`}>
            Prev Post &#8594;
          </PreviousLink>
        )}
      </Box>
    </Wrapper>
  )
}

export default PostLinks
