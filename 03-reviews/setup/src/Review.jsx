import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]
  const randy = () => {
    return Math.floor(Math.random() * people.length)
  }

  return <>
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={() => {
          index === 0 ? setIndex(people.length - 1) : setIndex(index - 1)
        }} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={() => {
          index === people.length - 1 ? setIndex(0) : setIndex(index + 1)
        }} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button onClick={() => {
        let check = true;
        let newPerson;
        while(check){
          newPerson = randy();
          newPerson === index ? check = true : check = false;
        }
        setIndex(newPerson)
      }} className="random-btn">Suprise Me</button>
    </article>
  </>;
};

export default Review;
