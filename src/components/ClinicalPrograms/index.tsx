import React from "react";
import { TabInfo } from "../../models/tab.model";
import FrxMiniTabs from "../shared/FrxMiniTabs/FrxMiniTabs";
import Calendar from "./components/Calendar/Calendar";
import Home from "./components/Home/Home";
import Members from "./components/Members/Members";
import Pharmacy from "./components/Pharmacy/Pharmacy";
import Prescribers from "./components/Prescribers/Prescribers";
import ProgramSummary from "./components/ProgramSummary/ProgramSummary";
import Reports from "./components/Reports/Reports";

import './index.scss';

const miniTabs = [
    { id: 1, text: "Home" },
    { id: 2, text: "Program Summary" },
    { id: 3, text: "Members" },
    { id: 4, text: "Prescriber" },
    { id: 5, text: "Pharmacy" },
    { id: 6, text: "Calendar" },
    { id: 7, text: "Reports" },
  ];
class ClinicalProgram extends React.Component<any, any> {
    state = {
        tabs: miniTabs,
        activeTabIndex: 0,       
      };

    onClickTab = (selectedTabIndex: number) => {
    let activeTabIndex = 0;

    const tabs = this.state.tabs.map((tab: TabInfo, index: number) => {
        if (index === selectedTabIndex) {
        activeTabIndex = index;
        }
        return tab;
    });
    this.setState({ tabs, activeTabIndex });
      };


      renderActiveTabContent = () => {
        const tabIndex = this.state.activeTabIndex;
        switch (tabIndex) {
            case 0:
                return  <Home />;
            case 1:
                return <ProgramSummary />;
            case 2:
                return <Members />;
            case 3:
                return <Prescribers />;
            case 4:
                return <Pharmacy />;
            case 5:
                return <Calendar />;
            case 6:
                return <Reports />;
        }
      };

      getHeaderText(){
          if(this.state.activeTabIndex === 0 ){
                return "Clinical Programs";
          }
          else if(this.state.activeTabIndex === 1 ){
            return "Program Summary";
          }
          else if(this.state.activeTabIndex === 2 ){
            return "Members";
          }
          else if(this.state.activeTabIndex === 3 ){
            return "Prescribers";
          }
          else if(this.state.activeTabIndex === 4 ){
            return "Pharmacies";
          }
          else if(this.state.activeTabIndex === 5 ){
            return "Calendar";
          }
          else{
            return "Reports";
          }
         
      }
    render(){
        const headerText = this.getHeaderText();
        return(
            <div className="clinical-Program-container">
                <div className="header">
                    <div className="heading">{headerText}</div>
                    <div className="clinical-tabs-wrapper">
                        <FrxMiniTabs
                            tabList={this.state.tabs}
                            activeTabIndex={this.state.activeTabIndex}
                            onClickTab={this.onClickTab}
                        />
                    </div> 
                </div>            
                <div className="inner-container">{this.renderActiveTabContent()}</div>
            </div>
        );
    }
}

export default (ClinicalProgram);