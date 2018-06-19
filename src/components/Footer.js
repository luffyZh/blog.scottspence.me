import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-static'

import ThemeSelect from '../components/ThemeSelect'
import { StyledHyperLink as SHL } from '../components/Shared'

import { media } from '../theme/globalStyle'

import rSLogo from '../reactStatic.png'
import gCSMLogo from '../powered_by_graphcms-1.svg'

const FooterWrapper = styled.div`
  z-index: 1;
  bottom: 0;
  /* width: 100%; */
  /* position: fixed; sticky */
  height: 20rem;
  grid-area: f;
  display: grid;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.fontDark};
  box-shadow: rgba(0, 0, 0, 0.1) 0px -5px 5px 0px;

  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    '. . . l s . . . g g g . . .'
    '. . . . . . . . g g g . . .'
    '. . . . . . . . r r r . . .'
    '. . . t . . . . r r r . . .';

  ${media.monitor`
    grid-template-columns: repeat(12, 1fr);
    grid-template-areas:
      '. . . l s . g g g . . .'
      '. . . t . . r r r . . .';
    /* background: red; */
  `};

  ${media.giant`
    grid-template-columns: repeat(10, 1fr);
    grid-template-areas:
      '. . l s . g g g . .'
      '. . . . . g g g . .'
      '. . . . . r r r . .'
      '. . t . . r r r . .';
    /* background: goldenrod; */
  `};

  ${media.desktop`
    grid-template-columns: repeat(8, 1fr);
    grid-template-areas:
      '. l s . g g g .'
      '. . . . g g g .'
      '. . . . r r r .'
      '. t . . r r r .';
    /* background: dodgerblue; */
  `};

  ${media.tablet`
    height: 30rem;
    grid-template-columns: repeat(6, 1fr);
    grid-template-areas:
        '. l s . . .'
        '. t . . . .'
        '. g g . . .'
        '. r r . . .';
    /* background: mediumseagreen; */
  `};

  ${media.phone`
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
        'l l s s'
        't . . .'
        'g g g g'
        'r r r r';
    /* background: palevioletred; */
  `};
`

const ImageWrapper = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;
  grid-area: ${props => props.area};
`

const LinksList = styled.ul`
  grid-area: ${props => props.area};
  margin: 0.5rem;
  padding: 0.5rem;
`

const LinksListTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: ${props => props.theme.fontHeader};
  color: ${props => props.theme.fontLight};
`

const ListLink = styled.li`
  list-style-type: none;
  font-family: ${props => props.theme.fontBody};
  color: ${props => props.theme.fontDark};
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${({ theme }) => theme.primaryAccent};
    background: ${({ theme }) => theme.primary};
    border-radius: 4px;
    transition: color 0.2s ease-out, background 0.2s ease-in;
  }
`

const StyledHyperLink = SHL.extend`
  font-family: ${props => props.theme.fontBody};
  color: ${props => props.theme.fontDark};
`

const StyledLink = styled(Link)`
  font-family: ${props => props.theme.fontBody};
  color: ${props => props.theme.fontDark};
  &:visited,
  &:active {
    color: inherit;
  }
  &:hover {
    color: ${({ theme }) => theme.primaryAccent};
    background: ${({ theme }) => theme.primary};
    border-radius: 4px;
    transition: color 0.2s ease-out, background 0.2s ease-in;
  }
`

const Footer = props => {
  // console.log('=====================')
  // console.log(props)
  // console.log('=====================')
  return (
    <FooterWrapper>
      <ThemeSelect />
      <LinksList area={'l'}>
        <LinksListTitle>Links</LinksListTitle>
        <ListLink>
          <StyledLink to="/about">About</StyledLink>
        </ListLink>
        <ListLink>
          <StyledLink to="/all-tags">Tags</StyledLink>
        </ListLink>
        <StyledHyperLink
          href={`mailto:spences10apps@gmail.com?subject=Hi Scott 👋`}
          target="_blank"
          rel="noopener"
        >
          <ListLink>Contact</ListLink>
        </StyledHyperLink>
      </LinksList>
      <LinksList area={'s'}>
        <LinksListTitle>Social</LinksListTitle>
        <StyledHyperLink
          href={`https://github.com/spences10`}
          target="_blank"
          rel="noopener"
        >
          <ListLink>GitHub</ListLink>
        </StyledHyperLink>
        <StyledHyperLink
          href={`https://medium.com/@spences10`}
          target="_blank"
          rel="noopener"
        >
          <ListLink>Medium</ListLink>
        </StyledHyperLink>
        <StyledHyperLink
          href={`https://twitter.com/ScottDevTweets`}
          target="_blank"
          rel="noopener"
        >
          <ListLink>Twitter</ListLink>
        </StyledHyperLink>
      </LinksList>
      <ImageWrapper area={'r'}>
        <img src={rSLogo} className="App-logo" alt="logo" />
      </ImageWrapper>
      <ImageWrapper area={'g'}>
        <img
          src={gCSMLogo}
          height="100%"
          className="App-logo"
          alt="logo"
        />
      </ImageWrapper>
    </FooterWrapper>
  )
}

export default Footer
