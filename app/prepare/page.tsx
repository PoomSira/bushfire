"use client";

import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import BushfireAreaMap from "../components/BushfireAreaMap";
import TableauViz from "../components/TableauViz";

const page = () => {
  return (
    <div>
      <main className="h-[70vh] w-full bg-[url('/home-landing.webp')] bg-center bg-cover bg-no-repeat">
        <Navigation />
        <Hero />
      </main>
      <div className="w-3/4">
        <BushfireAreaMap />
        <TableauViz />
      </div>
    </div>
  );
};

export default page;
