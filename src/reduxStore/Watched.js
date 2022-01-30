//ACTION TYPES

const ADD_WATCHEDMOVIE = "ADD_WATCHEDMOVIE";
const REMOVE_WATCHEDMOVIE = "REMOVE_WATCHEDMOVIE";

//ACTION CREATORS

const addWatchedMovie = (movieId) => ({
  type: ADD_WATCHEDMOVIE,
  payload: movieId,
});

const removeWatchedMovie = (movieId) => ({
  type: REMOVE_WATCHEDMOVIE,
  payload: movieId,
});

//REDUCER

const WatchedMovieReducer = (watched = [], action) => {
  switch (action.type) {
    case ADD_WATCHEDMOVIE:
      return [action.payload, ...watched];
    case REMOVE_WATCHEDMOVIE:
      return watched.filter((item) => item.id !== action.payload);
    default:
      return watched;
  }
};

export { addWatchedMovie, removeWatchedMovie, WatchedMovieReducer };