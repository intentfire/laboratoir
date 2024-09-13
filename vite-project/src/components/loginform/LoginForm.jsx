import { FaUser, FaLock} from "react-icons/fa";
import './LoginForm.css';

const LoginForm = () =>{
    return(
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                <FaUser className="icon"/>
                    <input type="text" placeholder="Username" required />
                </div>
                <div className="input-box">
                <FaLock className="icon"/> 
                <input type="password" placeholder="Password" required   />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm