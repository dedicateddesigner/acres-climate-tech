import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Background from "../components/Background/Background";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";
import Biochar from "@/components/Biochar/Biochar";
import EnhancedRockWeathering from "@/components/EnhancedRockWeathering/EnhancedRockWeathering";
import VisionMission from "@/components/VisionMission/VisionMission";
import HowWeWork from "@/components/HowWeWork/HowWeWork";
import ProjectsPreview from "@/components/ProjectsPreview/ProjectsPreview";
import ClosingSection from "@/components/ClosingSection/ClosingSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Background />
        <WhatWeDo />
        <Biochar />
        <EnhancedRockWeathering />
        <VisionMission />
        <HowWeWork />
        <ProjectsPreview />
        <ClosingSection />
      </main>
    </>
  );
}
