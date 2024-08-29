/* eslint-disable react/no-unescaped-entities */

import React, { useState } from "react";
import TableauViz from "./TableauViz";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

interface IconProps {
  id: number;
  open: number;
}

function Icon({ id, open }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

interface Props {}

const EffectBushfire: React.FC<Props> = () => {
  const [open, setOpen] = useState<number>(0);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <div className="grid grid-cols-5 gap-6">
      {/* overflow-auto */}
      <div className="col-span-3 flex flex-col bg-[#FFFBF2] p-4 rounded-lg overflow-auto">
        <TableauViz />
      </div>
      <div className="col-span-2 flex flex-col bg-[#FFFBF2] p-4 rounded-lg">
        <p className="text-black text-5xl mx-auto">Bushfire effects data...</p>
        <Accordion
          open={open === 1}
          icon={<Icon id={1} open={open} />}
          className="font-fresca" // Assuming you have a class for the Fresca font in globals.css
        >
          <AccordionHeader onClick={() => handleOpen(1)}>
            <p className="text-center px-2 font-fresca">
              What do you is you observation on the evolution of bushfires from
              1943 to 2023?
            </p>
          </AccordionHeader>
          <AccordionBody>
            <p className="text-lg text-center px-2 font-fresca">
              For the last 80 years, there are more and more bushfires occur in
              not just State of Victoria, but also whole Australia. If have been
              affected both human and animals.
            </p>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 2}
          icon={<Icon id={2} open={open} />}
          className="font-fresca" // Assuming you have a class for the Fresca font in globals.css
        >
          <AccordionHeader onClick={() => handleOpen(2)}>
            <p className="text-center px-2 font-fresca">
              Which period had the most bushfires according to the graph?
            </p>
          </AccordionHeader>
          <AccordionBody>
            <p className="text-lg text-center px-2 font-fresca">
              The period around 2019 to 2020 had the most bushfires.
            </p>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 3}
          icon={<Icon id={3} open={open} />}
          className="font-fresca" // Assuming you have a class for the Fresca font in globals.css
        >
          <AccordionHeader onClick={() => handleOpen(3)}>
            <p className="text-center px-2 font-fresca">
              What year had the highest number of bushfires according to the
              graph?
            </p>
          </AccordionHeader>
          <AccordionBody>
            <p className="text-lg px-2 font-fresca">
              The year with the highest number of bushfires was around 2019.
            </p>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 4}
          icon={<Icon id={4} open={open} />}
          className="font-fresca" // Assuming you have a class for the Fresca font in globals.css
        >
          <AccordionHeader onClick={() => handleOpen(4)}>
            <p className="text-center px-2 font-fresca">
              How did the number of bushfires change between 1960 and 1970?
            </p>
          </AccordionHeader>
          <AccordionBody>
            <p className="text-lg text-center px-2 font-fresca">
              The number of bushfires increased between 1960 and 1970.
            </p>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 5}
          icon={<Icon id={5} open={open} />}
          className="font-fresca" // Assuming you have a class for the Fresca font in globals.css
        >
          <AccordionHeader onClick={() => handleOpen(5)}>
            <p className="text-center px-2 font-fresca">
              Around what year did the number of bushfires first start to rise
              significantly?
            </p>
          </AccordionHeader>
          <AccordionBody>
            <p className="text-lg text-center  px-2 font-fresca">
              The number of bushfires first started to rise significantly around
              1960.
            </p>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 6}
          icon={<Icon id={6} open={open} />}
          className="font-fresca" // Assuming you have a class for the Fresca font in globals.css
        >
          <AccordionHeader onClick={() => handleOpen(6)}>
            <p className="text-center px-2 font-fresca">
              How many bushfires were there in the early 2000s compared to the
              1980s?
            </p>
          </AccordionHeader>
          <AccordionBody>
            <p className="text-lg text-center  px-2 font-fresca">
              There were more bushfires in the early 2000s than in the 1980s.
            </p>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 7}
          icon={<Icon id={7} open={open} />}
          className="font-fresca" // Assuming you have a class for the Fresca font in globals.css
        >
          <AccordionHeader onClick={() => handleOpen(7)}>
            <p className="text-center px-2 font-fresca">
              What can you say about the trend of bushfires after 2010?
            </p>
          </AccordionHeader>
          <AccordionBody>
            <p className="text-lg text-center  px-2 font-fresca">
              The trend shows that bushfires increased sharply after 2010.
            </p>
          </AccordionBody>
        </Accordion>

        {/* <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            How to use Material Tailwind?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            What can I do with Material Tailwind?
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion> */}
      </div>
    </div>
  );
};

export default EffectBushfire;
