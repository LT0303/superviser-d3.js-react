import React, { Fragment } from "react";
import { TabInfo } from "../../../../models/tab.model";
import FrxTabs from "../../../shared/FrxTabs/FrxTabs";
import FormularyDetailsTop from "./components/FormularyDetailTop/FormularyBenefitsDetailTop";
import "./FormularyBenefitsDetail.scss";
import Validation from "../../../Validation/Validation";
import { connect } from "react-redux";
import FrxMiniTabs from "../../../shared/FrxMiniTabs/FrxMiniTabs";
import FormularyBenefitsDetailDrugMaintenance from "./components/DrugMaintenance/FormularyBenefitsDetailDrugMaintenance";
import FormularyBenefitsDetailConflict from "./components/Conflict/FormularyBenefitsDetailConflict";
import FormularyBenefitsDetailCompletion from "./components/Completion/FormularyBenefitsDetailCompletion";
import FormularyBenefitsConfiguration from "./components/Configuration/FormularyBenefitsConfiguration";
import FormularyBenefitsDetailTop from "./components/FormularyDetailTop/FormularyBenefitsDetailTop";
import AddRemoveNdc from "./components/AddRemoveNdcSetting/AddRemoveNdc";
import AddRemoveNdcBottom from "./components/AddRemoveNdcSetting/AddRemoveNdcBottom";

const miniTabs = [
  { id: 1, text: "Configuration" },
  { id: 2, text: "Conflict" },
  { id: 3, text: "Completion" },
  { id: 4, text: "Drug Maintenance" },
];
const mapStateToProps = (state) => {
  console.log(state);
  return {
    current_formulary: state.formularBase.current_formulary,
  };
};
class FormularyBenefitsDetail extends React.Component<any, any> {
  state = {
    tabs: miniTabs,
    activeTabIndex: 0,
    saveBtnInd: false,
    addCriteriaInd: false,
  };
  addCriteriahandler = () => {
    this.setState({ addCriteriaInd : true, saveBtnInd : false })
  }
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
  componentDidMount(){
   
  }
  saveBtnHandler = () => {
    this.setState({ saveBtnInd : true, addCriteriaInd : false })
  }
  renderActiveTabContent = () => {
    const tabIndex = this.state.activeTabIndex;
    switch (tabIndex) {
      case 0:
        return (
          this.state.addCriteriaInd ? null :<FormularyBenefitsConfiguration addCriteriahandler={this.addCriteriahandler} />
        )
      case 1:
        return <FormularyBenefitsDetailConflict />;
      case 2:
        return <FormularyBenefitsDetailCompletion />;
      case 3:
        return <FormularyBenefitsDetailDrugMaintenance />;
    }
  };
  render() {
    const fData = this.props.data;
    return (
      <>
        <FormularyBenefitsDetailTop formularyTopData={fData} saveBtnInd={this.state.saveBtnInd} rootPath={this.props.rootPath} />
        {this.state.addCriteriaInd &&
        <Fragment>
        <AddRemoveNdc rootPath={this.props.rootPath} />
        <AddRemoveNdcBottom saveBtnHandler={this.saveBtnHandler} rootPath={this.props.rootPath} />
        </Fragment>
        }
        {!this.state.addCriteriaInd && 
        <div className="drug-details-bottom">
          <FrxMiniTabs
            tabList={this.state.tabs}
            activeTabIndex={this.state.activeTabIndex}
            onClickTab={this.onClickTab}
          />
          <div className="inner-container">{this.renderActiveTabContent()}</div>
        </div>
      }
      </>
    );
  }
}
export default connect(mapStateToProps)(FormularyBenefitsDetail);
