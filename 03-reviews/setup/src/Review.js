import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const {name, job, image, text} = people[index]

  const randomPerson = () => {
    let randomNum = Math.floor (Math.random () * people.length)
    if (randomNum == index) {
      randomNum = index + 1
    }
    setIndex(checkNumber(randomNum));
  }  
  const checkNumber = (num) => {
    if (num < 0) {
      return people.length - 1
    } else if ( num > people.length - 1) {
      console.log(num)
      return 0
    } else {
      return num
    }
  }
  const nextPerson = () => {
    setIndex((index) => {
      console.log(checkNumber(index+1))
      return checkNumber(index + 1)
    })
  }
  const prevPerson = () => {
    setIndex((index) => {
      return checkNumber(index - 1)
    })
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon' >
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={() => prevPerson()}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={() => nextPerson()}>
          <FaChevronRight />
        </button>
      </div>
        <button className='random-btn' onClick={() => randomPerson()}>
          Surprise me
        </button>
    </article>
  );
};

export default Review;
