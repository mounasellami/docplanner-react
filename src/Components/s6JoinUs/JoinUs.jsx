import React from "react";
import "./JoinUs.css";

const JoinUs = () => {
   return (
    <section className = "join-us">
        <h1> Sounds interesting? Join us now!</h1>
        <a className="btn btn-Seeallcurrentopenings"
           href="https://www.docplanner.com/career" 
           target="_blank"> {/* blank: Open the linked doc in a new window or tab  */}
           See all current openings
        </a>
     </section>
   )
};
export default JoinUs;