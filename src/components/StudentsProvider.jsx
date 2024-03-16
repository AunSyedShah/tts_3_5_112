import { useState } from 'react';
import { StudentsContext } from '../context/StudentsContext';


export default function StudentsProvider(props) {
    const [students, setStudents] = useState([
        {
            stud_id: 1,
            stud_name: "John Doe",
            stud_age: 20
        },
        {
            stud_id: 2,
            stud_name: "Jane Doe",
            stud_age: 21
        },
        {
            stud_id: 3,
            stud_name: "John Smith",
            stud_age: 22
        },
        {
            stud_id: 4,
            stud_name: "Jane Smith",
            stud_age: 23
        
        }
    ]); // step 2

    return (
        // step 3
        <StudentsContext.Provider value={{ students, setStudents }}>
            {props.children}
        </StudentsContext.Provider>
    );
}