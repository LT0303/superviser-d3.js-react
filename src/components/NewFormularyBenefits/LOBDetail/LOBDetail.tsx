import React from "react";
import { Input } from "@material-ui/core";
import { TabInfo } from "../../../models/tab.model";
import FrxMiniTabs from "../../shared/FrxMiniTabs/FrxMiniTabs";
import { formularyDetailsGridColumns } from "../../../utils/grid/columns";
import FrxGridContainer from "../../shared/FrxGrid/FrxDrugGridContainer";
import FrxLoader from "../../shared/FrxLoader/FrxLoader";
import PanelHeader from "../../shared/Frx-components/panel-header/PanelHeader";
import "./LOBDetail.scss";
import DropDown from "../../shared/Frx-components/dropdown/DropDown";
import DrugGridExpandedDetails from "../components/FormularyBenefitsDetail/components/common/DrugGridExpandedDetails/DrugGridExpandedDetails";
import { Popover } from "antd";
import DialogPopup from "../../shared/FrxDialogPopup/FrxDialogPopup";
import RadioButton from "../../shared/Frx-components/radio-button/RadioButton";
import Grid from "@material-ui/core/Grid";
interface State {
  miniTabs: Array<TabInfo>;
  activeMiniTabIndex: number;
  gridData: any;
  gridColumn: any;
  AddNewPopupInd:boolean;
  selectedAddNewFormularyRadio:any;
}

const miniTabs = [
  { id: 1, text: "All" },
  { id: 2, text: "Add/Remove NDCs" },
  { id: 3, text: "Add/Remove Criteria" },
  { id: 4, text: "Payment Override" },
  { id: 5, text: "Group 4" },
  { id: 6, text: "Group 5" },
];
const steps = [
  "Setup",
  "Construct",
  "Compare",
  "Validation",
  "Complete",
  "Bazaar",
];
class LOBDetail extends React.Component<any, any> {
  state = {
    miniTabs: miniTabs,
    activeMiniTabIndex: 0,
    gridData: [],
    gridColumn: [],
    AddNewPopupInd:false,
    selectedAddNewFormularyRadio:"AddRemoveCriteria",
  };
  onClickMiniTab = (selectedTabIndex: number) => {
    let activeMiniTabIndex = 0;

    const tabs = this.state.miniTabs.map((tab: TabInfo, index: number) => {
      if (index === selectedTabIndex) {
        activeMiniTabIndex = index;
      }
      return tab;
    });
    this.setState({ tabs, activeMiniTabIndex });
  };
  onClickAddNewFormulary(selectedOption:any){    
    if(selectedOption == "createNew"){
        this.openAddNewPopup();
    }    
  }

  openAddNewPopup(){
    this.setState({AddNewPopupInd:true});
  }

  handleAddNewPopupAction(action:any){    
    if(action === "positive"){
      this.props.addNewFormulary(this.state.selectedAddNewFormularyRadio);  
    }    
  }
  handleAddNewFormularyRadioOptionChange = (e) => {
    this.setState({
      selectedAddNewFormularyRadio: e.target.value,
      });
  };
  closeAddNewPopop(){
    this.setState({AddNewPopupInd:false});
  }

  getVariant(label:any, type:any){
    if(label === "N/A" && type === "block"){
      return 4;
    }
    if(label === "Sell" && type === "block"){
      return 2;
    }
    if(label === "Selling" && type === "block"){
      return 1;
    }

    if(label === "Purchased" && type === "pill"){
        return 6;
    }

    if(label === "Imported" && type === "pill"){
      return 2;
  }
  if(label === "Created" && type === "pill"){
    return 1;
}

  }

  renderActiveMiniTabContent = () => {
    const miniTabIndex = this.state.activeMiniTabIndex;
    switch (miniTabIndex) {
      case 0:
        return this.getGridData(this.props.baseData);
      case 1:
        return <div>Add/Remove NDCs</div>;
      case 2:
        return <div>Add/Remove Criteria</div>;
      case 3:
        return <div>Payment Override</div>;
      case 4:
        return <div>Group 4</div>;
      case 5:
        return <div>Group 5</div>;
    }
  };
  updateHiddenGridColumn = (hiddenColumns) => {
    const getKey = hiddenColumns.map((e) => e.key);
    const updatedFormularyDetailsGridColumns = formularyDetailsGridColumns();
    console.log(updatedFormularyDetailsGridColumns);
    const updatedColumns = updatedFormularyDetailsGridColumns.map((e) => {
      if (getKey.indexOf(e.key) !== -1) {
        e.hidden = true;
      }
      return e;
    });
    return updatedColumns;
  };
  getGridData = (baseData) => {
    let grid = <FrxLoader />;
    let gridData = null;
    let hiddenColumns = [];
    gridData = baseData
      ? baseData.map((e, index: any) => {
          return {
            id: index + 1,
            key: index + 1,
            service_year: e.service_year,
            bazaar: {
              label: e.bazaar.label,
              type: "block",
              variant: this.getVariant(e.bazaar.label, "block"),
              fill: "fill",
            },
            origin: {
              label: e.origin.label,
              type: "pill",
              variant: this.getVariant(e.origin.label, "pill"),
              fill: "fill",
            },
            component_name: e.component_name,
            description: e.description,
            version_number: e.version_number,
            assemblyType: {
              label: e.assemblyType.label,
              type: "block",
              variant: 5,
              fill: "fill",
            },
          };
        })
      : null;
      const addNewButtonDDContent = <div className="add-new-dd"><p className="newFormularyOptions" onClick={()=>this.onClickAddNewFormulary("createNew")}>Create New</p><p onClick={()=>this.onClickAddNewFormulary('buyFromBazaar')}>Buy from Bazaar</p></div>;
    return gridData ? (
      <div className="formulary-benefit-grid">
        <div className="bordered">
          <div className="formulary-grid-panel-header-container">
            <PanelHeader
              title="FORMULARY LIST"
              tooltip="FORMULARY LIST"
              className="formulary-grid-panel-header"
            />
            <div className="fields-container">
              <div className="field-container">
                <DropDown
                  className="formulary-type-dropdown"
                  placeholder="All"
                  options={["All", "None"]}
                />
              </div>
              <div className="field-container">
                <Input
                  className="formulary-list-search"
                  placeholder="Search"
                  type="text"
                  disableUnderline={true}
                  startAdornment={
                    <svg
                      className="member-search__icon"
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8504 9.5102L8.70825 7.36842C8.61157 7.27175 8.4805 7.21805 8.34299 7.21805H7.99277C8.58578 6.45972 8.93815 5.50591 8.93815 4.46831C8.93815 2 6.93781 0 4.46908 0C2.00034 0 0 2 0 4.46831C0 6.93663 2.00034 8.93663 4.46908 8.93663C5.50685 8.93663 6.46082 8.58432 7.21928 7.99141V8.34157C7.21928 8.47905 7.27299 8.6101 7.36968 8.70677L9.51183 10.8485C9.7138 11.0505 10.0404 11.0505 10.2402 10.8485L10.8483 10.2406C11.0502 10.0387 11.0502 9.71214 10.8504 9.5102ZM4.46908 7.21805C2.95002 7.21805 1.71888 5.98926 1.71888 4.46831C1.71888 2.94952 2.94787 1.71858 4.46908 1.71858C5.98813 1.71858 7.21928 2.94737 7.21928 4.46831C7.21928 5.98711 5.99028 7.21805 4.46908 7.21805Z"
                        fill="#999999"
                      />
                    </svg>
                  }
                />
              </div>
              <div className="field-container">
                <DropDown
                  className="formulary-type-dropdown"
                  placeholder="Active"
                  options={["Active", "Inactive"]}
                />
              </div>
            </div>
            <div className="panel-divider"></div>
            <Popover content={addNewButtonDDContent} trigger="click" placement="bottom">
              <div className="add-new-formulary-button">+ Add New Formulary</div>
            </Popover>
          </div>
          <div className="inner-container">
            <FrxGridContainer
              enableSearch={false}
              enableColumnDrag
              onSearch={() => {}}
              fixedColumnKeys={["claimId"]}
              pagintionPosition="topRight"
              gridName="MEDICARE"
              enableSettings
              columns={formularyDetailsGridColumns(
                {
                  onFormularyNameClick: (id:any ,rootComponentName: any) =>
                    this.props.drugDetailClick(id,rootComponentName),
                },
                hiddenColumns
              )}
              scroll={{ x: 1500, y: 377 }}
              isFetchingData={false}
              enableResizingOfColumns
              getPerPageItemSize={this.props.onPageSize}
              onGridPageChangeHandler={this.props.onPageChangeHandler}
              clearFilterHandler={this.props.onClearFilterHandler}
              totalRowsCount={3}
              pageSize={this.props.pageSize}
              selectedCurrentPage={this.props.selectedCurrentPage}
              applyFilter={this.props.applyFilter}
              getColumnSettings={this.props.getColumnSettings}
              data={gridData}
              expandable={{
                isExpandable: true,
                expandIconColumnIndex:
                  formularyDetailsGridColumns({}).length + 1,
                expandedRowRender: (props) => (
                  <DrugGridExpandedDetails selectedModule={"medicare"} />
                ),
                expandCloseIcon: (
                  <span>
                    <svg
                      width="9"
                      height="5"
                      viewBox="0 0 9 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.223752 0.24549C0.531543 -0.0693596 0.960049 -0.0940675 1.33632 0.24549L4.09513 2.89065L6.85395 0.24549C7.23022 -0.0940675 7.65943 -0.0693596 7.9651 0.24549C8.27289 0.559634 8.25313 1.0905 7.9651 1.38559C7.67849 1.68067 4.65071 4.56373 4.65071 4.56373C4.57861 4.63846 4.49219 4.69789 4.39662 4.73849C4.30104 4.77908 4.19827 4.8 4.09443 4.8C3.99059 4.8 3.88782 4.77908 3.79224 4.73849C3.69666 4.69789 3.61025 4.63846 3.53815 4.56373C3.53815 4.56373 0.511776 1.68067 0.223752 1.38559C-0.0649778 1.0905 -0.0840382 0.559634 0.223752 0.24549Z"
                        fill="#999999"
                      />
                    </svg>
                  </span>
                ),
                expandOpenIcon: (
                  <span>
                    <svg
                      width="5"
                      height="9"
                      viewBox="0 0 5 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.245493 7.96947C-0.0693603 7.6615 -0.0940685 7.23274 0.245493 6.85625L2.89068 4.09578L0.245492 1.33532C-0.0940688 0.958827 -0.0693606 0.529358 0.245492 0.223503C0.559639 -0.0844708 1.09051 -0.0646925 1.3856 0.223503C1.68069 0.510286 4.56378 3.53987 4.56378 3.53987C4.63851 3.61202 4.69794 3.69849 4.73853 3.79412C4.77913 3.88975 4.80005 3.99259 4.80005 4.09649C4.80005 4.20039 4.77913 4.30322 4.73853 4.39886C4.69794 4.49449 4.63851 4.58096 4.56378 4.6531C4.56378 4.6531 1.68069 7.68128 1.3856 7.96947C1.09051 8.25838 0.55964 8.27745 0.245493 7.96947Z"
                        fill="#323C47"
                      />
                    </svg>
                  </span>
                ),
              }}
            />
          </div>
        </div>
      </div>
    ) : (
      grid
    );
  };
  render() {
    return (
      <>
        <FrxMiniTabs
          tabList={this.props.tabs ? this.props.tabs : this.state.miniTabs}
          activeTabIndex={this.state.activeMiniTabIndex}
          onClickTab={this.onClickMiniTab}
        />
        <div className="formulary-mini-tabs-info">
          {this.renderActiveMiniTabContent()}
        </div>
        
        <DialogPopup
        showCloseIcon={true}
        positiveActionText='Continue'
        negativeActionText='Cancel'
        title='SELECT LISTS FOR CREATION'
        handleClose= {() => {
          this.closeAddNewPopop();
        }}
        handleAction={(e) => { this.handleAddNewPopupAction(e)}}
        showActions={true}
        open={this.state.AddNewPopupInd}
      >
        <div className="addNewPopupWrapper">
          <Grid  container xs={12}>
            <Grid item xs={4}>
              <RadioButton label="Add/Remove NDCs" name="add-new-Formulary-radio"  onChange={this.handleAddNewFormularyRadioOptionChange} checked={this.state.selectedAddNewFormularyRadio === "AddRemoveNDCs"} value="AddRemoveNDCs"/>
            </Grid>
            <Grid item xs={4}>
              <RadioButton label="Add/Remove Criteria" name="add-new-Formulary-radio" onChange={this.handleAddNewFormularyRadioOptionChange} checked={this.state.selectedAddNewFormularyRadio === "AddRemoveCriteria"} value="AddRemoveCriteria" />
            </Grid>
            <Grid item xs={4}>
              <RadioButton label="Payment Override" name="add-new-Formulary-radio"  onChange={this.handleAddNewFormularyRadioOptionChange} checked={this.state.selectedAddNewFormularyRadio === "PaymentOverride"} value="PaymentOverride"/>
            </Grid>
          </Grid>
        </div>
      </DialogPopup>
      </>
    );
  }
}

export default LOBDetail;
