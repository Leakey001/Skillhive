import React, { useState } from "react";
import './whousesskillhive.css';

const tabs = [
  {
    label: "Students",
    tasks: [
      "Manage assignments and deadlines",
      "Schedule study sessions",
      "Find learning resources",
      "Organize group projects"
    ]
  },
  {
    label: "Professionals",
    tasks: [
      "Plan meetings and presentations",
      "Research industry trends",
      "Track career goals",
      "Organize networking events"
    ]
  },
  {
    label: "Teams",
    tasks: [
      "Coordinate project milestones",
      "Track team progress",
      "Schedule training sessions",
      "Plan team-building activities"
    ]
  },
  {
    label: "Freelancers",
    tasks: [
      "Handle client scheduling",
      "Research opportunities",
      "Manage proposals and invoices",
      "Balance multiple projects"
    ]
  }
];

export const WhoUsesSkillive = () => {
  const [activeTab, setActiveTab] = useState("Students");
  const active = tabs.find(tab => tab.label === activeTab);

  return (
    <section className="who-uses-skillive">
      <div className="content">
        <h2 className="title">Who uses Skillive?</h2>
        
        {/* Tabs */}
        <div className="tabs">
          {tabs.map(tab => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`tab-btn ${activeTab === tab.label ? "active" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Task Chips */}
        <div className="tasks">
          {active?.tasks.map((task, i) => (
            <span key={i} className="task-chip">
              {task}
            </span>
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="image-container">
        <img
          src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Who uses Skillive"
        />
      </div>
    </section>
  );
};
