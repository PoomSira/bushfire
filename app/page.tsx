import Card from "./components/Card";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import { Heading, Row, Col, Container } from "nes-ui-react";

export default function Home() {
  return (
    <div>
      <main className="min-h-full relative bg-[url('/hero-img.jpg')] bg-center bg-cover">
        <Navigation />
        <Hero />
      </main>

      <div className="grid grid-cols-2 gap-4 p-4">
        <div className="min-w-full min-h-80 bg-[#FFF8C7] nes-container is-rounded">
          01
        </div>
        <div className="min-w-full min-h-80 bg-[#FFF8C7] nes-container is-rounded">
          02
        </div>
      </div>
    </div>
  );
}
