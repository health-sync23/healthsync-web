import React, { useState } from "react";
import { FooterMenu, MedicationCard, QuickActionButton } from "../components";

import { HiCubeTransparent, HiUser } from "react-icons/hi";
import { BsGear } from "react-icons/bs";
import DashContent from "../components/DashContent";
import Professionals from "./Professionals";
import Settings from "./Settings";

const PatientDashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <section className="p-6">
      {/* mobile app */}
      <div className="flex flex-col gap-6">
        {activeTab === "Dashboard" ? (
          <DashContent />
        ) : activeTab === "Professionals" ? (
          <Professionals />
        ) : activeTab === "Settings" ? (
          <Settings />
        ) : null}

        <div className="fixed bottom-0 left-0 px-6 py-4 w-full flex items-center justify-between border-t z-50">
          <FooterMenu
            icon={<HiCubeTransparent />}
            title="Dashboard"
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
          <FooterMenu
            icon={<HiUser />}
            title="Professionals"
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
          <FooterMenu
            icon={<BsGear />}
            title="Settings"
            setActiveTab={setActiveTab}
            activeTab={activeTab}
          />
        </div>
      </div>
    </section>
  );
};

export default PatientDashboard;
