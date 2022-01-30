import { createContext, useState } from "react";


const SearchContext = createContext();
function SearchContextProvider(props) {

    const [searchValue, setSearchValue] = useState('')

    return (
        <SearchContext.Provider value={{searchValue, setSearchValue}}>
            {props.children}
        </SearchContext.Provider>
    )
}

export {SearchContext, SearchContextProvider}