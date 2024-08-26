import Card from "./components/Card";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { Heading, Row, Col, Container } from "nes-ui-react";
import Image from "next/image";
import AusFire from "@/public/aus-fire.webp";

export default function Home() {
  return (
    <div className="bg-[#FFFBF2] mx-auto max-w-screen">
      <Navigation />
      <main className="h-[70vh] w-full bg-[url('/home-landing.webp')] bg-center bg-cover bg-no-repeat">
        <Hero />
      </main>
      <div className="py-8 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-black mb-4">
          Start your journey
        </h1>
        <hr className="w-full max-w-lg border-gray-400" />
      </div>
      <div className="grid grid-cols-1 gap-4 p-4">
        <div className="relative min-w-full min-h-80 bg-[#FFAD4D] bg-opacity-60 rounded-lg"></div>
      </div>
      <div className="grid grid-cols-1 gap-4 p-4">
        <div className="relative min-w-full min-h-80 bg-[#FFAD4D] bg-opacity-60 rounded-lg"></div>
      </div>

      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="relative min-w-full min-h-80 bg-[#FFAD4D] bg-opacity-60 rounded-lg"></div>
        <div className="relative min-w-full min-h-80 bg-[#FFAD4D] bg-opacity-60 rounded-lg"></div>
        <div className="relative min-w-full min-h-80 bg-[#FFAD4D] bg-opacity-60 rounded-lg"></div>
      </div>
      <Footer />
    </div>
  );
}
