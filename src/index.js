// import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Pop from "./Workflow/Components/NewComponents/AddEvent/Pop";
// import Action from "./Workflow/Components/NewComponents/AddEvent/Action";
// import AddActionBar from "./Workflow/Components/NewComponents/AddEvent/AddActionBar";
// import Configure from "./Workflow/Components/NewComponents/AddEvent/GeneralConfiguration/Configure";
// import MultipleClick from "./Workflow/Components/NewComponents/AddEvent/GeneralConfiguration/MultipleClick";
// import NewFolder from "./Workflow/Components/NewComponents/AddEvent/GeneralConfiguration/NewFolder";
// import SavedPop from "./Workflow/Components/NewComponents/AddEvent/GeneralConfiguration/SavedPop";
// import ConfigMultipleClick from "./Workflow/Components/NewComponents/AddEvent/GeneralConfiguration/ConfigMultipleClick";
// import "./index.scss";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Pop />}>
//           <Route index element={<Action />} />
//           <Route path="addAction" element={<AddActionBar />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
