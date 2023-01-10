import React, { useCallback, useRef, useState } from 'react';
import './App.css';
import ImageBox from './components/ImageBox';
import { useDropzone } from 'react-dropzone';

function App() {


  const [imageList,setImageList]=useState<string[]>([])
  const onDrop = useCallback((acceptedFiles: string | any[]) => {
		if (acceptedFiles.length) {


			for (const file of acceptedFiles) {
				const reader = new FileReader();

				reader.readAsDataURL(file)
				reader.onloadend = (event) => {
					setImageList(prev => [...prev, event.target?.result as string])
				}
			}
		}
	}, [])

	const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div className='container'>
      <div className={`gallery-box ${imageList.length>0 ? 'row':""}`}>
        {
          imageList.length===0&&<div className='text-center'>No Image <br/> Add Image</div>
        }

 
        <>
    {
        imageList.map((el,idx) =>{
          return <ImageBox key={el+idx} src={el}/>
        })
      }
        </>
        <div className='plus-box'
					{...getRootProps()}
				>
					<input
						{...getInputProps()}
					/>
					+
				</div>
      </div>
  
    </div>
  );
}

export default App;
