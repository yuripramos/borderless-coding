export const metadata = {
  title: "Borderless Coding",
  description: "Page description",
};

import RootLayout from "./layout";
import Hero from "../components/hero";
import PressLogos from "../components/press-logos";
import Features from "../components/features";
import Features02 from "../components/features-02";
import Resources from "../components/resources";
import Cta from "../components/cta";

export default function Home() {
  return (
    <RootLayout>
      <Hero />
      <PressLogos />
      <Features />
      <Features02 />
      <Resources />
      <Cta />
    </RootLayout>
  );
}
