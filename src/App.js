import Category from './components/Category';
import Search from './components/Search';
import Page from './pages/Page';
import {BrowserRouter,Link} from 'react-router-dom'
import styled from "styled-components";
import { GiKnifeFork} from "react-icons/gi";
function App() {
  return (
<>
<BrowserRouter>
<Nav>
<GiKnifeFork/>
<Logo to={'/'}>deliciousss</Logo>
</Nav>
<Search/>
<Category/>
<Page/>
</BrowserRouter>
</>
  );
}
const Logo = styled(Link)`
    text-decoration: none;
     font-size: 1.5rem;
     font-weight: 500;
     font-family: "Lobster Two",cursive;
`
const Nav = styled.div`
 padding: 2rem 0rem;
 display: flex;
 justify-content: flex-start;
 align-items: center;
 svg{
     font-size: 2rem;
}
`
export default App;
