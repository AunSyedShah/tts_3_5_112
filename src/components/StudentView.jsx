import { StudentCard } from "./StudentCard";

export default function StudentView(props) {
    const { state } = props;
    const { students } = state
    return (
        students.map(
            function handler(student, index) {
                return (
                    <StudentCard student={student} key={index} state={state} />
                )
            }
        )
    )
}