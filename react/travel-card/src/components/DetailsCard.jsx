import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../../data'

const DetailsCard = () => {
    const {id} = useParams()
    console.log(id)

    const i = data.findIndex((elmt)=>elmt.id == id)


  return (
    <div className='container'>
        <h3 className='display-5 text-center'> {data[i].name}</h3>

      <img src={data[i].image} alt='Image' className='img-fluid'/>
      <p className='lead'>{data[i].info}</p>
    </div>
  )
}

export default DetailsCard
