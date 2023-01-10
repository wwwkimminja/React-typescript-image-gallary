import React, { useRef, useState } from 'react';
import './App.css';
import ImageBox from './components/ImageBox';

function App() {

  const inputRef=useRef<HTMLInputElement>(null);

  const [imageList,setImageList]=useState<string[]>([])

  return (
    <div className='container'>
      <div className={`gallery-box ${imageList.length>0 ? 'row':""}`}>
        {
          imageList.length===0&&<div className='text-center'>No Image <br/> Add Image</div>
        }
        <input type="file" ref={inputRef} onChange={(event)=>{
         
          if(event.currentTarget.files?.[0]){
            const file=event.currentTarget.files[0]
            const reader=new FileReader();
            reader.readAsDataURL(file)
            reader.onload=(event)=>{
              setImageList((prev)=>[...prev,event.target?.result as string])
            }
           
          } 
         
        }}/>
 
        <>
    {
        imageList.map((el,idx) =>{
          return <ImageBox key={el+idx} src={el}/>
        })
      }
        </>
        <div className='plus-box' onClick={()=>{
          inputRef.current?.click()
        }}>+</div>
      </div>
  
    </div>
  );
}

export default App;
