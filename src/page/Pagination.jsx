import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Card, Col } from "react-bootstrap";
import { useContext } from 'react';
import { SearchContext } from "../context/SearchContext"
import { useNavigate } from "react-router-dom";


function Pagination(props) {
  const [pageCount, setPageCount] = useState(0);
  const [q, setQ] = useState([]);
  const [offset, setOffset] = useState(0);
  const [movieData, setMovieData] = useState([]);
  const {searchValue, setSearchValue} = useContext(SearchContext)
  const navigate = useNavigate()
  useEffect(() => {
    setMovieData(movieData);
    setPageCount(Math.ceil(movieData.length / 3));
  }, [movieData]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    console.log(selectedPage * 3);
    setOffset(selectedPage * 3);
  };

  useEffect(()=> {
    
    (searchValue !== "" &&fetch(`https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=a75c039072f6f6025a9c53a11184882b`).then(response => response.json())
    .then(data => console.log(data))); 
}, [searchValue])

console.log("SEARCH::" ,searchValue)
console.log(movieData)
  return (
    <>
    <div className="d-flex justify-content-center">
   {movieData
            .filter((d) => d.name.toLowerCase().startsWith(q))
            .slice(offset, offset + 3)
            .map((data, k) => (
              <Col key={k} xs={12} md={4} lg={3}>
                <Card className="m-2">
                  <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>{data.id}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
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
     </div>
    </>
  );
}

export default Pagination;


