 import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom"
import Slider from "react-slick";
import sliderSettings from "../Components/slider";
const SearchSection = (props) => {
const params=useParams()
    const location= useLocation();
    const navigate = useNavigate()
    const [q, setQ] = useState("");
  const [searchValue, setSearchValue] = useState("")

  const [data, SetData]=useState([])

 
 console.log(params?.search) 
 console.log(searchValue)
console.log(q)
useEffect(()=> {
    
    (searchValue !== "" &&fetch(`https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=a75c039072f6f6025a9c53a11184882b`).then(response => response.json())
    .then(x => SetData(x))); 
}, [searchValue])
console.log(location)
useEffect(()=> {
   (setSearchValue(location.search.split("0")[1]))
  
}, [location ])

function formSubmit(event) {
  event.preventDefault();
  if (!!event.target.q.value.length) {
      setQ(event.target.q.value);
      navigate(`/search?query=${event.target.q.value}`);
  }
  event.target.q.value = '';
}

  return (
    <>
    
      <div className="container mt-3">
          <div className='row text-light'>
                <form onSubmit={formSubmit}>
                    <div className="mt-5 mb-3">
                        <input
                            name="q"
                            type="text"
                            className="form-control"
                            id="search"
                            placeholder="Search" 
                            defaultValue={searchValue}
                        />
                    </div>
                    <button type="submit" className="btn btn-danger">
                        Search
                    </button>
                </form>
              <div className="container ">
              <div className=" m-3">
              <Slider {...sliderSettings}>
{ data?.results?.map(item => <Link className="text-decoration-none" to={"/movies/"+ item.id }> 
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

</Slider>
</div>

              </div>
            
          </div>
      </div>

  </>  )
     
}

export default SearchSection;      
                     
              


  
  
 

  
  