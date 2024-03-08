import { AddStudent } from "./components/AddStudent";
import { useState } from "react";
import { students as students_array } from "./utils/students";
import StudentView from "./components/StudentView";
import Layout from "./components/Layout";

export default function App() {
  const [students, setStudents] = useState([]);
  console.log(students)

  return (
    <Layout>
      <AddStudent state={{ students, setStudents }} />
      <div className="flex flex-wrap justify-center">
        {
          students.length > 0 ? <StudentView state={{ students, setStudents }} /> : <h1>No Data Found</h1>
        }
      </div>
    </Layout>
  )
}
