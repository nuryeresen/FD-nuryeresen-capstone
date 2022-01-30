import React from "react";
import {  useParams } from "react-router-dom";
import { useQueries, useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularTopMovies, fetchMovieGenres } from '../api';
import { getGenres } from '../reduxStore/getGenres';
import { CardOne } from "../styledComponents/Card";
import { ThirdButton } from "../styledComponents/Button";



const Filter = (props) => {
  const params = useParams(); 
  console.log(params);
const dispatch = useDispatch()


 /* const { genres } = useSelector(state => state)
 
 const genresQuery = useQuery("genres", () => fetchMovieGenres, { reply: false })

  console.log("GENRES:::", genresQuery)

  genresQuery?.data?.then((val) =>
    dispatch(getGenres(val?.data?.genres))
  )
 */
  return (
    <>
      <h1>Sort/Filter Page</h1>
      <div className="container">
  <div className="row">
    <div className="col-4">
    {/* dropdown */}
    <select className="form-select" aria-label="Default select example" value={'DEFAULT'}  onChange={(e) => dispatch((e.target.options[e.target.selectedIndex].value))}>
  <option value="DEFAULT" >Sort By</option>
  <option defaultValue="1">A-->Z</option>
  <option defaultValue="2">Z-->A</option>
  <option defaultValue="3">Most Populars</option>
  <option defaultValue="4">Least Populars</option>
  <option defaultValue="5">Newest Released</option>
  <option defaultValue="6">Oldest Released</option>
</select>

<CardOne>
<h4>From:</h4>
<h4>To:</h4> 
 <ThirdButton>Action</ThirdButton> 
 <ThirdButton>Adventure</ThirdButton> 
 <ThirdButton>Comedy</ThirdButton> 
 <ThirdButton>Romance</ThirdButton> 
 <ThirdButton>Drama</ThirdButton> 
 <ThirdButton>Crime</ThirdButton> 
</CardOne>
    </div>
    <div className="col-7"><CardOne>
    {/*   <div>
          {
            genres?.map(item=> <button>{item.name}</button>)
          }
        </div> */} 
      
        </CardOne>
        </div>
  </div>
</div>
    </>
  );
};

export default Filter;
  
       
    