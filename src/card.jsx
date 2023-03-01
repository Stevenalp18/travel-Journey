import React from 'react'
import data from './data'

export default function Card(props) {
    return(
        <div className="border-solid border-black border-2 rounded-md p-4 m-10 w-auto text-center flex justify-around">
            <div className="w-1/2">
                <img src={props.imageUrl} className="w-10/12"/>
            </div>
            <div className="w-1/2">
                <h2 className='text-sm text-left inline-block mr-10'>{props.location}</h2>
                <a className="text-sm" href={props.googleMapsUrl}>View on Google Maps</a>
                <h1 className='text-2xl text-left'>{props.title}</h1>
            </div>
        </div>
    )
}