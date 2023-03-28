import React, {useState, useEffect} from 'react';
import StarRatings from 'react-star-ratings';

const Stars = ({data}) => {


  var sum = 0;
  var rawAverage = 0;
  function createAverageRating(metadataObject) {
    //create an array of the values per rating
    var arrayOfTotalRatings = Object.values(metadataObject);
    //sum up the total ratings for divisor
    arrayOfTotalRatings.forEach(rating => {
      let numRating = Number(rating);
      sum +=numRating;
      return sum;
    })
    let dividend = Number(arrayOfTotalRatings[0])*1 + Number(arrayOfTotalRatings[1])*2 + Number(arrayOfTotalRatings[2])*3+Number(arrayOfTotalRatings[3]*4 + Number(arrayOfTotalRatings[4])*5);


    var rawAverage = dividend/sum;

    return rawAverage;

  }
  var averageNotRounded = createAverageRating(data);
  var bigRating = averageNotRounded.toFixed(1);
  console.log(bigRating, 'this is the big rating')
  var starRating =(averageNotRounded*4).toFixed(8)/4;
  console.log(starRating, 'this is the star rating');
  var arrayOfTotalRatings = Object.values(data);
  console.log(arrayOfTotalRatings, 'array of all ratings');

  var fiveStarPercentage = ((Number(arrayOfTotalRatings[4])/sum)*100).toFixed(0);
  var fourStarPercentage = ((Number(arrayOfTotalRatings[3])/sum)*100).toFixed(0);
  var threeStarPercentage = ((Number(arrayOfTotalRatings[2])/sum)*100).toFixed(0);
  var twoStarPercentage = ((Number(arrayOfTotalRatings[1])/sum)*100).toFixed(0);
  var oneStarPercentage = ((Number(arrayOfTotalRatings[0])/sum)*100).toFixed(0);

  console.log(fiveStarPercentage, 'five star percentage');
  return (
    <div className='stars-component'>
    <span className='big-rating'>{bigRating}</span>
    <StarRatings starDimension='15px' starSpacing='3px' rating={3}/>
    <div className='small-text'>({sum} total reviews)</div>
    <div className='small-text'>100% of reviews recommend this product</div>
    <div className='stars-and-bar-container'>
      <div className='x-stars'><small><u>5 stars</u></small></div>
      <div className='star-bar-container'>
        <div className='star-bar-fill' style={{width: `${fiveStarPercentage}%`}} />
        <div className="star-bar-unfill" style={{ width: `${100 - fiveStarPercentage}%` }} />
      </div>
    </div>
    <div className='stars-and-bar-container'>
      <div className='x-stars'><small><u>4 stars</u></small></div>
      <div className='star-bar-container'>
        <div className='star-bar-fill' style={{width: `${fourStarPercentage}%`}} />
        <div className="star-bar-unfill" style={{ width: `${100 - fourStarPercentage}%` }} />
      </div>
    </div>
    <div className='stars-and-bar-container'>
      <div className='x-stars'><small><u>3 stars</u></small></div>
      <div className='star-bar-container'>
        <div className='star-bar-fill' style={{width: `${threeStarPercentage}%`}} />
        <div className="star-bar-unfill" style={{ width: `${100 - threeStarPercentage}%` }} />
      </div>
    </div>
    <div className='stars-and-bar-container'>
      <div className='x-stars'><small><u>2 stars</u></small></div>
      <div className='star-bar-container'>
        <div className='star-bar-fill' style={{width: `${twoStarPercentage}%`}} />
        <div className="star-bar-unfill" style={{ width: `${100 - twoStarPercentage}%` }} />
      </div>
    </div>
    <div className='stars-and-bar-container'>
      <div className='x-stars'><small><u>1 stars</u></small></div>
      <div className='star-bar-container'>
        <div className='star-bar-fill' style={{width: `${oneStarPercentage}%`}} />
        <div className="star-bar-unfill" style={{ width: `${100 - oneStarPercentage}%` }} />
      </div>
    </div>
    </div>
  )
}
export default Stars;