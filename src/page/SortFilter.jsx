import {
  fetchSortFilter,
  fetchTopRatedPopular,
  fetchMovieGenres,
} from "../api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CardOne} from "../styledComponents/Card";
import { Button } from "../styledComponents/Button";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const SortFilter = () => {
  const type = useParams().type;
  const location = useLocation();
  const [genres, setGenres] = useState([]);
  const [sortValue, setSortValue] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [page, setPage] = useState(1);
  const [filterData, setFilterData] = useState({
    page: page,
    results: [],
    total_pages: 0,
    total_results: 0,
  });

  const getFilterData = (pageParam = page) => {
    fetchSortFilter(
      pageParam,
      sortValue,
      startDate,
      endDate,
      selectedGenre
    ).then((response) => {
      const data = response.data;
      if (pageParam !== 1) {
        data.results = [...filterData.results, ...data.results];
      }
      setFilterData(data);
    });
  };

  const getPopularData = () => {
    fetchTopRatedPopular(type, page).then((response) => {
      const data = response.data;
      setFilterData(data);
    });
  };

  useEffect(() => {
    getFilterData(1);
  }, [sortValue, startDate, endDate, selectedGenre, location]);

  useEffect(() => {
    fetchMovieGenres().then((response) => {
      setGenres(response.data.genres);
    });
    getPopularData();
  }, []);

  useEffect(() => {
    getFilterData();
  }, [page]);

  useEffect(() => {
    getPopularData();
  }, [type]);

  return (
    <>
      <div className="container">
      <div className="row">
    <div className="col-sm-12">
    <h4 className="d-flex justify-content-center">Genre filter</h4>
      <select
        className="form-select"
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        {genres.map((genre) => (
          <option key={genre.id}  defaultValue={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    
    <h5 className="d-flex justify-content-center"> From:
      <input

        type="date"
        id="from_date"
        name="from_date"
        onChange={(e) => setStartDate(e.target.value)}
      /></h5>
     <h5 className="d-flex justify-content-center"> To: <input
        type="date"
        id="to_date"
        name="to_date"
        onChange={(e) => setEndDate(e.target.value)}
      /></h5>
</div>
        <h4 className="d-flex justify-content-center">Sort filter</h4>

    <div className="col-sm-12">
    
   <select className="form-select" aria-label="Default select example" onChange={(e) => setSortValue(e.target.value)}>
  <option defaultValue="DEFAULT" >Sort By</option>
  <option defaultValue="original_title.asc">A-->Z</option>
  <option defaultValue="2">Z-->A</option>
  <option defaultValue="3">Most Populars</option>
  <option defaultValue="4">Least Populars</option>
  <option defaultValue="5">Newest Released</option>
  <option defaultValue="6">Oldest Released</option>
</select>

    
      <div className="d-flex flex-wrap ">
        {filterData?.results?.map((item) => (
        <div key={item.id}  className="col-sm ">
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
    </Card.Text>
  </Card.Body>
</Card>
  
</Link>  
</div> 
        ))}
      </div> 

      {filterData.page < filterData.total_pages && (
        <div className="d-flex justify-content-center">
          <Button
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Load More
          </Button>
        </div>
      )}  </div>  </div></div>
    </>
  );
};

export default SortFilter;