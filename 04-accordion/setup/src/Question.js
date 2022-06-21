import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({title, info}) => {
  const [showInfo, sentShowInfo] = useState(false)

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => {sentShowInfo(!showInfo)}}>
          {showInfo ? <AiOutlinePlus /> : <AiOutlineMinus />}
        </button>
      </header>
      {showInfo && info}
    </article>
    );
};

export default Question;
