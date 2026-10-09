import { Hero } from "@/components/sections/Hero";
import { Vehicles } from "@/components/sections/Vehicles";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Location } from "@/components/sections/Location";

export default function Home() {
  return (
    <>
      <Hero />
      <Vehicles />
      <About />
      <Contact />
      <Location />
    </>
  );
}
