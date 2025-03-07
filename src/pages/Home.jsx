import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div class="container">
              <div class="home-box">
            <h1>Welcome to Our App</h1>
            <p>This is the home page. Please login or register to continue.</p>
            <div>
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/register" style={{ marginLeft: "10px" }}>
                    <button>Register</button>
                </Link>
            </div>
        </div>
        </div>
    );
};

export default Home;
