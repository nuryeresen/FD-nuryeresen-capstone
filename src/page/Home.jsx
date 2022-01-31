import React , { Component } from "react";
import { useState,useEffect } from "react";
import { Card } from "react-bootstrap";//styled-comp yap
import { useQuery } from "react-query";
import { fetchDiscoverMovies,fetchMovieGenres } from "../api";
import NotFound from "./NotFound";
import {HiTrendingUp} from "react-icons/hi"
import {RiCompassDiscoverLine} from "react-icons/ri"
import { Link } from "react-router-dom";
import LoadMore from "./LoadMore";
import Trending from "./Trending"
import { useContext } from "react";
import SearchSection from "./SearchSection"
import Pagination from "./Pagination";
import { MainContainer } from "../styledComponents/MainContainer";
import Slider from "react-slick";
import sliderSettings from "../Components/slider";

const Home = (props) => {
  const [search, setSearch] = useState("");
  const [q, setQ] = useState([]);
  const [filter, setFilter] = useState("");
 
  
  const { isLoading, isError, error, isFetched, isFetching, data, ...query } =
    useQuery("movie", fetchDiscoverMovies, {
      select: (data) => data.data.results,
      retry: false,
    });
  
  const genres = useQuery("genres", fetchMovieGenres, {
    retry: false,
  
  });

  return (
    <>
     <SearchSection/>
 <div className="col-sm-12 d-flex justify-content-center">
      
      
      </div>
      
      <h3><RiCompassDiscoverLine/>Discover</h3>

      <div className=" row m-3">
      <Slider {...sliderSettings}>
           { data?.map((item) => (
              <div key={item?.id}  className="col-sm ">
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
    <Card.Text className="text-muted">

    GENRES:{genres?.data?.genres?.filter((genre) =>
                 genre.name
                )}
    </Card.Text>
  </Card.Body>
</Card>
  
</Link>  
</div>


           ))}
                </Slider>
           
           
          {data?.length === 0 && <NotFound />}

        </div>
       
           <h3><HiTrendingUp/>Trending</h3>     

             <Trending/> 
        
         
    </>
  );
};

export default Home;
