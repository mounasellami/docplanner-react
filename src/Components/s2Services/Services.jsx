import React from "react";
import "./Services.css";

const Services = () => {
 return( 
   <section className="services" >
        <div className="service-card service-card-patients">
          <img className="service-card-image"
               src="https://www.docplanner.com/icons/icon-patients.svg"
               alt="image For patients" 
          />
          <h1 className="service-card-for">For patients</h1>
          <h2 className="service-card-text">Find a doctor, book a visit and solve any health-related doubt</h2>
          <div className="service-card-content">
            <select className="service-card-select">
              <option className= "service-card-select-choose" value="">Choose country</option>
              <option value="">Argentina</option>
              <option value="">Brazil</option>
              <option value="">Chile</option>
              <option value="">Colombia</option>
              <option value="">Czech</option>
              <option value="">Italy</option>
              <option value="">Mexico</option>
              <option value="">Peru</option>
              <option value="">Poland</option>
              <option value="">Portugal</option>
              <option value="">Spain</option>
              <option value="">Tunisia</option>
              <option value="">Turkey</option>
            </select>
          </div>
        </div>

        <div className="service-card service-card-doctors">
          <img src="https://www.docplanner.com/icons/icon-doctors.svg" 
               className="service-card-image"
               alt="image For doctors"
            />
          <h1 className="service-card-for">For doctors</h1>      
          <h2 className="service-card-text">Save time managing visits and cut no-shows by half</h2>
          <div className="service-card-content">
            <select className="service-card-select" name="" id="">
              <option className= "service-card-select-choose" value="">Choose country</option>
              <option value="">Argentina</option>
              <option value="">Brazil</option>
              <option value="">Chile</option>
              <option value="">Colombia</option>
              <option value="">Czech</option>
              <option value="">Italy</option>
              <option value="">Mexico</option>
              <option value="">Peru</option>
              <option value="">Poland</option>
              <option value="">Portugal</option>
              <option value="">Spain</option>
              <option value="">Tunisia</option>
              <option value="">Turkey</option>
            </select>
          </div>
        </div>

        <div className="service-card service-card-clinics">
          <img className="service-card-image"
               src="https://www.docplanner.com/icons/icon-clinics.svg"
               alt="image For clinics" 
            />
          <h1 className="service-card-for">For clinics</h1>
          <h2 className="service-card-text clinic">Deliver an exceptional patient experience in your clinic</h2>
          <div className="service-card-content">
            <select className="service-card-select 2-to-20" name="" id="">
              <option className= "service-card-select-choose" value="">2 to 20 specialists</option>
              <option value="">Brazil</option>
              <option value="">Czech</option>
              <option value="">Italy</option>
              <option value="">Mexico</option>
              <option value="">Poland</option>
              <option value="">Spain</option>
              <option value="">Turkey</option>
            </select>
            <select className="service-card-select more-than-20" name="" id="">
              <option className= "service-card-select-choose" value="">More than 20 specialists</option>
              <option value="">Brazil</option>
              <option value="">Italy</option>
              <option value="">Mexico</option>
              <option value="">Poland</option>
              <option value="">Spain</option>
              <option value="">Tunisia</option>
            </select>
          </div>
        </div>

    </section>
 )
};


export default Services;