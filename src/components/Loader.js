import React, { useState, useEffect } from 'react'
import logo from '../logo.svg';
import Quotes from './Quotes';
import '../components/Loader.css';


function Apps() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <>
    {loading === false ? (
      <Quotes/>
      ) : (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='card'>
         THIS APP IS LOADING PLEASE WAIT....
         </div>
        </header>
      )}
      </>
  );
}

export default Apps;