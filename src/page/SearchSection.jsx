import React, { useEffect, useState } from 'react';
import { SearchContext } from "../context/SearchContext"
import { useLocation, useNavigate } from "react-router-dom"
import { useContext } from 'react';
import { useQuery } from "react-query";
import { fetchMovies } from '../api';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Paginate from './Pagination';
import { CardDescription } from '../styledComponents/Card';
const SearchSection = (props) => {

    const location= useLocation();
    const navigate = useNavigate()
    const [q, setQ] = useState("");
  const {searchValue, setSearchValue} = useContext(SearchContext)
  const [data, SetData]=useState([])
 console.log(searchValue)
useEffect(()=> {
    
    (searchValue !== "" &&fetch(`https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=a75c039072f6f6025a9c53a11184882b`).then(response => response.json())
    .then(x => SetData(x))); 
}, [searchValue])
console.log(location)

 function formSubmit(event) {
  event.preventDefault();
  if (!!event.target.value) {
      setQ(event.target.value);
      navigate(`/search?query=${event.target.value}`);
  }
  event.target.value = '';
}
  return (
    <>
    
      <div className="container mt-3">
          <div className='row text-light'>
              <div className="col-sm-12">
                  <label htmlFor="search" className="form-label fs-3"></label>
                  <form onSubmit={formSubmit}>
                  <input name="q" 
                  type="text"
                   className="form-control"
                    id="search"
                      placeholder="Search"  
                      defaultValue={searchValue} 
                      onChange={(event) => {setSearchValue(event.target.value) }} />
                     </form> 
                           
               </div>
              <div className="container d-flex">
         
{ data?.results?.map(item => <Link className="text-decoration-none" to={"/movies"}> 
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
</Link> )}


              </div>
              <div className='col-sm-12 m-3'><Paginate/> </div>
          </div>
      </div>

  </>  )
     
}

export default SearchSection;         
                     
              







     


  
  
 

  
 