import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Animation from "../Animation/Animation";


const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Animation></Animation>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;