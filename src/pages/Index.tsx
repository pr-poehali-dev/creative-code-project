import React from "react";
import Header from "@/components/Header";
import TabsSection from "@/components/TabsSection";
import ProjectDescription from "@/components/ProjectDescription";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50">
      <Header />
      <TabsSection />
      <ProjectDescription />
    </div>
  );
};

export default Index;
