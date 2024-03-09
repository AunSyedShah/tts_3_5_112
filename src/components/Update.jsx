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
                alert("record updated successfully")
                setStudents([...students, { stud_id, stud_name, stud_age }])
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