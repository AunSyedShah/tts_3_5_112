import { Link } from "react-router-dom";
import { useStudents } from "../context/StudentsContext";

export function StudentCard(props) {
    const { student } = props;
    const { students, setStudents } = useStudents()
    function handleDelete(stud_id) {
        let temp = [];
        const std_length = students.length;
        for (let i = 0; i < std_length; i++) {
            if (students[i].stud_id != stud_id) {
                temp.push(students[i]);
            }
        }
        setStudents(temp);
    }
    return (
        <div className="card w-80 sm:w-96 bg-base-100 shadow-xl m-4">
            <div className="card-body">
                <h2 className="card-title">{student.stud_name}</h2>
                <p>Age: {student.stud_age}</p>
                <p>Student Id: {student.stud_id}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-error" onClick={function handler() { handleDelete(student.stud_id) }}>Delete</button>
                    <Link to={`/update/${student.stud_id}`} className="btn btn-warning">Update</Link>
                </div>
            </div>
        </div>
    )
}