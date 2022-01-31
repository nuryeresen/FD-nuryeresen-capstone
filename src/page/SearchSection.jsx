import React, { useEffect } from 'react';
import { SearchContext } from "../context/SearchContext"
import { useLocation, useNavigate } from "react-router-dom"
import { useContext } from 'react';
import { useQuery } from "react-query";
import { fetchMovies } from '../api';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Paginate from './Pagination';
const SearchSection = (props) => {

    const location= useLocation();
    const navigate = useNavigate()
  const {searchValue, setSearchValue} = useContext(SearchContext)

 console.log(searchValue)
useEffect(()=> {
    
    (searchValue !== "" &&fetch(`https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=a75c039072f6f6025a9c53a11184882b`).then(response => response.json())
    .then(data => console.log(data))); 
}, [searchValue])
console.log(location)

//NAVİGATE YAP
function handleSearch(e) {
  e.preventDefault();
  const user = JSON.parse(localStorage.getItem("userData"));
  console.log("target", e.target.username.value);

  if (searchValue === e.target.searchValue.value ) {

      console.log("git:::", searchValue);
      navigate("/search");
      setSearchValue(true);
  }
  else{
      navigate("/home");
  }

}



  return (
    <>
    
      <div className="container mt-3">
          <div className='row text-light'>
              <div className="col-lg-10 col-8">
                  <label htmlFor="search" className="form-label fs-3"></label>
                  <input name="qInput" type="text" className="form-control" id="search"
                      placeholder="Search"  defaultValue={searchValue} onChange={(e) => {
                     setSearchValue(e.target.value) }} />
                    {/* ==navigate(`/search?q=${event.target.qInput.value`}  */}
                   
               </div>
              <div className="col-lg-2 col-4 align-items-end d-flex">
{/* {location.pathname === "/search" && data?.data?.results.map(item => <Link className="text-decoration-none" to={"/search/"+ item.id }> 
  <Card style={{ width: '18rem' }} >
  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500` + item.poster_path} />
  <Card.Body>
    <Card.Title className="text-muted fw-bold ">{item.title}</Card.Title>
    <Card.Text className="text-muted ">
     RELEASE DATE: {item.release_date}
    </Card.Text>
    <Card.Text className="text-muted">
     IMDB SCORE: {item.vote_average}
    </Card.Text>
  </Card.Body>
</Card>
</Link> )} */}
              </div>
              <div className='col-sm-12 m-3'><Paginate/> </div>
          </div>
      </div>

  </>  )
     
}

export default SearchSection;         
                     
              







     


  
  
 

  
 