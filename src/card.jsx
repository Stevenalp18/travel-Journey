import React from 'react'
import data from './data'

export default function Card(props) {
    return(
        <div className="border-b-2 p-6 m-4 w-auto flex flex-col vertical-middle sm:flex-row">
            <div className="sm:w-1/2">
                <img src={props.imageUrl} className="rounded-2xl w-11/12"/>
            </div>
            <div className="sm:w-1/2">
                <img src="https://img.icons8.com/ios/50/null/map-marker--v1.png" alt="location pinpoint icon" className='w-4 inline-block mr-1 pt-1 align-middle'/>
                <h3 className='text-md text-left align-middle pt-1 inline-block'>{props.location}</h3>
                <a className="text-sm text-gray-300 align-middle underline block" href={props.googleMapsUrl}>View on Google Maps</a>
                <h2 className='text-3xl text-left font-semibold'>{props.title}</h2>
                <p className='mt-4 font-semibold'>{props.date}</p>
                <p className='mt-4'>{props.personalNotes}</p>
            </div>
        </div>
    )
}
// justify-around 
// w-10/12 h-80 