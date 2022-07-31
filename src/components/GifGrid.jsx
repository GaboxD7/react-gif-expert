import { useEffect, useState } from 'react'
import { useFechGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'

export  const GifGrid = ({category}) => {
      
    const { images, isLoading } = useFechGifs(category)


  return (
    <>
        <h4>{category}</h4>
        {
          isLoading  &&  <h3>Cargando...</h3>
         
        }
       
        <div className='card-grid'>
          {
            // Destruturacion del objeto
            images.map((image) =>   (

                <GifItem key={image.id} 
                {... image}
                />
            ))
          }
        </div>
    </>
  )
}

