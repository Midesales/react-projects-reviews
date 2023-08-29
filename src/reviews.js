import React, {useState} from 'react'
import people from './data'
import {FaQuoteRight, FaChevronLeft, FaChevronRight} from 'react-icons/fa'

const Reviews = () => {
    const [index, setIndex ] = useState(0)
    const {image, name, job, text} = people[index]

const checkNumber = (number) => {
    if (number > people.length -1) {
        return 0
    }
    if (number < 0) {
        return (people.length -1)
    }
    return number;
}

const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length)
    if (randomNumber === index) {
        randomNumber = index +1
    }
    setIndex(checkNumber(randomNumber))
}

const prevPerson = () => {
    
     setIndex((index) =>{
        let newIndex = index - 1
        return checkNumber(newIndex) ;
    })
}

const nextPerson = () => {
    setIndex((index) =>{
        let newIndex = index + 1
        return checkNumber(newIndex) ;
    })
}
  return (
    <article className = 'border-4 rounded-lg w-96 flex flex-col items-center p-4'>
        <div>
            <img src = {image} alt="" className = 'w-48 h-48 rounded-full object-cover' />
        </div>
        <h2 className = 'font-bold text-3xl capitalize pt-8'>{name}</h2>
        <h4 className = 'font-semibold text-xl capitalize text-slate-800 pb-2'>{job}</h4>
        <p className = 'text-center text-lg'>{text}</p>  
        <div className = 'flex gap-8 p-4'>
            <button onClick = {prevPerson} className = "hover:border-4 hover:border-slate-950"> <FaChevronLeft /> </button>
            <button onClick = {nextPerson} className = "hover:border-4 hover:border-slate-950"> <FaChevronRight /> </button>
        </div>
        <button onClick ={randomPerson} className = ' p-2 bg-teal-100 text-slate-600 font-bold text-xl'>Suprise me</button>
    </article>
  )
}

export default Reviews