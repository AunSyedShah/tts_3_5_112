import { StudentCard } from "./StudentCard";
import { useStudents } from "../context/StudentsContext";

export default function StudentView() {
    const { students } = useStudents();
    return (
        students.map(
            function handler(student, index) {
                return (
                    <StudentCard student={student} key={index} />
                )
            }
        )
    )
}