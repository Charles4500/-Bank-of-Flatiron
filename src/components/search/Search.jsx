import { Input} from "@chakra-ui/react";
import React from "react";
import './search.css'
import { SearchIcon } from "@chakra-ui/icons";

function Search() {
  
  
  return (
    <div className="search">
<Input placeholder='Search  Your Recent Transactions' />
<SearchIcon/>
</div>

  );
}

export default Search;


