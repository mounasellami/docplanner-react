import React from 'react';
import './Introduction.css';

const Introduction = () => {
  return(
   <section className="introduction" >
        <img className="introduction-logo" 
             src="https://www.docplanner.com/img/sygnet.png" 
             srcSet="https://www.docplanner.com/img/sygnet.png 1x, 
                     https://www.docplanner.com/img/sygnet@2x.png 2x"
        />
        <h1 className="introduction-title">
          Making the healthcare experience more human
        </h1>
        <div className="introduction-pargraphs">
          <p className="col- col-L">We want patients to find the perfect doctor and book an <br/>appointment in the most easy way. The patient journey should be <br/>enjoyable, and that's why we are always next to them: to help them <br/>find the best possible care. Anytime, anywhere.</p>
          <p className="col- col-R">We also help doctors to better manage their practice and build their <br/>online reputation. With our integrated end-to-end solution, doctors <br/>are able not only to improve their online presence, but also to <br/>devote their time to what really matters: their patients.</p>
        </div>
   </section>
 )
};

export default Introduction;


