import React from "react";
import Introduction from "./s1Introduction/Introduction";
import Services from "./s2Services/Services";
import Partners from "./s3Partners/Partners";
import Stats from "./s4Stats/Stats";
import Cards from "./s5Cards/Cards";
import JoinUs from "./s6JoinUs/JoinUs";

const Main = () => {
    return (
      <div>
         <Introduction />
         <Services/>
         <Partners/>
         <Stats/>
         <Cards/>
         <JoinUs/>
    </div>
  )
};

export default Main;