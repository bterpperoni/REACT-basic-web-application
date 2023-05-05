import Nav from "../components/nav/Nav";
import Button from "../components/button/Button";

const Home = () => {
    return (
        <>
        <Nav>
            <Button href="/" children="Home" className="btn-nav"></Button>
            <Button href="/structures" children="Structures" className="btn-nav"></Button>
        </Nav>
        <div>
            <h1>RULEBOOK MANAGER</h1>
            <h2>Welcome</h2>
        </div>
        </>
       
    );
    };

    export default Home;