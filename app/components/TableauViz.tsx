import React, { useEffect } from "react";

const TableauViz: React.FC = () => {
  useEffect(() => {
    const divElement = document.getElementById("viz1724681896061");
    const vizElement = divElement?.getElementsByTagName("object")[0];

    if (divElement && vizElement) {
      if (divElement.offsetWidth > 800) {
        vizElement.style.width = "1000px";
        vizElement.style.height = "827px";
      } else if (divElement.offsetWidth > 500) {
        vizElement.style.width = "1000px";
        vizElement.style.height = "827px";
      } else {
        vizElement.style.width = "100%";
        vizElement.style.height = "827px";
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
        id="viz1724681896061"
        style={{ position: "relative", maxWidth: "1000px" }}
      >
        <noscript>
          <a href="#">
            <img
              alt="Dashboard 1"
              src="https://public.tableau.com/static/images/Bu/Bushfire_Brigade_TimeMap/Dashboard1/1_rss.png"
              style={{ border: "none" }}
            />
          </a>
        </noscript>
        <object className="tableauViz" style={{ display: "none" }}>
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param name="site_root" value="" />
          <param name="name" value="Bushfire_Brigade_TimeMap/Dashboard1" />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https://public.tableau.com/static/images/Bu/Bushfire_Brigade_TimeMap/Dashboard1/1.png"
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

      <div className="w-ful text-right">
        <h2 className="text-2xl font-bold mb-4">Let's Get Started!</h2>
        <p className="mb-4">Step 1: Go to the Bushfire Year Box and click ▶</p>
        <p className="mb-4">
          Watch the years pass by and see how the fires have changed.
        </p>
        <p className="font-semibold">
          Answer: Bushfires have been getting worse over the years because the
          climate is getting hotter and drier. This makes it easier for fires to
          start and spread.
        </p>
      </div>
    </div>
  );
};

export default TableauViz;
