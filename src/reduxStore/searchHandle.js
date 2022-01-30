
const SEARCH = "SEARCH"

export const searchHandler = (value) => ({
    type: SEARCH,
    payload: value
})

const searchReducer = (value = "", action) => {
    switch(action.type){
        case SEARCH:
            return action.payload
        default:
            return value
    }
}

export {searchReducer}