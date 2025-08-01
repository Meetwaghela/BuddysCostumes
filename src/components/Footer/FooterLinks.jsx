import { links } from "express/lib/response";
import React from "react";

const FooterLinks = ({ links}) => {
    console.log("FooterLinks", links);
    return(
        <>
        {links.map((link) => (
            <li key={link.name} className="cursor-pointer transition-all duration-300 hover:traslate-x-[2px]">
                <a href = "">{link.name}</a>
            </li>
        ))}
        </>
    )
}

export default FooterLinks;