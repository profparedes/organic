const FooterLinks = ({title, links}) => {
    return(
        <div>
            <p className="fs-5 text-uppercase">{title}</p>
            <div className="fs-sm">
                {links.map((link) => <p key={link}>{link}</p>)}
            </div>
        </div>

)}

export default FooterLinks