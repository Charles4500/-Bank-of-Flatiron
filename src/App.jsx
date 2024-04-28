import Search from "./components/search/Search";
import Content from "./components/content/Content";
import { Container } from '@chakra-ui/react'



function App() {
  return(
  <Container>
 <h2 id="header">The Royal Bank of Flatiron</h2>
    <Search />
    <Content/>
    </Container>
 )
}

export default App;



 




