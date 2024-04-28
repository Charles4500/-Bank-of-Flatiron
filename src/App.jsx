import Search from "./components/search/Search";
import Content from "./components/content/Content";
import { Box, Heading } from "@chakra-ui/react";




function App() {
  return(
  <>
  <Box className="body">
    <Heading className="header">The Royal Bank of Flatiron</Heading>
 
    <Search />

  
    <Content/>
    
    </Box> 
    </>
 )
}

export default App;



 




