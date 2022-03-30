import React from 'react';
import {Global,css} from '@emotion/react'
import Helmet from 'react-helmet';
import Header from './Header.js';
import Footer from './footer.js'
import useSeo from '../hooks/use-seo'

const Layout = (props) => {
  const seo =  useSeo();
  const {siteName,fallbackSeo:{title,description}}=seo;
    return ( 
        <>
        <Global 
           styles={css`
           html{
               font-size:62.5%;
               box-sizing: border-box;
           }
           *,*:before, *:after{
               box-sizing: inherit;
           }
             body{
                 font-size: 18px;
                 font-size: 1.8rem;
                 line-height: 1.5;
                font-family:'PT Sans', sans-serif;
                 
             }
            h1,h2,h3{
                margin: 0;
                line-height: 1.5;
             }
             h1,h2{
                 font-family: 'Roboto ', sans-serif;
             }
             h3{
                 font-family: 'PT Sans', sans-serif;
             }
             ul{
               list-style: none;
               margin: 0;
               padding: 0;
             }
           `}
        />
        <Helmet >
            <title>{title}</title>
            <meta name="description" content={description} />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"/>
            <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@1,700&family=Roboto:wght@700&display=swap" rel="stylesheet"/>
        </Helmet>
          <Header/>
           {props.children} 

           <Footer
             title={title}
           />
        </>


     );
}
 
export default Layout;