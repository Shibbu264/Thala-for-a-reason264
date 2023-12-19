import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import  {AppProps } from 'next/app'

import React from 'react';


export default function App({ Component, pageProps }: AppProps) {
  return <>
  
 < Component {...pageProps}/> 
       <Analytics />
       </>

}
