import './App.css';
import Page from './components/Page';
import { ThemeContextProvider } from "./components/ThemeContextProvider"

function App() {


  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>

    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>   <div>
    <>
      <ThemeContextProvider>
        <Page />
      </ThemeContextProvider>
    </>
    // <Button variant="danger">Click Me!</Button>

    //   </header>

    // </div>
  );
}

export default App;
