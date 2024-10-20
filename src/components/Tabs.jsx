import React, { useState, useRef, useEffect } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const tabsRef = useRef(null);

  useEffect(() => {
    if (tabsRef.current) {
      const activeButton = tabsRef.current.querySelector('.tab-btn.active');
      if (activeButton) {
        activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeTab]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="tabs">
      <div className="tabs-header" ref={tabsRef}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        {tabs.map((tab) => (
          activeTab === tab.id && (
            <div key={tab.id} className="tab-content">
              {tab.content}
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Tabs;