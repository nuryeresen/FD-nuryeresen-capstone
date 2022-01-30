const LOAD_MORE_MOVIES = "LOAD_MORE_MOVIES"
const RESET_LOAD = "RESET_LOAD"

export const loadMoreMovies = () => ({
    type: LOAD_MORE_MOVIES,
    
})

export const resetLoad = () => ({
    type: RESET_LOAD
})

const loadMoreReducer = (pages = [1], action) => {
    switch(action.type) {
        case LOAD_MORE_MOVIES:
            return [...pages, pages[pages.length-1]+1]
        case RESET_LOAD:
            return [1]
        default:
            return pages
    }
}

export {loadMoreReducer}