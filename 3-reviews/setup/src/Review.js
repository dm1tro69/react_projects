import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const {name, text, job, image} = people[index]

  const checkNumber = (number) => {
    if (number > people.length -1){
      return 0
    }
    if (number < 0){
      return people.length - 1
    }
    return number
  }

  const prevPerson = () => {
    setIndex((index)=> {
     let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }
  const nextPerson = () => {
    setIndex((index)=> {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }
  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * people.length)
    if(randomIndex === index){
      randomIndex = index + 1
    }
    setIndex(checkNumber(randomIndex))

  }

  return (
      <article className={'review'}>
          <div className="img-container">
            <img src={image} alt="img" className={'person-img'}/>
            <span className="quote-icon">
              <FaQuoteRight/>
            </span>
          </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button onClick={prevPerson} className="prev-btn"><FaChevronLeft/></button>
          <button onClick={nextPerson} className="next-btn"><FaChevronRight/></button>
        </div>
        <button onClick={randomPerson} className="random-btn">surprise me></button>

      </article>
  )
};

export default Review;
