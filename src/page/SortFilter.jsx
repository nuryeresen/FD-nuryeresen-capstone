 import React from "react";
import {  useParams } from "react-router-dom";
import { useQueries, useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieGenres } from '../api';
import { getGenres } from '../reduxStore/getGenres';
import { CardOne } from "../styledComponents/Card";
import { ThirdButton } from "../styledComponents/Button";
import { Image } from "react-bootstrap";
const Filter = (props) => {
  const params = useParams(); 
  console.log(params);
const dispatch = useDispatch()
const { genres } = useSelector(state => state)
const genresQuery = useQuery("genres", () => fetchMovieGenres, { reply: false }) 
console.log("GENRES:::", genresQuery) 
genresQuery?.data?.then((val) =>
    dispatch(getGenres(val?.data?.genres))
  )
 return (
    <>
      <h1>Sort/Filter Page</h1>
      <div className="container">
  <div className="row">
    <div className="col-4">
    
    <select className="form-select" aria-label="Default select example" onChange={(e) => dispatch((e.target.options[e.target.selectedIndex].value))}>
  <option defaultValue="DEFAULT" >Sort By</option>
  <option defaultValue="original_title.asc">A-->Z</option>
  <option defaultValue="2">Z-->A</option>
  <option defaultValue="3">Most Populars</option>
  <option defaultValue="4">Least Populars</option>
  <option defaultValue="5">Newest Released</option>
  <option defaultValue="6">Oldest Released</option>
</select>

<CardOne>
<h4>From:</h4>
<h4>To:</h4> 
<div>
          {
            genres?.map(item=> <ThirdButton >{item.name}</ThirdButton>)
          }
        </div>
</CardOne>
    </div>
    <div className="col-7"><CardOne>
      <div>
  
        </div>
      
        </CardOne>
    
        </div>
  </div>
</div>
    </>
  );
};

export default Filter;  
 
 






  

 
 
  
       
   
