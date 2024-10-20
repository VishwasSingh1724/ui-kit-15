import React, { useState } from "react";
const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
  
    return (
      <div className="tabs">
        <div className="tabs-header">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="tabs-content">
          {tabs.map((tab) => (
            activeTab === tab.id && <div key={tab.id} className="tab-content">{tab.content}</div>
          ))}
        </div>
      </div>
    );
  };
  
export default Tabs;