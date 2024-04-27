import React,{useEffect,useState} from "react";
import Body from "./components/body/Body";
import Content from "./components/content/Content";

import Search from "./components/search/Search";



function App() {
  const [Transaction, setTransaction] = useState([])
  const [query, setQuery] = useState("")
  useEffect(() => {
    fetch("http://localhost:3000/transactions?q=" + query)
      .then((resp) => resp.json())
      .then(Transaction => setTransaction(Transaction))
  }, [query])
  function handleSearch(e) {
    setQuery(e.target.value)
  }

  return(
  <>
 
 {/* <Header /> */}
 <Search handleSearch={handleSearch}/>
 <Content/>
 <Body transactions={Transaction}/>

 
  </>
 )
}

export default App;
