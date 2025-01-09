import githubLogo from "../../assets/github.svg"
const Github = () => {
    return (
        <div>
            <a href="https://github.com/ajmedinabalboa/curso-de-react" target="_blank">
                <img src={githubLogo} className="logo" alt="Vite logo" />
                </a>         
        </div>
    );
};

export default Github;