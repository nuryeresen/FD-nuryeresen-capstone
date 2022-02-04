import React from "react";
import { Link } from "react-router-dom";
import { useState} from "react";
import { useQueries } from 'react-query';
import { useSelector } from 'react-redux';
import { fetchSingleMovie } from '../api';
import { useDispatch } from 'react-redux';
import { addFavList, addSeenList } from '../reduxStore/userInit';
import {MdFavorite} from "react-icons/md"
import {BsSearch} from "react-icons/bs"
import {FaTwitter} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"

const Profile = (props) => {
  function favTutorial() {
    var mylist = document.getElementById("myList");
    document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;
    }
    const dispatch = useDispatch()
    const {user} = useSelector(state=> state)
   
   const [state, setState] = useState([])
    
   
    const allFilms = user?.favoritesList?.favoritesFilms?.concat(user?.seenList?.seenFilms)
  const reducedAllFilms = allFilms?.filter((item, index) => allFilms?.indexOf(item) === index)
    console.log("ALL:::", allFilms)
    console.log("ALL:::", reducedAllFilms)

    const movies = useQueries(
      reducedAllFilms?.map(movieId => {
        return {
          queryKey: ["movies", movieId],
          queryFn: () => fetchSingleMovie(movieId),
          retry: false,
          select: state => state?.data
        }
      }))
      const data = movies?.map(item => item?.data).map(item => ({...item, genres: [item?.genres?.map(item => item.name)].toString()}))

      console.log("DATA:::",data)
      console.log("MOVIES:::",movies)
     
      const columns = [
        {
          title: 'Film ID',
          dataIndex: 'id',
          key: 'id',
          width: 150,
        },
        {
          title: 'Film Title',
          dataIndex: 'title',
          key: 'title',
          width: 150,
        },
        {
          title: 'Film Genre',
          dataIndex: 'genres',
          key: 'genres',
          width: 200,
        },
        {
          title: 'Icon Actions',
          dataIndex: '',
          key: 'operations',
          render: (movie) => (
            user.userLogin && <div>
            <MdFavorite loc={"table"} isFav={user?.favoritesList?.favoritesFilms?.includes(movie.id)}
                onClick={() => dispatch(addFavList(movie.id))} />
            <BsSearch loc={"table"} isSeen={user?.seenList?.seenFilms?.includes(movie.id)}
                onClick={() => dispatch(addSeenList(movie.id))} />
        </div>
        )
        },
      ];
      console.log(columns)
      console.log(state)
      console.log(setState)
  return (
    <>
      <h1>Profile</h1>
 <div className="container">
  <div className="row">

    <div className="col-4"> <img width={"200px"} src={user.avatarUrl} alt="" />
      <p className="username"> {user.username.toUpperCase()} </p>
            <p className="join-date"> {user.joinDate} </p>
            <ul className='list'>
              <li>  <span className='movie-counts'>{user.seenList.totalCount}</span> Seen Movies</li>
              <li>  <span className='movie-counts'>{user.favoritesList.totalCount}</span> Favorites Movies</li>
            </ul>
              <Link to={user.socials.instagram}>
       <FiInstagram  /> 
              </Link>
              <Link to={user.socials.twitter}>
                <FaTwitter  /> 
              </Link></div>
    <div className="col-sm-8"><form>
<h3 > Filter By </h3>
<select id = "myList" onChange = {favTutorial} >
<option> Closest release date</option>
<option> Favorites </option>
<option> Seenlist </option>
</select>
</form>
<table className="table mt-2" data={data}>
<thead>
<tr>
  <th className="text-muted" scope="col"><h3>Film Id</h3></th>
  <th className="text-muted" scope="col"><h3>Film Title</h3></th>
  <th className="text-muted" scope="col"><h3>Film Genre</h3></th>
  <th className="text-muted" scope="col"><h3>Icons Actions</h3></th>
</tr>
</thead>

<tbody >


</tbody>
</table></div>
  </div>
</div>
    </>
  );
};

export default Profile;

    
 


