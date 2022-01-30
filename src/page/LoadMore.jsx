import React, { useState, useEffect } from 'react'
function LoadMore(props){
    const perPage = 4;
    const [totalPages, setTotalPages] = useState(1);
    const [page, setPage] = useState(1);

    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getUserList = () => {
          setLoading(true);
          fetch(`https://reqres.in/api/users?per_page=${perPage}&page=${page}`)
            .then(res => res.json())
            .then(res => {
              setTotalPages(res.total_pages);
              setUserList([...userList, ...res.data]);
              setLoading(false);
            });
        }
        getUserList();
      }, [page]);
      return (
        <>
        <div className="container">
         
             {/* {userList.map((x, i) => {
               return <div key={i} className="box">
       
                 <div className="name">{x.first_name} {x.last_name}</div>
                 <div className="email">{x.email}</div>
               </div>
             })} */}
       
       
             <div className="clearfix"></div>
             {totalPages !== page && <button className="btn-load-more" onClick={() => setPage(page + 1)}>
                 {loading 
             ? 'Loading...' 
             : 'Load More Movies'}
             </button>}
           </div>
        </>
        )
       }
       
       export default LoadMore