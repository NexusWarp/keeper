import React from "react";
let currentDate = new Date();
let year = currentDate.getFullYear();
function Footer(){
    return <footer>
        <p>Copyright {year}</p>
    </footer>
}
export default Footer;