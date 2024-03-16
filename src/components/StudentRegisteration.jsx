import { useFormik } from "formik";

export default function StudentRegistration() {

    const formik = useFormik(
        {
            initialValues: {
                username: "",
                email: "",
                password: "",
                confirmPassword: ""
            },
            onSubmit: function(values){
                console.log(values);
            }
        }
    );

    return (
        <div className="p-4">
            <form className="space-y-4" onSubmit={formik.handleSubmit}>
                {/* username, email, password and confirm password field */}
                <input type="text" placeholder="Enter your username" className="input input-bordered" value={formik.values.username} onChange={formik.handleChange} id="username" name="username"/>
                <input type="email" placeholder="Enter your email" className="input input-bordered" value={formik.values.email} onChange={formik.handleChange} id="email" name="email"/>
                <input type="password" placeholder="Enter your password" className="input input-bordered" value={formik.values.password} onChange={formik.handleChange} id="password" name="password"/>
                <input type="password" placeholder="Confirm your password" className="input input-bordered" value={formik.values.confirmPassword} onChange={formik.handleChange} id="confirmPassword" name="confirmPassword"/>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
}
