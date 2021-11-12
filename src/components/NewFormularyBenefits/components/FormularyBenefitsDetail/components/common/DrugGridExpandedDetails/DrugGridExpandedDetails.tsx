import React, { Component, useState } from "react";
import Paper from "@material-ui/core/Paper";
import FrxProcessStepper from "../../../../../../shared/FrxProcessStepper/FrxProcessStepper";
import FrxMiniTabs from "../../../../../../shared/FrxMiniTabs/FrxMiniTabs";
import "./DrugGridExpandedDetails.scss";
import RadioButton from "../../../../../../shared/Frx-components/radio-button/RadioButton";
import PanelHeader from "../../../../../../shared/Frx-components/panel-header/PanelHeader";
import { Button, Grid } from "@material-ui/core";
import DropDown from "../../../../../../shared/Frx-components/dropdown/DropDown";
import { ReactComponent as EditIcon } from "../../../../../../../assets/icons/EditIcon.svg";
import { DatePicker } from "antd";

const miniTabs = [
  { id: 1, text: "General" },
  { id: 2, text: "Medicare" },
  { id: 3, text: "Formulary Design" },
  { id: 4, text: "Tiers" },
  { id: 5, text: "Supplemental Benefits/Alternative Model" },
];

const miniCommercialTabs = [
  { id: 1, text: "General" },
  { id: 2, text: "Formulary Design" },
  { id: 3, text: "Tiers" },
];

interface props {
  selectedModule: any;
}

export default class DrugGridExpandedDetails extends React.Component<any, any> {
  //const [activeMiniTabIndex, setActiveMiniTabIndex] = useState(0);
  render(){
  return (
    <Grid item xs={12}>     
        <div className="formulary-expanded-details__container">
          {/* Left Container Starting*/}
          <div className="formulary-expanded-details-left">
            <div className="formulary-expanded-details-left__container">
              <div className="formulary-expanded-details-left__title">
                Versions
              </div>
              <div className="formulary-expanded-details-left__list">
                <div className="formulary-expanded-details-left__list-item">
                  <span className="formulary-expanded-details-left__list-item-indicator formulary-expanded-details-left__list-item-indicator--active" />
                  Version 4
                </div>
                <div className="formulary-expanded-details-left__list-item">
                  <span className="formulary-expanded-details-left__list-item-indicator formulary-expanded-details-left__list-item-indicator--active" />
                  Version 3
                </div>
                <div className="formulary-expanded-details-left__list-item">
                  <span className="formulary-expanded-details-left__list-item-indicator formulary-expanded-details-left__list-item-indicator--inactive" />
                  Version 2
                </div>

                <div className="formulary-expanded-details-left__list-add-item">
                  + add new version
                </div>
              </div>
            </div>
          </div>
          {/* Left Container Ending*/}

          {/* Right Container Starting*/}
          <div className="formulary-expanded-details-right">
            <div className="bordered">
              <div className="header">
                 GENERAL INFORMATION         
              </div>
            <div className="expended-details-panel-wrapper">
            <div className="expanded-top-form">
      <Grid container>
        <Grid item xs={5}>
          <div className="group">
            <label>
              COMPONENT NAME <span className="astrict">*</span>
            </label>
            <input type="text" className="expanded-top-input-fields" placeholder="Payment Override Component 2" />
          </div>
          <div className="group-tag">
            <label>
              REPORTING TAGS
            </label>            
            <div className="expanded-top-input-fields">   
             <div className="border-round-tag input-link">Add a tag</div>
             <EditIcon
              className="reporting-tags-edit-icon"
            />
            </div>
          </div>
          <div className="group-tag">
            <label>
              LOB
            </label>
            <DropDown
              className="expanded-top-select"
              options={[""]}
            />
            <div className="border-round purple"><span className="category-text-font">MEDICARE</span></div>
          </div>
          <div className="expanded-top-date-wrapper">
          <div className="form">
              <label>
                EFFECTIVE DATE<span className="astrict">*</span>
              </label>
              <DatePicker
                  className="expanded-top-date"
                  placeholder=""
                  suffixIcon={
                  <svg
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ant-picker-suffix"
                  >
                      <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 20H2C0.897 20 0 19.103 0 18V4C0 2.897 0.897 2 2 2H4V0H6V2H12V0H14V2H16C17.103 2 18 2.897 18 4V18C18 19.103 17.103 20 16 20ZM16.001 18L16 6H2V18H16.001ZM6 9H4V11H6V9ZM6 13H4V15H6V13ZM10 9H8V11H10V9ZM10 13H8V15H10V13ZM14 9H12V11H14V9ZM14 13H12V15H14V13Z"
                      fill="#C4C4C4"
                      />
                  </svg>
                  }
              />
          </div>
          <div className="form">
              <label>
                TERM DATE<span className="astrict">*</span>
              </label>
              <DatePicker
                  className="expanded-top-date"
                  placeholder=""
                  suffixIcon={
                  <svg
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ant-picker-suffix"
                  >
                      <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16 20H2C0.897 20 0 19.103 0 18V4C0 2.897 0.897 2 2 2H4V0H6V2H12V0H14V2H16C17.103 2 18 2.897 18 4V18C18 19.103 17.103 20 16 20ZM16.001 18L16 6H2V18H16.001ZM6 9H4V11H6V9ZM6 13H4V15H6V13ZM10 9H8V11H10V9ZM10 13H8V15H10V13ZM14 9H12V11H14V9ZM14 13H12V15H14V13Z"
                      fill="#C4C4C4"
                      />
                  </svg>
                  }
              />
          </div>
        </div>
        </Grid>
        <Grid item xs={1}>
        </Grid>  
        <Grid item xs={5}>
        <div className="group">
            <label>
              DESCRIPTION <span className="astrict">*</span>
            </label>
            <input type="text" className="expanded-top-input-fields" placeholder="" />
          </div>
          <div className="group-tag">
            <label>
              TYPE <span className="astrict">*</span>
            </label>
            <DropDown
              className="expanded-top-select"
              options={[""]}
            />
            <div className="border-round grey"><span className="category-text-font">Payment Override</span></div>
          </div>
          <div className="group">
            <label>
              NUMBER OF GRUGS <span className="astrict">*</span>
            </label>
            <label>
              2
            </label>
          </div>
        </Grid>  
        <Grid item xs={1}>
        <div className='drugExpandButtonWrapper'>
          <button
            onClick={() => this.props.formularyToggle()}
            className='Button viewAllButton'
          >
            View Full List
          </button>
          
        </div>
        </Grid>


      </Grid>
  </div>
            </div>
          </div>
          </div>
          {/* Right Container Ending*/}
             
        </div>
   </Grid>
  );
}
}

//export default FormularyExpandedDetails
