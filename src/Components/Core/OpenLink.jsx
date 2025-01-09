
const OpenLink = ({redirectURL, logoIMG, altDescription}) => {
    return (
        <div>
            <a href={redirectURL} target="_blank">
                <img src={logoIMG} className="logo" alt={`${altDescription} logo`} />
                </a>         
        </div>
    );
};

export default OpenLink;