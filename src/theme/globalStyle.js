<<<<<<< HEAD
import { injectGlobal, css } from 'styled-components'

import dankYo from '../fonts/dank-mono.css'
=======
import styled, { injectGlobal, css } from 'styled-components'
import { fontFace } from './fonts'
>>>>>>> development

export const themes = {
  theme1: {
    primary: '#f2ff49',
    primaryAccent: '#645dd7',
    pink: '#ff0198',
    blue: '#01c1d6',
    branding: '#f7e018',
    secondary: '#ff4242',
    background: '#b1b1cc',
    foreground: '#fefefe',
    border: '#044040',
    fontDark: '#34434b',
    fontLight: '#586368',
    fontWhite: '#ffffff',
    fontHeader: 'Nunito, sans, sans-serif',
    fontBody: 'Poppins, sans-serif'
  },

  theme2: {
    primary: '#9166ff',
    primaryAccent: '#ecd444',
    pink: '#ff0198',
    blue: '#01c1d6',
    branding: '#f7e018',
    secondary: '#eb238e',
    background: '#f9f9fd',
    foreground: '#fefefe',
    border: '#044040',
    fontDark: '#34434b',
    fontLight: '#586368',
    fontWhite: '#ffffff',
<<<<<<< HEAD
    fontHeader: 'Trirong, sans, sans-serif',
    fontBody: 'Rubik, sans-serif'
=======
    fontHeader: 'Lato, sans-serif',
    fontBody: 'Merriweather, sans, sans-serif'
>>>>>>> development
  },

  theme3: {
    primary: '#ff0198',
    primaryAccent: '#ffb617',
    pink: '#ff0198',
    blue: '#01c1d6',
    branding: '#01c1d6',
    secondary: '#eb238e',
    background: '#e6e6e6',
    foreground: '#f7f0f0',
    border: '#054545',
    fontDark: '#034544',
    fontLight: '#596869',
    fontWhite: '#ffffff',
<<<<<<< HEAD
    fontHeader: 'Eczar, sans, sans-serif',
    fontBody: 'Taviraj, sans-serif'
=======
    fontHeader: 'Roboto, sans, sans-serif',
    fontBody: 'Nunito, sans-serif'
>>>>>>> development
  }
}

const sizes = {
  monitor: 1800,
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce(
  (accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = sizes[label] / 16
    accumulator[label] = (...args) => css`
      @media (max-width: ${emSize}em) {
        ${css(...args)};
      }
    `
    return accumulator
  },
  {}
)

<<<<<<< HEAD
export const reset = () =>
  injectGlobal`
  
    @import url('https://fonts.googleapis.com/css?family=Nunito:400,700|Poppins:400,700|Trirong:400,700|Rubik:400,700|Eczar:400,700|Taviraj:400,700');
    @import url('https://fonts-for-the-font-god.netlify.com/dank-mono.css?family=dm');
    
    /* @font-face {
      font-family: dm;
      src: url(${dankYo}) format('woff');
      font-weight: normal;
    } */
    
    p[class*='language-'],
    code[class*='language-'],
    pre[class*='language-'] {
      font-family: dm, Consolas, Courier, monospace;
    }
=======
injectGlobal`
  ${fontFace('Lato', 'lato-v14-latin-700', 'bold')}
  ${fontFace('Merriweather', 'merriweather-v19-latin-regular')}

  ${fontFace('Nunito', 'nunito-v9-latin-700', 'bold')}
  ${fontFace('Poppins', 'poppins-v5-latin-regular')}

  ${fontFace('Roboto', 'roboto-v18-latin-700', 'bold')}
  ${fontFace('Nunito', 'nunito-v9-latin-regular')}

  *, *:before, *:after {
    box-sizing: border-box;
  }

  /* * {
    outline: 1px solid red !important;
  } */

  html {
    /* font-size: 18px; */
  }
>>>>>>> development

    *, *:before, *:after {
      box-sizing: border-box;
    }
    /* * {
      outline: 1px solid red !important;
    } */

    body {
      padding: 0;
      margin: 0;
      line-height: 1.3125;
    }
    a {
      text-decoration: none;
    }
    a:active, a:focus {
      outline: 0;
      border: none;
      -moz-outline-style: none
    }
<<<<<<< HEAD
    :focus {
      outline:none;
    }
    
    ::-moz-focus-inner {
      border:0;
    }
    ul {
      margin: 0 auto;
      /* list-style-type: none; */
    }
    img {
      max-width: 100%;
      max-height: 100%;
    }
    blockquote {
      border-left: 5px solid #ccc;
      padding-left: 5px;
      font-style: italic;
    }
    /* code {
      font-family: dm;
      color: rgb(101, 123, 131);
      background-color: rgb(253, 246, 227);
    } */
  `
=======
  `};

  body {
    padding: 0;
    margin: 0;
    font-family: ${props => props.theme.fontBody};
    /* font-size: 0.75rem; */
    line-height: 1.3125;
  }

  a {
    text-decoration: none;
  }

  a:active, a:focus {
    outline: 0;
    border: none;
    -moz-outline-style: none
  }

  :focus {
    outline:none;
  }
  
  ::-moz-focus-inner {
    border:0;
  }

  ul {
    margin: 0 auto;
  }
`

export const StyledH1 = styled.h1`
  padding: 0.5rem;
  margin: 0.5rem;
  font-family: ${props => props.theme.fontHeader};
`

export const StyledH2 = styled.h2`
  padding: 1.75rem;
  margin: 0.5rem;
`

export const StyledH3 = styled.h3`
  padding: 1.75rem;
  margin: 0.5rem;
`

export const StyledH4 = styled.h4`
  padding: 1.75rem;
  margin: 0.5rem;
`

export const StyledH5 = styled.h5`
  padding: 1.75rem;
  margin: 0.5rem;
`

export const StyledH6 = styled.h6`
  padding: 1.75rem;
  margin: 0.5rem;
`

export const StyledP = styled.p`
  padding: 1.75rem;
  margin: 0.5rem;
`

export const StyledUl = styled.ul`
  padding: 1.75rem;
  margin: 0.5rem;
`

export const StyledLi = styled.li`
  padding: 1.75rem;
  margin: 0.5rem;
  text-decoration: none;
`

export const StyledA = styled.a`
  padding: 1.75rem;
  margin: 0.5rem;
`
>>>>>>> development
