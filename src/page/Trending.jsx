import React from 'react';
import { useState, useEffect } from "react";
import { Card } from 'react-bootstrap';
import { fetchTrendingMovies,fetchMovieGenres } from '../api/';
import { useQuery } from "react-query";
import { Link } from 'react-router-dom';
import { SecondaryButton } from '../styledComponents/Button';
import NotFound from './NotFound';
import Slider from "react-slick";
import sliderSettings from "../Components/slider";
const Trending = (props) => {
  //trending movies
  const [period, setPeriod] = useState("day");
  const [currentPageData, setCurrentPageData] = useState([]);
// console.log("props", props);
  const { data } = useQuery(
    ["movie", period],
    () => fetchTrendingMovies(period),
    {
    
      retry: false,
    }
  );
useEffect(() => {
  setCurrentPageData(data);
  }, [data]);
  
  const genres = useQuery("genres", fetchMovieGenres, {
    retry: false,
  });
 // console.log("genres.:", genres);
  //console.log(period);

  

  return (
    <>
    <div>
      <div className='d-flex justify-content-end'>
        
        <SecondaryButton
          type="button"
          onClick={() => {
            setPeriod("day");
           
          }}
        >
          Day
        </SecondaryButton>
        <SecondaryButton
          type="button"
          onClick={() => {
            setPeriod("week");
          }}
        >
          Week
        </SecondaryButton>
        </div>
        
        <div className=" row m-3">
    
        <Slider {...sliderSettings}>
           { data?.data?.results.map((item) => (
            
              <div key={item.id} className="col-sm ">
           <Link className="text-decoration-none" to={"/movies/"+ item.id }> 
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
</Link>  
</div>
            ))}
                  </Slider>
          {currentPageData?.length === 0 && <NotFound />}
         
        </div>
      
      </div>
    </>
  );
};
export default Trending; 

       
  
    



   
   
 