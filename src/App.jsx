import './styles.css';
import React, {useEffect} from 'react';
import MyButton from './Button.jsx';
import bitcoinimg from './bitcoin_img.jpg';

function PG_Title(){
  useEffect(() => {document.title = 'CSS Mastering'},[])
};


export default function MyApp() {
  PG_Title()
  return (
    <div>
      <div className='box1'>
      <div className='box2'>
        <div className='box3'><MyButton /></div>
      </div></div>
    </div>
  );
}