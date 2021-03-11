import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards' id="destinations">
      <h1>Now It's Time To Experience!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Visit the wonders all over the world'
              label='Excitement'
              path='/'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Explore wilderness'
              label='Adventure'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-home.jpg'
              text='Sail into uncharted waters'
              label='Amazement'
              path='/'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Discover unrevealed historical misteries'
              label='Discovery'
              path='/'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Enjoy the most beautiful cities of the world'
              label='Touring'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
