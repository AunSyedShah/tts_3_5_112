export function AddStudent(props) {
    const { state: { students, setStudents } } = props;
    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const form_data = new FormData(form);
        const stud_name = form_data.get("stud_name");
        const stud_age = form_data.get("stud_age");
        const stud_id = form_data.get("stud_id");
        const student = { stud_name, stud_age, stud_id };

        let temp = [];
        for (let i = 0; i < students.length; i++) {
            if (students[i].stud_id == stud_id){
                alert("student id already exists")
            }
            else{
                temp.push(students[i]);
            }
        }
        temp.push(student);

        setStudents(temp);
    }
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Student Information</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="stud_name" className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
                    <input
                        type="text"
                        id="stud_name"
                        name="stud_name"
                        autoComplete="off"
                        className="form-input mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                    />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Add Student</button>
                </div>
            </form>
        </div>
    )
}