
import Body from '../Components/Home/Body.jsx'
import Footer from '../Components/Home/Footer.jsx'
import OpenLink from '../Components/Core/OpenLink.jsx';

import viteLogo from "../assets/vite.svg"
import reactLogo from "../assets/react.svg"
import githubLogo from "../assets/github.svg"
const Home = () => {
    return (
        <div>
            <OpenLink redirectURL="https://vite.dev" logoIMG={viteLogo} altDescription="VITE"/>
            <OpenLink redirectURL="https://react.dev" logoIMG={reactLogo} altDescription="REACT"/>
            <OpenLink redirectURL="https://github.com/ajmedinabalboa/curso-de-react" logoIMG={githubLogo} altDescription="GITHUB"/>
            <Body/>
            <Footer/>
        </div>        
    );
};

export default Home