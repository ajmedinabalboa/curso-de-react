
const OpenLink = ({redirectURL, logoIMG, altDescription}) => {
    return (
        <>
            <a href={redirectURL} target="_blank">
                <img src={logoIMG} className="logo" alt={`${altDescription} logo`} />
                </a>         
        </>
    );
};

export default OpenLink;