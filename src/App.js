import "./App.css";
import { Routes,Route } from "react-router-dom";
import Home from "../../client/src/pages/Home";

function App() {
  return (
    <div className="w-screen min-h-screen bg-red font-inter flex flex-col">
       <Routes>
          <Route path="/" element={<Home/>}/>
       </Routes>
    </div>
  );
}

export default App;
