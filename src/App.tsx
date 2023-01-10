import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageBox from './components/ImageBox';

function App() {

  const inputRef=useRef<HTMLInputElement>(null);

  const [imageList,setImageList]=useState<string[]>([])

  return (
    <div className='container'>
      <div className='initial-box'>
        {
          imageList.length===0&&<div className='text-center'>No Image <br/> Add Image</div>
        }
        <input type="file" ref={inputRef} onChange={(event)=>{
          const value=event.currentTarget.value
          if(value) setImageList((prev)=>[...prev,value])
        }}/>
        <div className='plus-box' onClick={()=>{
          inputRef.current?.click()
        }}>+</div>
      </div>

    </div>
  );
}

export default App;
