import React, { useState } from 'react';
import axios from "axios";
import { Button } from 'antd';
import '../components/Quotes.css';

/*
{quote?.tags?.map(tag =>
             (<option>{tag}</option>)
          )}
*/

const Quotes = () => {
    const [ quote, setQuote ] = useState([])
    const [ quotes, setQuotes] = useState('')
 
    const GetMotivation = () => {
      const options = {
       method: 'POST',
       url: process.env.REACT_APP_M_API_URL,
       headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Host': process.env.REACT_APP_M_RAPIDAPI_HOST,
        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
      },
        data: {key1: 'value', key2: 'value'}
      };
        
      axios.request(options).then(function (response) {
         console.log(response.data);
         setQuotes(response.data);
      }).catch(function (error) {
        console.error(error);
      });
  }
    const GetQuote = () => {
      const options = {
        method: 'GET',
        url: process.env.REACT_APP_N_API_URL,
        headers: {
          'X-RapidAPI-Host': process.env.REACT_APP_N_RAPIDAPI_HOST,
          'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
        }
      };
      axios.request(options).then(function (response) {
         console.log(response.data);
         setQuote(response.data);
      }).catch(function (error) {
        console.error(error);
    });
    
    }

    return (
      <div className="App">
        <header className="App-header">
        <p></p>
        <div className='card'>
        <h1 className="heading">
            Random Quotes
        </h1>
        <p className="heading">
         {quote?.content} 
         <p></p>
        - {quote?.originator?.name}
        </p>
        <div className='button'>
        <Button span = {12} onClick={GetQuote}> Get Quote </Button>
        </div>
        </div>
        <p></p>
        <div className='card'>
        <h1 className="heading">
             Motivational Quotes
        </h1>
        <p className="heading">
         {quotes}
        </p>
        <div className='buttons'>
        <Button span = {12} onClick={GetMotivation}> Get Motivational Quote </Button>
        </div>
        </div>
        <p></p>
        </header>
      </div>
    );
}

export default Quotes;


 