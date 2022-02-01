import React  from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";//styled-comp yap
import { useQuery } from "react-query";
import { fetchDiscoverMovies,fetchMovieGenres } from "../api";
import NotFound from "./NotFound";
import {HiTrendingUp} from "react-icons/hi"
import {RiCompassDiscoverLine} from "react-icons/ri"
import { Link } from "react-router-dom";
import Trending from "./Trending"
import Slider from "react-slick";
import sliderSettings from "../Components/slider";
import { useNavigate } from 'react-router-dom';
const Home = (props) => {
  const [q, setQ] = useState([]);
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();
  
  const { isLoading, isError, error, isFetched, isFetching, data, ...query } =
    useQuery("movie", fetchDiscoverMovies, {
      select: (data) => data.data.results,
      retry: false,
    });
  console.log(filter)
  console.log(setFilter)
  console.log(setFilter)
  console.log(query)
  function formSubmit(event) {
    event.preventDefault();
    if (!!event.target.q.value.length) {
        setQ(event.target.q.value);
        navigate(`/search?query=${event.target.q.value}`);
    }
    event.target.q.value = '';
}
  const genres = useQuery("genres", fetchMovieGenres, {
    retry: false,
  });
  return (
    <>
   <div className="container">
                <form onSubmit={formSubmit}>
                    <div className="mt-5 mb-3">
                        <input
                            name="q"
                            type="text"
                            className="form-control"
                            id="search"
                            defaultValue={q}
                            placeholder="Search" 
                        />
                    </div>
                    <button type="submit" className="btn btn-danger">
                        Search
                    </button>
                </form>
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

    {genres?.data?.genres?.filter((genre) =>
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
          
           
         
           
   
