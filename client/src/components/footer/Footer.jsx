import React from "react";
import "./footer.css";

function Footer()
{
    const currentYear = new Date().getFullYear();
    return <p className="footercss">
        Copyright © {currentYear}
    </p>;
}
export default Footer;
