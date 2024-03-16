import { useParams, useNavigate } from "react-router-dom"
import { useStudents } from "../context/StudentsContext";
import { useFormik } from "formik";

export default function Update() {
    const navigate = useNavigate();
    const { stud_id } = useParams();
    const { students, setStudents } = useStudents();
    const { stud_name, stud_age } = students.find(
        function (value) {
            return value.stud_id == stud_id;
        }
    )

    const formik = useFormik(
        {
            initialValues: {
                stud_name, stud_age
            },
            onSubmit: function handler(values) {
                // const newStudents = students.map(
                //     function (student) {
                //         if (student.stud_id == stud_id) {
                //             return { ...student, ...values }
                //         }
                //         return student
                //     }
                // );
                // setStudents(newStudents);
                // find the index of the student with the given stud_id
                const index = students.findIndex(
                    function (student) {
                        return student.stud_id == stud_id;
                    }
                );
                // update the student at the found index but not stud_id
                students[index] = {
                    stud_id:stud_id,
                    stud_name: values.stud_name,
                    stud_age: values.stud_age
                };
                // update the students state
                setStudents(students);
                navigate("/")
            }
        }
    );

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-slate-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Student Information</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="stud_name" className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
                    <input
                        type="text"
                        id="stud_name"
                        name="stud_name"
                        autoComplete="off"
                        className="form-input mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        value={formik.values.stud_name}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="stud_age" className="block text-sm font-medium text-gray-700 mb-1">Student Age</label>
                    <input
                        type="number"
                        id="stud_age"
                        name="stud_age"
                        autoComplete="off"
                        className="form-input mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        value={formik.values.stud_age}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="stud_id" className="block text-sm font-medium text-gray-700 mb-1">Student ID</label>
                    <input
                        type="text"
                        id="stud_id"
                        name="stud_id"
                        autoComplete="off"
                        className="form-input mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        value={stud_id}
                        disabled
                    />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Update Record</button>
                </div>
            </form>
        </div>
    )
}