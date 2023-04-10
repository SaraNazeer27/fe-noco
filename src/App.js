import { BrowserRouter, Route, Routes } from "react-router-dom";
import Data from "./Pages/Data Type/Data";
import Appdata from "./Pages/App Data/Appdata";
import Privacy from "./Pages/Privacy/Privacy";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
    <Routes>
      <Route index element={<Data/>}/>
      <Route path="/Data Type" element={<Data/>} />
      <Route path="/App Data" element={<Appdata/>} />
      <Route path="/Privacy" element={<Privacy/>} />
     
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
