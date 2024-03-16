import { AddStudent } from "./components/AddStudent";
import StudentView from "./components/StudentView";
import { useStudents } from "./context/StudentsContext";
import StudentRegisteration from "./components/StudentRegisteration";

export default function App() {
  const { students } = useStudents();
  return (
    <div>
      <AddStudent />
      <div className="flex flex-wrap justify-center">
        {
          students.length > 0 ? <StudentView /> : <h1>No Data Found</h1>
        }
      </div>
    </div>
  )
}
