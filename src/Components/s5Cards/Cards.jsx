import React from "react";
import "./Cards.css";

const Cards = () => {
  return  (
    <section className="cards">
        <header className="cards-introduction">
          <h1>Improve the lives of millions. <br/> Change yours forever</h1>
          <p>More than 3200 team mates share our same vision, goals and passion.<br/> With offices in Warsaw, Barcelona, Istanbul, Rome, Bologna, Mexico City<br/> and Curitiba, our search for great talent never stops.</p>
        </header>
        <div className="offices-cards">

          <figure>
           <a className="card" 
              href="https://www.docplanner.com/career?&loc=poland#jobs-offers"
              target="_blank">  {/* blank: Open the linked doc in a new window or tab */}
              <img scr="https://www.docplanner.com/images/warsaw.png" 
                   srcSet="https://www.docplanner.com/images/warsaw.png 1x, 
                           https://www.docplanner.com/images/warsaw@2x.png 2x"
              />
              <figcaption className="desc-card"> 
                Warsaw
                <button className="btn btn-seeopenings">See openings</button>
              </figcaption>  
           </a>
          </figure>   

          <figure>
            <a className="card" 
               href="https://www.docplanner.com/career?&loc=spain#jobs-offers"
               target="_blank">  {/* blank: Open the linked doc in a new window or tab */}
               <img scr="https://www.docplanner.com/images/barcelona.png" 
                    srcSet="https://www.docplanner.com/images/barcelona.png 1x,
                            https://www.docplanner.com/images/barcelona@2x.png 2x"
               />
               <figcaption className="desc-card"> 
                 Barcelona
                 <button className="btn btn-seeopenings">See openings</button>
               </figcaption>  
            </a>
          </figure>   
          <figure>
            <a className="card" 
               href="https://www.docplanner.com/career?&loc=turkey#jobs-offers"
               target="_blank">  {/* blank: Open the linked doc in a new window or tab */}
               <img scr="https://www.docplanner.com/images/istanbul.png" 
                    srcSet="https://www.docplanner.com/images/istanbul.png 1x,
                            https://www.docplanner.com/images/istanbul@2x.png 2x"
               />
               <figcaption className="desc-card"> 
                 Istanbul
                 <button className="btn btn-seeopenings">See openings</button>
               </figcaption>  
            </a>
          </figure>   
          <figure>
            <a className="card" 
               href="https://www.docplanner.com/career?&loc=italy#jobs-offers"
               target="_blank">  {/* blank: Open the linked doc in a new window or tab */}
               <img scr="https://www.docplanner.com/images/rome.png" 
                    srcSet="https://www.docplanner.com/images/rome.png 1x, 
                            https://www.docplanner.com/images/rome@2x.png 2x"
               />
               <figcaption className="desc-card"> 
                 Rome
                 <button className="btn btn-seeopenings">See openings</button>
               </figcaption>  
            </a>
          </figure>  
          <figure>
            <a className="card" 
               href="https://www.docplanner.com/career?&loc=italy#jobs-offers"
               target="_blank">  {/* blank: Open the linked doc in a new window or tab */}
               <img scr="https://www.docplanner.com/images/bologna.png" 
                    srcSet="https://www.docplanner.com/images/bologna.png 1x, 
                            https://www.docplanner.com/images/bologna@2x.png 2x"
               />
               <figcaption className="desc-card"> 
                 Bologna
                 <button className="btn btn-seeopenings">See openings</button>
               </figcaption>  
            </a>
          </figure> 
          <figure>
            <a className="card" 
               href="https://www.docplanner.com/career?&loc=brazil#jobs-offers"
               target="_blank">  {/* blank: Open the linked doc in a new window or tab */}
               <img scr="https://www.docplanner.com/images/curitiba.png" 
                    srcSet="https://www.docplanner.com/images/curitiba.png 1x, 
                            https://www.docplanner.com/images/curitiba@2x.png 2x"
               />
               <figcaption className="desc-card"> 
                 Curitiba
                 <button className="btn btn-seeopenings">See openings</button>
               </figcaption>  
            </a>
          </figure> 
          <figure>
            <a className="card" 
               href="https://www.docplanner.com/career?&loc=mexico#jobs-offers"
               target="_blank"> {/* blank: Open the linked doc in a new window or tab  */}
               <img scr="https://www.docplanner.com/images/mexico-city.png" 
                    srcSet="https://www.docplanner.com/images/mexico-city.png 1x, 
                            https://www.docplanner.com/images/mexico-city@2x.png 2x"
               />
               <figcaption className="desc-card"> 
                 Mexico
                 <button className="btn btn-seeopenings">See openings</button>
               </figcaption>  
            </a>
          </figure>   
        </div>
      </section>
 )
};
export default Cards;