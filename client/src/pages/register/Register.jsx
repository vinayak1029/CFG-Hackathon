import React, { useContext, useState, useRef } from "react";
import "./style.scss";
import { useHistory } from "react-router-dom";
import Person from "@material-ui/icons/Person";
import Email from "@material-ui/icons/Email";
import Lock from "@material-ui/icons/Lock";
import SchoolRounded from "@material-ui/icons/SchoolRounded";
import MenuBookRounded from "@material-ui/icons/MenuBookRounded";
import { AuthContext } from "../../context/authContext/AuthContext";
import { registerUser } from "../../context/authContext/apiCalls";
import background from "../../assets/Wave.png";
import sideimage from "../../assets/reg-side-img.svg";
import "./Registration.css"

const Register = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [course, setCourse] = useState("");
    const [semester, setSemester] = useState("");

    const { isFetching, dispatch } = useContext(AuthContext);

    const history = useHistory();

    const handleRegister = () => {
        if (!(fullname && email && password && course && semester)) {
            alert("Please fillup all fields");
        } else {
            registerUser({ fullname, email, password, course, semester }, dispatch);
        }
    };

    return (
        <div className="login-page">
            <div className="login-box">
                <div className="illustration-wrapper">
                    <img src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700" alt="Login" />
                </div>
                <form className="login-form" onSubmit={handleRegister}>
                    <h2>Register</h2>
                    <p>Enter your details</p>
                    <label>
                        <span>Name:</span>
                        <input
                            type="text"
                            name="fullname"
                            value={fullname}
                            placeholder="Your full name"
                            onChange={(e) => setFullname(e.target.value)}
                        />
                    </label>
                    <label>
                        <span>Email:</span>
                        <input
                            type="text"
                            name="email"
                            value={email}
                            placeholder="Your email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        <span>Password:</span>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <label>
                        <span>Course:</span>
                        <input
                            type="text"
                            name="course"
                            value={course}
                            placeholder="Your course"
                            onChange={(e) => setCourse(e.target.value)}
                        />
                    </label>
                    <label>
                        <span>Semester:</span>
                        <input
                            type="text"
                            name="semester"
                            value={semester}
                            placeholder="Your semester"
                            onChange={(e) => setSemester(e.target.value)}
                        />
                    </label>
                    <button className="btn">Register</button>
                    <a href="/login" style={{display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"underline"}}>or login</a>
                </form>
            </div>
        </div>
    );
};

export default Register;
