import RootLayout from "./layout";
import MentorshipIntro from "../components/MentorshipIntro";
import Pricing from "~/components/pricing";

export default function Home() {
  return (
    <RootLayout>
      <MentorshipIntro />
      <Pricing />
    </RootLayout>
  );
}
