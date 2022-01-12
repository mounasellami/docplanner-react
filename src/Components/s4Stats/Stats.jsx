import React from "react";
import "./Stats.css";

const Stats = () => {
 return (
    <section className="stats">
        <div className="col- col-stats-left">
          <div className="col-stats-left stats-introduction">
            <h1> The world's biggest<br/>healthcare platform </h1>
            <p>We work from 7 offices all over the world, bringing Docplanner<br/>Group to life in a dozen countries.</p>
          </div>
          <img className="col-stats-left logo-background" 
               src="logo.png" 
               alt="logo-background-star" />
        </div>

        <div className="col- col-stats-right ">
          <div>
            <div className="stats-card" style={{marginTop:"30px"}}>
              <div>
               <img scr="https://www.docplanner.com/img/flag.png"
                   srcSet="https://www.docplanner.com/img/flag.png 1x,
                           https://www.docplanner.com/img/flag@2x.png 2x"
               />
               <h3>Leader in 12 countries</h3>
               <p> Poland, Brazil, Mexico, Spain, Italy, Turkey, Colombia, Czech Republic, Portugal, Argentina, Peru and Chile</p>
             </div>
            </div>
            <div className="stats-card">
             <div>
               <img scr="https://www.docplanner.com/img/patients.png" 
                    srcSet="https://www.docplanner.com/img/patients.png 1x, 
                            https://www.docplanner.com/img/patients@2x.png 2x"
               />
               <h3>59 mln patients</h3>
               <p>visit our websites each month</p>
             </div>
            </div>
          </div>
          
          <div>
            <div className="stats-card" style={{marginTop: "0"}}>   
              <div>
               <img scr="https://www.docplanner.com/img/visits.png" 
                   srcSet="https://www.docplanner.com/img/visits.png 1x, 
                           https://www.docplanner.com/img/visits@2x.png 2x"
                />
               <h3>7 million appointments</h3>
               <p>booked last month</p>
             </div>
            </div>
            <div className="stats-card">
              <div>
               <img scr="https://www.docplanner.com/img/doctors.png" 
                    srcSet="https://www.docplanner.com/img/doctors.png 1x, 
                            https://www.docplanner.com/img/doctors@2x.png 2x"
                />
               <h3>109k active doctors</h3>
               <p>trust our solutions</p>
             </div>
            </div>
         </div>
        </div>
      </section>
 )
};
export default Stats;
