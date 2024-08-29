import React, { useEffect } from "react";

const TableauCluster: React.FC = () => {
  useEffect(() => {
    const divElement = document.getElementById("viz1724881742769");
    const vizElement = divElement?.getElementsByTagName("object")[0];

    if (divElement && vizElement) {
      if (divElement.offsetWidth > 800) {
        vizElement.style.width = "1150px";
        vizElement.style.height = "677px";
      } else if (divElement.offsetWidth > 500) {
        vizElement.style.width = "1150px";
        vizElement.style.height = "677px";
      } else {
        vizElement.style.width = "100%";
        vizElement.style.height = "727px";
      }

      const scriptElement = document.createElement("script");
      scriptElement.src =
        "https://public.tableau.com/javascripts/api/viz_v1.js";
      vizElement.parentNode?.insertBefore(scriptElement, vizElement);
    }
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <div
        className="tableauPlaceholder col-span-2"
        id="viz1724881742769"
        style={{ position: "relative" }}
      >
        <noscript>
          <a href="#">
            <img
              alt="Dashboard2"
              src="https://public.tableau.com/static/images/Bu/Bushfire_Brigade_Insight2/Dashboard2/1_rss.png"
              style={{ border: "none" }}
            />
          </a>
        </noscript>
        <object className="tableauViz" style={{ display: "none" }}>
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param name="site_root" value="" />
          <param name="name" value="Bushfire_Brigade_Insight2/Dashboard2" />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https://public.tableau.com/static/images/Bu/Bushfire_Brigade_Insight2/Dashboard2/1.png"
          />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
          <param name="language" value="en-US" />
          <param name="filter" value="publish=yes" />
        </object>
      </div>
      <div className="flex justify-start">
        <div className="w-full text-right">
          <h2 className="text-2xl font-bold mb-4">
            Which areas are mostly at risk of bushfires?
          </h2>
          <p className="mb-4">Step1: Click on High Risk Bubble</p>
          <p className="mb-4">Step2: Hover over the largest bubble inside it</p>
          <h2 className="text-2xl font-bold mb-4">
            Did you find out which area has the most high risk schools?
          </h2>
          <p className="mb-4">
            Open box to find out: Yarra Ranges have 13 schools at high risk
          </p>
          <p className="mb-4">Step1: Click on Medium Risk Bubble</p>
          <p className="mb-4">
            Step2: Hover over the largest 2 bubbles inside it
          </p>
          <p className="mb-4">
            Find out which 2 areas have the most schools with medium risk?
          </p>
          <p className="mb-4">
            Open box to find out: Yarra Ranges and Greater Bendigo
          </p>
          <h2 className="text-2xl font-bold mb-4">Is your school here?</h2>
          <h2 className="text-2xl font-bold mb-4">
            If so time to become an BUSHFIRE SAFETY EXPERT!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TableauCluster;
