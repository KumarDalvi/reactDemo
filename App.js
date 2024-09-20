import React from "react";
import Navbar from "./crud/Navbar";
import Table from "./crud/Table";
import Form from "./crud/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentForm from "./crud/StudentForm";
import StudResult from "./crud/StudResult";
import Navbar2 from "./crud/Navbar2";
import EmpReg from "./crud/EmpReg";
import Delete from "./crud/Delete";
import Edit from "./crud/Edit";
import EditData from "./crud/EditData";
function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/form" element={<Form></Form>}></Route>
          <Route path="/table" element={<Table></Table>}></Route>
          <Route path="/stud_form" element={<StudentForm></StudentForm>}></Route>
          <Route path="/stud_result" element={<StudResult></StudResult>}></Route>
          <Route path="/delete/:id" element={<Delete></Delete>}></Route>
          <Route path="/edit/:id" element={<EditData></EditData>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
