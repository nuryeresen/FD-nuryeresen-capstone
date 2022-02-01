
import {useParams} from "react-router-dom"
import { useQuery } from 'react-query';
import { fetchSingleMovie, fetchSingleMovieCredits,fetchReviews,fetchRecommendations } from '../api';
import {Card} from "../styledComponents/Card"
import { useEffect } from "react";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext"
import { CastCard, CastCardDescription } from '../styledComponents/Card'
import Slider from "react-slick";
import CastSliderSettings from "../Components/CastSlider";
const Detail = (props) => {
    const {movieId} = useParams()
    const {searchValue, setSearchValue} = useContext(SearchContext)

  const reviewsQuery = useQuery(["reviews", movieId], () => fetchReviews(movieId), { retry: false, select: state => state?.data })
  console.log("REVIEWS:::", reviewsQuery)

  const movieQuery = useQuery(["movie", movieId], () => fetchSingleMovie(movieId), { retry: false, select: state => state?.data })
  console.log("movieQuery:::", movieQuery)
  const movieCreditsQuery = useQuery(["moviecredits", movieId], () => fetchSingleMovieCredits(movieId), { retry: false, select: state => state?.data })
  console.log("movieCast:::", movieCreditsQuery)
  const movieData = movieQuery?.data

  const reviewsData = reviewsQuery?.data
  console.log("Reviews:::", reviewsData)
  const movieCastData = movieCreditsQuery?.data?.cast
  const movieCrewData = movieCreditsQuery?.data?.crew
  const job = ["director", "producer"]
  const recommendations = useQuery(
    ["movie recommendations", movieId],
    () => fetchRecommendations(movieId),
    {
        retry: false,
    }
);
return(
  <>
     
  <h1 className="d-flex justify-content-center">Detail Page</h1>
  <Card>
  <div className="container">
  <div className="row" >
   <div className="col-sm-5"  > 
     <img  key={movieData?.id} style={{ width: '18rem' }} src={`https://image.tmdb.org/t/p/w500` + movieData?.poster_path} alt="" /></div>
    <div className="col-sm-6" > 
    <h3 >Movie Name: { movieData?.title }</h3>
    <h6>Overview: { movieData?.overview }</h6>
    <h6>Movie Released Date:{ movieData?.release_date}</h6>
    <h6 >Genre:{movieData?.genres.map(item => <span key={item?.id} >{item.name} </span>)}</h6>
      <h6>Cast:</h6>
  {
            movieCrewData?.filter(item => job.includes(item.job.toLowerCase())).map(item => <li key={item}> <strong>{item.job}</strong>: {item.name}</li>)
          }
    </div>
  </div>
</div>
    </Card>
    
  <Card>
    <h2>Film Cast:</h2>
    <Slider {...CastSliderSettings}>
    {
          movieCastData?.map(item => 
            
          <CastCard > <img key={item} width={"100"} height={"150"} src={item.profile_path === null ? `https://tigres.com.tr/wp-content/uploads/2016/11/orionthemes-placeholder-image-1.png` : `https://image.tmdb.org/t/p/w200${item?.profile_path}`} alt="" />
            <CastCardDescription>
              <h6>{item.name}</h6>
              <h6> {item.character}</h6>
             </CastCardDescription>
</CastCard>)
        }  
        </Slider>
 </Card>
 <div className='review-part'>
     <Card>    <h5>Reviews:</h5>
       <p>
            <span>{reviewsData?.results[0]?.author[0].toUpperCase()}</span>
          {
            reviewsData?.results[0]?.author
          }          
        </p> {
            reviewsData?.results[0]?.content?.slice(0, 300)
          }..
        </Card>
      </div>
      <div>
      <Slider {...CastSliderSettings}>
     {/*  <CastCard> */}   <h6>Recommendations:</h6>

       {
    recommendations?.data?.data?.results.map((item, index) =>
        <h5 key={index}>{item.original_title}</h5>
        
    )
}


{/* </CastCard> */}

</Slider>
      </div>
        
         
</>
   )         
 };
export default Detail; 

            
          
 
    

       
        


    
  
