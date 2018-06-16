import React from 'react'
import { withRouteData, Link } from 'react-static'
import Markdown from 'react-markdown'
import Helmet from 'react-helmet'
import styled from 'styled-components'
// import * as Prism from 'prismjs'

// import PostNav from '../components/PostNav'
import { Dump, formatDate } from '../util/helpers'

import { nameContent } from '../siteMeta'

const PostWrapper = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;
  background: ${({ theme }) => theme.foreground};
  border: 1px solid ${props => props.border};
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
  font-family: ${props => props.theme.fontBody};
  color: ${props => props.theme.fontDark};
`

const ContentWrapper = styled.div`
  margin: 0.25rem;
  padding: 0.5rem;
  /* text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1); */
`

const PostTitle = styled.div`
  font-family: ${props => props.theme.fontHeader};
  font-size: 2rem;
  color: ${props => props.theme.secondary};
  margin: 0rem;
  padding: 0rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`

const PostedDate = styled.p`
  margin: 0.12rem 0.5rem;
  /* padding: 0rem; */
  font-weight: bold;
  color: ${props => props.theme.fontLight};
`

export default withRouteData(
  ({
    post,
    prevPath,
    prevIsPublished,
    nextPath,
    nextIsPublished
  }) => {
    // Prism.highlightAll()
    return (
      <PostWrapper>
        <ContentWrapper>
          <article>
            <Helmet title={`${post.title} - ${nameContent}`} />
            <PostTitle>{post.title}</PostTitle>
            <PostedDate>{formatDate(post.dateAndTime)}</PostedDate>
            <Dump
              prev={prevPath}
              prevPub={prevIsPublished}
              next={nextPath}
              nextPub={nextIsPublished}
            />
            <Markdown source={post.content} />
            {prevIsPublished ? <Link to={prevPath}>Prev</Link> : ''}
            {nextIsPublished ? <Link to={nextPath}>Next</Link> : ''}
            {/* <PostNav props={post} /> */}
          </article>
        </ContentWrapper>
      </PostWrapper>
    )
  }
)
