import PropTypes from 'prop-types'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {
  BlogThemeContext,
  BlogThemeProvider
} from '../contexts/BlogThemeContext'
import { GlobalStyle, media } from '../theme/globalStyle'
import Footer from './Footer'
import Header from './Header'
import useSiteMetadata from './SiteMetadata'

const AppStyles = styled.div`
  background-color: ${({ theme }) => theme.background};
  background-image: url("${props => props.background}");
  background-attachment: fixed;
  /*space between first post and nav bar*/
  /* padding-top: 2.7rem; */
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'h h h h h h h h h h h h'
    '. . . m m m m m m . . .'
    'f f f f f f f f f f f f';
  ${media.giant`
    grid-template-areas:
      'h h h h h h h h h h h h'
      '. . m m m m m m m m . .'
      'f f f f f f f f f f f f';
    /* background: goldenrod; */
  `};
  ${media.desktop`
    grid-template-areas:
      'h h h h h h h h h h h h'
      '. m m m m m m m m m m .'
      'f f f f f f f f f f f f';
    /* background: dodgerblue; */
  `};
  ${media.tablet`
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
      'h h h h h h h h h'
      'm m m m m m m m m'
      'f f f f f f f f f';
    /* background: mediumseagreen; */
  `};
  ${media.phone`
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
      'h h h h h h h h h'
      'm m m m m m m m m'
      'f f f f f f f f f';
    /* background: palevioletred; */
  `};
`

const Wrapper = styled.div`
  grid-area: m;
`

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()
  return (
    <BlogThemeProvider>
      <BlogThemeContext.Consumer>
        {({ theme, background }) => (
          <ThemeProvider theme={theme}>
            <AppStyles background={background}>
              <GlobalStyle />
              <Header siteTitle={title} />
              <Wrapper>{children}</Wrapper>
              <Footer />
            </AppStyles>
          </ThemeProvider>
        )}
      </BlogThemeContext.Consumer>
    </BlogThemeProvider>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
