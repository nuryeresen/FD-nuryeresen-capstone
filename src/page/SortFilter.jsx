/*  import React from "react";
import {  useParams } from "react-router-dom";
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieGenres } from '../api';
import { getGenres } from '../reduxStore/getGenres';
import { CardOne } from "../styledComponents/Card";
import { ThirdButton } from "../styledComponents/Button";

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
 */
import {
  fetchSortFilter,
  fetchTopRatedPopular,
  fetchMovieGenres,
} from "../api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {Card} from "../styledComponents/Card";
import { Button } from "../styledComponents/Button";

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
        <h4>Genre filter</h4>
  <div className="row">
    <div className="col-sm-12">
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
    
    <h5> From:
      <input

        type="date"
        id="from_date"
        name="from_date"
        onChange={(e) => setStartDate(e.target.value)}
      /></h5>
     <h5> To: <input
        type="date"
        id="to_date"
        name="to_date"
        onChange={(e) => setEndDate(e.target.value)}
      /></h5>
</div>
        <h1>Sort filter</h1>

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
          <Card
            id={item.id}
            key={item.id}
            poster_path={item.poster_path}
            title={item.title}
            release_date={item.release_date}
            genresMovie={genres?.filter((genre) =>
              item?.genre_ids?.includes(genre.id)
            )}
          />
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