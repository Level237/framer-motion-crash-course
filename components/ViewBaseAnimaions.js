import React, { useEffect, useRef } from "react";


const ViewBasedAnimations = () => {




  return (
    <>
      <div style={{ height: "150vh" }} />
    
      <div
        ref={ref}
        style={{
          height: "100vh",
          background: isInView ? "blue" : "red",
          transition: "1s background",
        }}
      />
    </>
  );
};

export default ViewBasedAnimations;
