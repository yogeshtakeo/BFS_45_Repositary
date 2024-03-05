import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import TaskForm from "./components/TaskForm/TaskForm";

function App() {
  const [todoLists, updateList] = useState([]);

  return (
    <>
      <BrowserRouter>
        <>
          <Header />
          <div className="page">
            <Routes>
              <Route
                path="/"
                exact={true}
                element={
                  <TaskList todoLists={todoLists} updateList={updateList} />
                }
              />
              <Route
                path="/form"
                exact={true}
                element={
                  <TaskForm todoLists={todoLists} updateList={updateList} />
                }
              />
            </Routes>
          </div>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
