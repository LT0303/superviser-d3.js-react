import React, { Fragment, useContext } from "react";
import DropDown from "../../../../../shared/Frx-components/dropdown/DropDown";
import DialogPopup from "../../../../../shared/FrxDialogPopup/FrxDialogPopup";
import FrxMiniTabs from "../../../../../shared/FrxMiniTabs/FrxMiniTabs";
import Grid from "@material-ui/core/Grid";
import { ReactComponent as EditIcon } from "../../../../../../assets/icons/EditIcon.svg";
import "./AddRemoveNdc.scss";
import { getAdditionalCriteria } from "../../../../../../mocks/formulary/searchMock";
import AdditionalCriteriaBuilder from "../../../../../shared/Frx-components/additionalcriteriabuilder";
import { TabInfo } from "../../../../../../models/tab.model";

const miniTabs = [
  { id: 1, text: "Add" },
  { id: 2, text: "Remove" },
];

interface CategoryData {
  id: number;
  category: string;
}

interface AdditionalCriteria {
  id: number;
  title: string;
  formArray: any;
}

interface AdditionalCriteriaPopupState {
  categoriesData: Array<CategoryData>;
  activeCategoryIndex: number;
  activeCategoryTitle: string;
  formCount: number;
  checkBoxOpt: any;
  additionalCriterias: Array<AdditionalCriteria>;
  popupInd:boolean;
  show:boolean;
  tabs:any;
  activeTabIndex: number;
}
class AddRemoveNdc extends React.Component<any,any> {

    state: AdditionalCriteriaPopupState = {
      popupInd: false,
      show: false,
      tabs: miniTabs,
      activeTabIndex: 0,
      categoriesData: getAdditionalCriteria(),
      activeCategoryIndex: 0,
      activeCategoryTitle: "",
      additionalCriterias: [],
      formCount: 0,
      checkBoxOpt: {
        1: [
          { id: 1, text: "Formulary File" },
          { id: 2, text: "Prior Authorization File" },
          { id: 3, text: "Step Therapy File" },
          { id: 4, text: "Indication-Based Coverage File" },
        ],
        2: [
          { id: 1, text: "Tire1" },
          { id: 2, text: "Tire2" },
          { id: 3, text: "Tire3" },
          { id: 4, text: "Tire4" },
          { id: 5, text: "Tire5" },
          { id: 6, text: "Tire6" },
        ],
      },
    };

    componentDidMount(){
      this.handleAddNewClick();
    }

    renderActiveTabContent = () => {
      const tabIndex = this.state.activeTabIndex;
      switch (tabIndex) {
        case 0:
          return (
            <Grid container>
            <Grid item xs={12}>
              <div className="group-tag">
                  <label className="label">
                  DO YOU WANT TO ADD ADDITIONAL CRITERIA <span className="astrict">*</span>
                  </label>
                  <input type="text" className="benefit-top-input-fields" />
                  <div className="placeholder-tag"><span className="placeholder-text-font" onClick={(e) => this.handleCriteriaClick()}>Add Criteria</span></div>
                  <EditIcon
                      className="add-criteria-edit-icon"
                      onClick={(e) => this.handleCriteriaClick()}
                  />
              </div>
            </Grid>
            </Grid>
          )
        case 1:
          return <div></div>;
      }
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


    handleAddNewClick = () => {
      this.setState({
        additionalCriterias: [
          ...this.state.additionalCriterias,
          {
            id: this.state.additionalCriterias.length,
            title: `ADDITIONAL CRITERIA ${
              this.state.additionalCriterias.length + 1
            }`,
            formArray: [],
          },
        ],
      });
    };

    
    handleListItemClick = (
      category: CategoryData,
      additionalCriteriaId: number
    ) => {
      const title = category.category;
      const catid = category.id;
      let additionalCriterias = [...this.state.additionalCriterias];
      let additionalCriteria = additionalCriterias.find(
        (additionalCriteria) => additionalCriteria.id === additionalCriteriaId
      );
      if (additionalCriteria) {
        let form = additionalCriteria.formArray.find((v) => v.title === title);
        if (!form) {
          additionalCriteria.formArray = [
            ...additionalCriteria.formArray,
            { title: title, id: catid },
          ];
          this.setState({
            additionalCriterias: additionalCriterias,
          });
        }
      }
    };

    deleteFormHandler = (id: number, additionalCriteriaId: number) => {
      let additionalCriterias = [...this.state.additionalCriterias];
      let additionalCriteria = additionalCriterias.find(
        (additionalCriteria) => additionalCriteria.id === additionalCriteriaId
      );
      if (additionalCriteria) {
        let formArray = additionalCriteria.formArray.filter((v) => v.id !== id);
        additionalCriteria.formArray = formArray;
        this.setState({
          additionalCriterias: additionalCriterias,
        });
      }
    };
  deleteAdditionalCriteria = (additionalCriteriaId: number) => {
      const additionalCriterias = this.state.additionalCriterias.filter(
        (additionalCriteria) => additionalCriteria.id !== additionalCriteriaId
      );
      this.setState({
        additionalCriterias: additionalCriterias,
      });
    };

    clearSelected = (additionalCriteriaId: number) => {
      let additionalCriterias = [...this.state.additionalCriterias];
      let additionalCriteria = additionalCriterias.find(
        (additionalCriteria) => additionalCriteria.id === additionalCriteriaId
      );
      if (additionalCriteria) {
        additionalCriteria.formArray = [];
      }
      this.setState({
        additionalCriterias: additionalCriterias,
      });
    };

    onClose = () => {
        console.log("close");
        this.setState({ popupInd: false });
        return true;
      };
      handleCriteriaClick = () => {
        this.setState({ popupInd: true });
      };
      processCloseActions = () => {
        this.setState({ show: true });
      };
  render() {
  return (
    <div className="add-remove-contanier">
        <div className="add-remove-heading">
          {this.props.rootPath.includes("NDCs") ?
            <h6>ADD/REMOVE NDC SETTINGS</h6> :
            this.props.rootPath.includes("Criteria") ?
            <h6>ADD/REMOVE CRITERIA SETTINGS</h6> :
            this.props.rootPath.includes("Override") ?
            <h6>PAYMENT OVERRIDE SETTINGS</h6> : null
          }
            <span>
            <svg width="9" height="12" viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.3 0L9 3H6.3001V4H9V11C9 11.5523 8.55228 12 8 12H1C0.447715 12 0 11.5523 0 11V1C0 0.447715 0.447715 0 1 0H5.4V4H6.3L6.3 0Z" fill="#2055B5"/>
            </svg>
            </span>
        </div>
        <div className={this.props.rootPath === "Add/Remove Criteria Component 1" ? "add-remove-wrapper-tabs" : "add-remove-wrapper" }>
        <Grid container>
        {this.props.rootPath.includes("NDCs") || this.props.rootPath.includes("Override") ?
          <Fragment>
            <Grid item xs={4}>
            <div className="group">
                <label className="label">
                TIER <span className="astrict">*</span>
                </label>
                <DropDown
                className="benefit-top-select"
                options={[""]}
                />
            </div>
            </Grid>
            <Grid item xs={4}>
            <div className="group-tag">
                <label className="label">
                DO YOU WANT TO ADD ADDITIONAL CRITERIA <span className="astrict">*</span>
                </label>
                <input type="text" className="benefit-top-input-fields" />
                <div className="placeholder-tag"><span className="placeholder-text-font" onClick={(e) => this.handleCriteriaClick()}>Add Criteria</span></div>
                <EditIcon
                    className="add-criteria-edit-icon"
                    onClick={(e) => this.handleCriteriaClick()}
                />
            </div>
            </Grid>
            </Fragment> :
            this.props.rootPath.includes("Criteria") ?
            <div>
            <FrxMiniTabs
            tabList={this.state.tabs}
            activeTabIndex={this.state.activeTabIndex}
            onClickTab={this.onClickTab}
            />
            <div className="inner-container add-remove-addTab-content">{this.renderActiveTabContent()}</div>
            </div> :
            null
          }
            <DialogPopup
            className="add-remove-ndc-popup"
            showCloseIcon={false}
            positiveActionText=""
            negativeActionText=""
            title="Additional Criteria"
            handleClose={() => {
              this.onClose();
            }}
            handleAction={() => {
              this.processCloseActions();
            }}
            showActions={false}
            open={this.state.popupInd}
            >
            <AdditionalCriteriaBuilder
              activeCategoryIndex={0}
              activeCategoryTitle={""}
              categoriesData={this.state.categoriesData}
              checkBoxOpt={this.state.checkBoxOpt}
              deleteFormHandler={this.deleteFormHandler}
              deleteAdditionalCriteria={this.deleteAdditionalCriteria}
              clearSelected={this.clearSelected}
              handleListItemClick={this.handleListItemClick}
              additionalCriterias={this.state.additionalCriterias}
              handleAddNewClick={this.handleAddNewClick}
              className={""}
              isMultiCriteriaNeeded = {true}
            />
            </DialogPopup>
        </Grid>
        </div>
    </div>
  );
}
}
export default (AddRemoveNdc)
