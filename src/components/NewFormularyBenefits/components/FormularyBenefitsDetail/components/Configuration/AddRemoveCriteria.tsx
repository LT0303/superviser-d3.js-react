import React, { Component, Fragment } from "react";

// import button
import Button from "../../../../../shared/Frx-components/button/Button";

// import FrxGridContainer
import FrxGridContainer from "../../../../../shared/FrxGrid/FrxGridContainer";

// import mock data
import { FormularyBenefitsConfigurationAddRemoveCriteriaColumns } from "../../../../../../utils/grid/columns";
import { FormularyBenefitsConfigurationAddRemoveCriteriaMock } from "../../../../../../mocks/formulary-benefits/FormularyBenefitsConfigurationAddRemoveCriteria";

// import styles
import "./style.scss";

class AddRemoveCriteria extends Component<any, any> {
  state = {
    rowsData: JSON.parse(JSON.stringify(FormularyBenefitsConfigurationAddRemoveCriteriaMock())),
  }
  
  handleOnDragRows = (fromIndex, toIndex) => {
    let swappedArray = JSON.parse(JSON.stringify(this.swapArrayLocs(fromIndex, toIndex)));
    this.setState({
      rowsData: swappedArray
    })
  }
  
    /**
   * @function swapArrayLocs
   * to swap row
   *
   * @param arr array on which swap is done eg: rows
   * @param fromIndex index from which item is moved
   * @param toIndex index to which item is moved
   *
   * @author Shahzaib Shahid
   */
  swapArrayLocs = (fromIndex, toIndex) => {
    const { rowsData } = this.state;
    let toValue = rowsData[toIndex];
    
    rowsData[toIndex] = rowsData[fromIndex];
    rowsData[fromIndex] = toValue;
    
    return [...rowsData];
  }
  
  render() {
    const { rowsData } = this.state;
    
    return (
      <Fragment>
        <div className="configuration-drug-table">
          <div className="bordered white-bg">
            <div className="header space-between pr-10">
              SELECT ADD/REMOVE CRITERIA
              <div className="button-wrapper">
                <Button className="Button normal" label="+ Add New Criteria" onClick={this.props.addCriteriahandler} />
              </div>
            </div>

            <div className="configuration-grid-container">
              <FrxGridContainer
                isPinningEnabled={false}
                enableSettings={true}
                isCustomCheckboxEnabled={false}
                enableSearch={false}
                enableColumnDrag={false}
                enableRowDrag={true}
                onRowDrag={this.handleOnDragRows}
                customSettingIcon={"NONE"}
                onSearch={() => {}}
                fixedColumnKeys={[]}
                pagintionPosition="topRight"
                gridName="addRemoveCriteria"
                columns={FormularyBenefitsConfigurationAddRemoveCriteriaColumns()}
                scroll={{ x: 1400, y: 377 }}
                isFetchingData={false}
                enableResizingOfColumns
                data={JSON.parse(JSON.stringify(rowsData))  }
                rowSelection={{
                  columnWidth: 50,
                  fixed: true,
                  type: "checkbox",
                }}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AddRemoveCriteria;
