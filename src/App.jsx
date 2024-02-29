import './styles.css';
import React, {useEffect} from 'react';
import MyButton from './Button.jsx';
import bitcoinimg from './bitcoin_img.jpg';

function PG_Title(){
  useEffect(() => {document.title = 'Bitcoin is the future'},[])
};


export default function MyApp() {
  PG_Title()
  return (
    <div>
      <h1 className='body'>Welcome</h1>
      <div className='box'>
        <img src={bitcoinimg} height={300} width={300}></img>
      </div>
      <MyButton />
    </div>
  );
}