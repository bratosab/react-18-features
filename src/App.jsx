import reactLogo from "./assets/react.svg";
import { Outlet, Link } from "react-router-dom";
import "./App.css";

function App() {
  console.log("App Component was re-rendered");

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React 18 features</h1>
      <nav>
          <ul>
            <li>
              <Link to={``}>State batching</Link>
            </li>
            <li>
              <Link to={`concurrency`}>Concurrency</Link>
            </li>
          </ul>
        </nav>
      <Outlet />
    </div>
  );
}

export default App;
