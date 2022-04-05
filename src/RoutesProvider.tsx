import { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppWrapper from "./AppWrapper";
import Home from "./home/Home";
import Task1 from "./task-1/Task1";
import Task2 from "./task-2/Task2";
import Task3 from "./task-3/Task3";

export default function RoutesProvider(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppWrapper />}>
          <Route index element={<Home />} />
          <Route path='task-1' element={<Task1 />} />
          <Route path='task-2' element={<Task2 />} />
          <Route path='task-3' element={<Task3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
