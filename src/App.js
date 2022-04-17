import logo from "./logo.svg";
import "./App.css";
import StudentList from "./Components/StudentList";
import { StoreProvider } from "./Store/Store";
import { initialState, studentTableReducer } from "./Store/bookTableReducer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentDetails from "./Components/StudentDetails";

function App() {
  return (
    <div className="App">
      <StoreProvider initialState={initialState} reducer={studentTableReducer}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/studentDetails/:index" element={<StudentDetails />} />
          </Routes>
        </BrowserRouter>
      </StoreProvider>
    </div>
  );
}

export default App;
