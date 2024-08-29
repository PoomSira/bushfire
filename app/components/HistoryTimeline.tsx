/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

type Props = {};

const HistoryTimeline = (props: Props) => {
  return (
    <div className="grid grid-cols-3 gap-6 bg-[#FFFBF2] p-4 rounded-lg">
      {/* Left Column with overflow-scroll */}
      <div className="col-span-2 flex flex-col overflow-y-scroll max-h-96">
        <div className="my-3">
          {/* Contents of the left column */}
          {/* 2019-20 Fire Season */}
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="font-caveat font-medium text-2xl text-orange-600 mb-1 sm:mb-0">
              2019-20 Fire Season
            </div>
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-orange-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-orange-600 bg-orange-200 rounded-full">
                2020
              </time>
              <div className="flex-none w-60 h-30">
                <Image
                  src="/timeline-1.png"
                  alt="Recover"
                  width={150}
                  height={150}
                  className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="text-xl flex-grow my-auto px-4 font-bold text-slate-900">
                In the 2019-20 fire season, Victoria faced huge fires, burning
                over 1.5 million hectares, destroying 420 homes, and harming
                wildlife. Five people died, and many areas were cut off.
              </div>
            </div>
          </div>

          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="font-caveat font-medium text-2xl text-orange-600 mb-1 sm:mb-0">
              Lancefield-Cobaw Croziers Track Burn
            </div>
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-orange-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-orange-600 bg-orange-200 rounded-full">
                2015
              </time>
              <div className="flex-none w-60 h-30">
                <Image
                  src="/timeline-2.png"
                  alt="Recover"
                  width={150}
                  height={150}
                  className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="text-xl flex-grow my-auto px-6 font-bold text-slate-900">
                A planned burn in 2015 got out of control, burning over 3,000
                hectares and destroying homes and fences, causing big problems
                for local communities.
              </div>
            </div>
          </div>

          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="font-caveat font-medium text-2xl text-orange-600 mb-1 sm:mb-0">
              Widespread Devastation and Loss Across Victoria
            </div>
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-orange-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-orange-600 bg-orange-200 rounded-full">
                2013
              </time>
              <div className="flex-none w-60 h-30">
                <Image
                  src="/timeline-3.png"
                  alt="Recover"
                  width={150}
                  height={150}
                  className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="text-xl flex-grow my-auto px-6 font-bold text-slate-900">
                In 2012–2013, Victoria had a big fire season. Over 190,000
                hectares burned, 46 houses were lost, and five people died,
                including four firefighters. Major fires included
                Aberfeldy-Donnellys Creek and Harrietville.
              </div>
            </div>
          </div>

          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="font-caveat font-medium text-2xl text-orange-600 mb-1 sm:mb-0">
              Australia's Deadliest and Most Devastating Firestorm
            </div>
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-orange-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-orange-600 bg-orange-200 rounded-full">
                2009
              </time>
              <div className="flex-none w-60 h-30">
                <Image
                  src="/timeline-4.png"
                  alt="Recover"
                  width={150}
                  height={150}
                  className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="text-xl flex-grow my-auto px-6 font-bold text-slate-900">
                The Black Saturday bushfires were Australia’s worst, killing 173
                people. The fires destroyed towns, 2,000 homes, 61 businesses,
                and burned over 430,000 hectares, including parks and farms.
              </div>
            </div>
          </div>

          {/* <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="font-caveat font-medium text-2xl text-orange-600 mb-1 sm:mb-0">
              A Season of Over 1,000 Fires and Devastating Losses
            </div>
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-orange-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-orange-600 bg-orange-200 rounded-full">
                2007
              </time>
              <div className="flex-none w-60 h-30">
                <Image
                  src="/learn.png"
                  alt="Recover"
                  width={150}
                  height={150}
                  className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="text-xl flex-grow my-auto px-6 font-bold text-slate-900">
                From December 2006 to March 2007, over 1,000 fires burned
                1,200,000 hectares in Victoria. The worst fires burned for 59
                days, destroying 51 houses and killing one person.
              </div>
            </div>
          </div>

          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="font-caveat font-medium text-2xl text-orange-600 mb-1 sm:mb-0">
              Devastating Fires Across Victoria with Heavy Losses
            </div>
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-orange-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-orange-600 bg-orange-200 rounded-full">
                2005
              </time>
              <div className="flex-none w-60 h-30">
                <Image
                  src="/learn.png"
                  alt="Recover"
                  width={150}
                  height={150}
                  className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="text-xl flex-grow my-auto px-6 font-bold text-slate-900">
                Between New Year's Eve and January 2006, over 500 fires burned
                160,000 hectares in Victoria, destroying 57 houses and killing
                four people. Over 64,000 animals were lost.
              </div>
            </div>
          </div> */}

          {/* Additional Content */}
          {/* ...other fire seasons... */}
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col bg-[#FFE6C5] px-4 rounded-xl shadow-lg">
        <div className="my-3 flex-1">
          <div>
            <p className="text-2xl text-orange-600">Fact</p>
            <p className="text-xl">
              Fire has been a part of Australia's environment for a very long
              time, at least 65 million years (Cary et al. 2012). People in
              Australia have also been using fire to manage the land for a long
              time. Indigenous Australians started using fire in a technique
              called "fire-stick farming" around 60,000 years ago.
            </p>
            <br />
            <p className="text-xl">
              Today, about 3% to 10% of Australia’s land burns every year
              (Western Australian Land Information Authority 2013). These fires
              are often called bushfires. A bushfire is an uncontrolled fire
              that spreads through grass, shrubs, and forests, which can happen
              during hot and dry conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryTimeline;
