import './AdminLogInForm.css';
import {Formik} from "formik";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebase from "../../../firebase";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const AdminLogInForm = () => {

    const navigate = useNavigate();
    const [error, setError] = useState(null);

    return (
        <section className="admin-log-in-form">
            <h2 className="admin-log-in-form__title">
                Sign In
            </h2>
            <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            onSubmit={({email, password}, {resetForm}) => {
                const auth = getAuth(firebase);
                signInWithEmailAndPassword(auth, email, password)
                    .then(() => {
                        navigate('/admin/editor', {replace: true})
                    })
                    .catch((error) => {
                        setError( error.message);
                    });
                resetForm();
            }}>
                {
                    ({values,
                     handleSubmit,
                     handleChange,
                     handleBlur}) => (
                        <form className="admin-log-in-form__form"
                              onSubmit={handleSubmit}>
                            <input
                                placeholder="Login"
                                name="email"
                                value={values.login}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="admin-log-in-form__input"
                                type="email"/>
                            <input
                                placeholder="Password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="admin-log-in-form__input"
                                type="text"/>
                            <button
                                className="button-primary admin-log-in-form__button"
                                type="submit">
                                Submit
                            </button>
                        </form>
                    )
                }
            </Formik>
            <div className="text-big">
                {error}
            </div>
        </section>
    );
};

export default AdminLogInForm;