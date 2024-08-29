import React, { useEffect, useRef } from "react";

const TableauCluster: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    script.async = true;
    ref.current?.appendChild(script);
  }, []);

  return (
    <div
      ref={ref}
      className="tableauPlaceholder w-full h-full"
      id="viz1724881742769"
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
      <object
        className="tableauViz"
        style={{ display: "none", width: "100%", height: "100%" }}
      >
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
  );
};

export default TableauCluster;
