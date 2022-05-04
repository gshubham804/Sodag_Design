import React from "react";
import "./Know.css";


const Know = () => {
  return (
    <>
      <div className="know-main-container">
        <div className="know-main-wrapper">
          <div className="know-text">
            <h1>Did you know?</h1>
            <p>Several of our lifestyle choices may be triggering heartburn.</p>
            <p>Smoking may weaken the oesophageal sphincter.<br/>
                Besides being bad for our lungs, cigarettes bring about a host of<br/>
                other problems. This includes problems in the GI system.  
            </p>
            <p>Another factor that has a strong association with having acidity problems<br/>
                is being overweight. Losing weight doesn't only have to be for aesthetic<br/>
                purposes. It could also improve your<br/>
                general health and wellbeing.
            </p>
            <p>
                Also, many people find stress, or a lack of sleep can trigger<br/>
                their acidity symptoms or make them worse.
            </p>
          </div>
        </div>
        <div className="know-image">
              <div className="know-img-wrapper">
                  <div className="know-img"></div>
              </div>
          </div>
      </div>
    </>
  );
};

export default Know;

