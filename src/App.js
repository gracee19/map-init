import Navbar from "./components/NavBar";
import './App.css';
import ContainerBox from "./components/Container"
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div>
      <Wrapper>
      <Navbar/>
        <ContainerBox/>
      </Wrapper>
    </div>
  );
}

export default App;
