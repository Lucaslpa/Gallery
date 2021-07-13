import {useEffect, useState} from 'react'
import {getImages} from '../api/getImagesFromApi'
export  function Galery() {
 

   useEffect( () => {
    getImages()
   }, [])


    return (
        <div id="GaleryContainer" className='GaleryContainer' >
          
             <div>
              <img src='https://images.pexels.com/photos/8624947/pexels-photo-8624947.jpeg' ></img>
            </div>
           
          
        </div>
    )
}
