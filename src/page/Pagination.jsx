
//yorum
/* import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import { SearchContext } from "../context/SearchContext"
import { PaginationContext } from "../context/PaginationContext"
import { fetchMovies } from "../api"
import { useQuery } from "react-query";
import SearchSection from './SearchSection'

function Pagination(props) {
let pageCount 
    const { searchValue, setSearchValue } = useContext(SearchContext)
    const { selectedPage, perPage, handlePageClick } = useContext(PaginationContext)
    const { isLoading, isError, error, isFetched, isFetching, data, ...query } =
     
    console.log(data)
console.log("searchvalue:::", searchValue)
if(isFetched) {
    pageCount = Math.ceil(data?.length/perPage)
}
return (
<>
<SearchSection/>
  <div className='container'>
      <div className="row text-center">

          {
              data?.map((item) =>
              <div className="col" key={item?.id}>
                  <img src={`https://image.tmdb.org/t/p/w200`+ item?.poster_path} alt=""
                   />
                   </div>
                   ).slice(selectedPage, selectedPage + perPage )
          }
          {

              data?.length === 0 && <div className='alert alert-secondary fw-bold fs-3 col-6 mx-auto text-center py-5 mt-5' role="alert">No results found!</div>
          }
      </div>

      <ReactPaginate
              breakLabel="..."
              nextLabel=" >>"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel="<< "
              containerClassName={"list-unstyled d-flex align-items-center justify-content-center"}
              previousLinkClassName={"text-warning fw-bold text-decoration-none mx-2 fs-5"}
              nextLinkClassName={"text-warning fw-bold text-decoration-none mx-2 fs-5"}
              disabledLinkClassName={"text-muted"}
              pageLinkClassName={"text-decoration-none mx-1 btn btn-outline-secondary"}
              activeLinkClassName={"fw-bold btn-outline-warning"}
          />
  </div>

</>
)
}
export default Pagination */


import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

import { Card, Col } from "react-bootstrap";
import { useContext } from 'react';
import { SearchContext } from "../context/SearchContext"
import { useNavigate } from "react-router-dom";

function Paginate(props) {
  const [pageCount, setPageCount] = useState(0);
  const [q, setQ] = useState([]);
  const [offset, setOffset] = useState(0);
  const [movieData, setMovieData] = useState([]);
  const {searchValue, setSearchValue} = useContext(SearchContext)
  const navigate = useNavigate()
  useEffect(() => {
    setMovieData(movieData);
    setPageCount(Math.ceil(movieData.length / 10));
  }, [movieData]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    console.log(selectedPage * 10);
    setOffset(selectedPage * 10);
  };

  useEffect(()=> {
    
    (searchValue !== "" &&fetch(`https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=a75c039072f6f6025a9c53a11184882b`).then(response => response.json())
    .then(data => console.log(data))); 
}, [searchValue])
console.log(searchValue)

/* useEffect(() => {
  if (-----) {
    (navigate("/search"))
  }
}, [---, navigate]) */
  return (
    <>
   
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        subContainerClassName={"pages pagination"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
       {movieData
            .filter((d) => d.name.toLowerCase().startsWith(q))
            .slice(offset, offset + 10)
            .map((data, k) => (
              <Col key={k} xs={12} md={4} lg={3}>
                <Card className="m-2">
                 
                  <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>{data.first_brewed}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
    </>
  );
}

export default Paginate;

