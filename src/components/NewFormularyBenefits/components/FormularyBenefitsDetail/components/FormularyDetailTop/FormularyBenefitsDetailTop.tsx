import React, { Fragment, useContext } from "react";
import DropDown from "../../../../../shared/Frx-components/dropdown/DropDown";
import Grid from "@material-ui/core/Grid";
import {DatePicker} from "antd";
import { ReactComponent as EditIcon } from "../../../../../../assets/icons/EditIcon.svg";
import formularyBenefitsContext from "../../../../FormularyBenefitsContext";
import "./FormularyBenefitsDetailTop.scss";
class FormularyBenefitsDetailTop extends React.Component<any, any> {
  state = {
    formularyVersionList:[],
    isAddNew: false,
  }
  componentDidMount() {
    this.setState({formularyVersionList: ["Version 1","Version 2"]});
    if(this.props.rootPath === undefined || this.props.rootPath == "")
    {      
      this.setState({isAddNew:true});
    }
    else{
      this.setState({isAddNew:false});
    }
  }
  static contextType = formularyBenefitsContext;
  render(){
    let dropDown: any;
      dropDown = (
        <DropDown
          className={this.state.isAddNew ? "formulary-type-dropdown formulary-versions" : "formulary-type-dropdown formulary-versions-green"}
          placeholder="Formulary Version"
          options={this.state.formularyVersionList.map((e) => e)}
          dropdownClassName="version-dd"
        />
      );
  return (
    <div className="drug-detail-top">
      <div className="breadcrum-sec">
      <div className="breadcrum">
          <span
            className="color-blue"
             onClick={this.context.showDetailHandler(1,"")}
          >
            Component Grid 
          </span>
          <span>&gt;</span>
          <span className="breadcrum-heading">{this.props.rootPath}</span>
          <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.6493 2.43847L14.2593 5.08105C14.3692 5.19238 14.3692 5.37402 14.2593 5.48535L7.93981 11.8838L5.25463 12.1855C4.89583 12.2266 4.59201 11.9189 4.63252 11.5557L4.93056 8.83691L11.25 2.43847C11.36 2.32715 11.5394 2.32715 11.6493 2.43847ZM16.3368 1.76758L14.9248 0.33789C14.485 -0.107422 13.7703 -0.107422 13.3275 0.33789L12.3032 1.375C12.1933 1.48633 12.1933 1.66797 12.3032 1.7793L14.9132 4.42187C15.0231 4.5332 15.2025 4.5332 15.3125 4.42187L16.3368 3.38476C16.7766 2.93652 16.7766 2.21289 16.3368 1.76758ZM11.1111 10.1435V13.126H1.85185V3.75097H8.50116C8.59375 3.75097 8.68056 3.71289 8.74711 3.64843L9.90451 2.47656C10.1244 2.2539 9.96817 1.87597 9.65856 1.87597H1.38889C0.622106 1.87597 0 2.50586 0 3.28222V13.5947C0 14.3711 0.622106 15.001 1.38889 15.001H11.5741C12.3409 15.001 12.963 14.3711 12.963 13.5947V8.97167C12.963 8.6582 12.5897 8.50292 12.3698 8.72265L11.2124 9.89452C11.1487 9.9619 11.1111 10.0498 11.1111 10.1435Z" fill="#1D54B4"/>
          </svg>

          <span className="active-state">
            {/* {props.formularyTopData.formularyName} */}
          </span>
        </div>
          <div className={this.state.isAddNew ? "version-wrapper" : "version-wrapper-green"}>
          {dropDown}
            <div className="item">
            {!this.state.isAddNew && 
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.8281 5.48992C10.8336 8.42555 8.43949 10.826 5.50387 10.8281C4.23597 10.829 3.07134 10.387 2.15613 9.64838C1.91815 9.4563 1.90036 9.09964 2.11662 8.88338L2.35868 8.64132C2.54364 8.45636 2.83892 8.43612 3.04384 8.59869C3.71813 9.13376 4.57147 9.45312 5.5 9.45312C7.68507 9.45312 9.45312 7.68472 9.45312 5.5C9.45312 3.31493 7.68472 1.54688 5.5 1.54688C4.45126 1.54688 3.49875 1.95441 2.79151 2.61963L3.88193 3.71005C4.09849 3.92661 3.94511 4.29688 3.63887 4.29688H0.515625C0.325768 4.29688 0.171875 4.14298 0.171875 3.95312V0.829877C0.171875 0.523639 0.542137 0.370262 0.758699 0.586803L1.81943 1.64753C2.77597 0.733391 4.07241 0.171875 5.5 0.171875C8.43928 0.171875 10.8227 2.55191 10.8281 5.48992ZM6.94134 7.18255L7.15238 6.9112C7.32722 6.68641 7.28673 6.36245 7.06193 6.18763L6.1875 5.5075V3.26562C6.1875 2.98085 5.95665 2.75 5.67187 2.75H5.32812C5.04335 2.75 4.8125 2.98085 4.8125 3.26562V6.18L6.21777 7.273C6.44256 7.44782 6.7665 7.40734 6.94134 7.18255Z" fill="#11861A"/>
              </svg>
            }
            {this.state.isAddNew && 
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8281 5.48992C10.8336 8.42555 8.43949 10.826 5.50387 10.8281C4.23597 10.829 3.07134 10.387 2.15613 9.64838C1.91815 9.4563 1.90036 9.09964 2.11662 8.88338L2.35868 8.64132C2.54364 8.45636 2.83892 8.43612 3.04384 8.59869C3.71813 9.13376 4.57147 9.45312 5.5 9.45312C7.68507 9.45312 9.45312 7.68472 9.45312 5.5C9.45312 3.31493 7.68472 1.54688 5.5 1.54688C4.45126 1.54688 3.49875 1.95441 2.79151 2.61963L3.88193 3.71005C4.09849 3.92661 3.94511 4.29688 3.63887 4.29688H0.515625C0.325768 4.29688 0.171875 4.14298 0.171875 3.95312V0.829877C0.171875 0.523639 0.542137 0.370262 0.758699 0.586803L1.81943 1.64753C2.77597 0.733391 4.07241 0.171875 5.5 0.171875C8.43928 0.171875 10.8227 2.55191 10.8281 5.48992ZM6.94134 7.18255L7.15238 6.9112C7.32722 6.68641 7.28673 6.36245 7.06193 6.18763L6.1875 5.5075V3.26562C6.1875 2.98085 5.95665 2.75 5.67187 2.75H5.32812C5.04335 2.75 4.8125 2.98085 4.8125 3.26562V6.18L6.21777 7.273C6.44256 7.44782 6.7665 7.40734 6.94134 7.18255Z"
                  fill="#F65A1C"
                />
              </svg>
              }
              Version History
            </div>
            <div className="item">
            {!this.state.isAddNew && 
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.7812 0C12.4544 0 13 0.545645 13 1.21875V8.53125C13 9.20436 12.4544 9.75 11.7812 9.75H4.46875C3.79564 9.75 3.25 9.20436 3.25 8.53125V1.21875C3.25 0.545645 3.79564 0 4.46875 0H11.7812ZM4.46875 10.5625C3.34872 10.5625 2.4375 9.65128 2.4375 8.53125V3.25H1.21875C0.545645 3.25 0 3.79564 0 4.46875V11.7812C0 12.4544 0.545645 13 1.21875 13H8.53125C9.20436 13 9.75 12.4544 9.75 11.7812V10.5625H4.46875Z" fill="#11861A"/>
              </svg>              
            }
            {this.state.isAddNew && 
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7812 0C12.4544 0 13 0.545645 13 1.21875V8.53125C13 9.20436 12.4544 9.75 11.7812 9.75H4.46875C3.79564 9.75 3.25 9.20436 3.25 8.53125V1.21875C3.25 0.545645 3.79564 0 4.46875 0H11.7812ZM4.46875 10.5625C3.34872 10.5625 2.4375 9.65128 2.4375 8.53125V3.25H1.21875C0.545645 3.25 0 3.79564 0 4.46875V11.7812C0 12.4544 0.545645 13 1.21875 13H8.53125C9.20436 13 9.75 12.4544 9.75 11.7812V10.5625H4.46875Z"
                  fill="#F65A1C"
                />
              </svg>
              }
              Clone
            </div>
            <div className="item">
            {!this.state.isAddNew && 
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.61597 0C3.47515 0 0.928467 2.54668 0.928467 5.6875C0.928467 8.82832 3.47515 11.375 6.61597 11.375C9.75679 11.375 12.3035 8.82832 12.3035 5.6875C12.3035 2.54668 9.75679 0 6.61597 0ZM9.05347 5.99219C9.05347 6.04805 9.00776 6.09375 8.9519 6.09375H7.02222V8.02344C7.02222 8.0793 6.97651 8.125 6.92065 8.125H6.31128C6.25542 8.125 6.20972 8.0793 6.20972 8.02344V6.09375H4.28003C4.22417 6.09375 4.17847 6.04805 4.17847 5.99219V5.38281C4.17847 5.32695 4.22417 5.28125 4.28003 5.28125H6.20972V3.35156C6.20972 3.2957 6.25542 3.25 6.31128 3.25H6.92065C6.97651 3.25 7.02222 3.2957 7.02222 3.35156V5.28125H8.9519C9.00776 5.28125 9.05347 5.32695 9.05347 5.38281V5.99219Z" fill="#11861A"/>
              </svg>              
            }
            {this.state.isAddNew && 
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.61523 0C3.47441 0 0.927734 2.54668 0.927734 5.6875C0.927734 8.82832 3.47441 11.375 6.61523 11.375C9.75605 11.375 12.3027 8.82832 12.3027 5.6875C12.3027 2.54668 9.75605 0 6.61523 0ZM9.05273 5.99219C9.05273 6.04805 9.00703 6.09375 8.95117 6.09375H7.02148V8.02344C7.02148 8.0793 6.97578 8.125 6.91992 8.125H6.31055C6.25469 8.125 6.20898 8.0793 6.20898 8.02344V6.09375H4.2793C4.22344 6.09375 4.17773 6.04805 4.17773 5.99219V5.38281C4.17773 5.32695 4.22344 5.28125 4.2793 5.28125H6.20898V3.35156C6.20898 3.2957 6.25469 3.25 6.31055 3.25H6.91992C6.97578 3.25 7.02148 3.2957 7.02148 3.35156V5.28125H8.95117C9.00703 5.28125 9.05273 5.32695 9.05273 5.38281V5.99219Z"
                  fill="#F65A1C"
                />
              </svg>
            }
              New Version
            </div>
            <div className="item">
            {!this.state.isAddNew && 
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11 5.5C11 6.95869 10.4205 8.35764 9.38909 9.38909C8.35764 10.4205 6.95869 11 5.5 11C4.04131 11 2.64236 10.4205 1.61091 9.38909C0.579463 8.35764 0 6.95869 0 5.5C0 4.04131 0.579463 2.64236 1.61091 1.61091C2.64236 0.579463 4.04131 0 5.5 0C6.95869 0 8.35764 0.579463 9.38909 1.61091C10.4205 2.64236 11 4.04131 11 5.5ZM8.14962 3.33713C8.21417 3.27258 8.25043 3.18503 8.25043 3.09375C8.25043 3.00247 8.21417 2.91492 8.14962 2.85037C8.08508 2.78583 7.99753 2.74957 7.90625 2.74957C7.81497 2.74957 7.72742 2.78583 7.66288 2.85037L5.5 5.01394L3.33713 2.85037C3.30516 2.81841 3.26722 2.79306 3.22546 2.77577C3.18371 2.75847 3.13895 2.74957 3.09375 2.74957C3.04855 2.74957 3.00379 2.75847 2.96204 2.77577C2.92028 2.79306 2.88234 2.81841 2.85037 2.85037C2.81841 2.88234 2.79306 2.92028 2.77577 2.96204C2.75847 3.00379 2.74957 3.04855 2.74957 3.09375C2.74957 3.13895 2.75847 3.18371 2.77577 3.22546C2.79306 3.26722 2.81841 3.30516 2.85037 3.33713L5.01394 5.5L2.85037 7.66288C2.78583 7.72742 2.74957 7.81497 2.74957 7.90625C2.74957 7.99753 2.78583 8.08508 2.85037 8.14962C2.91492 8.21417 3.00247 8.25043 3.09375 8.25043C3.18503 8.25043 3.27258 8.21417 3.33713 8.14962L5.5 5.98606L7.66288 8.14962C7.69484 8.18159 7.73278 8.20694 7.77454 8.22423C7.81629 8.24153 7.86105 8.25043 7.90625 8.25043C7.95145 8.25043 7.99621 8.24153 8.03796 8.22423C8.07972 8.20694 8.11766 8.18159 8.14962 8.14962C8.18159 8.11766 8.20694 8.07972 8.22423 8.03796C8.24153 7.99621 8.25043 7.95145 8.25043 7.90625C8.25043 7.86105 8.24153 7.81629 8.22423 7.77454C8.20694 7.73278 8.18159 7.69484 8.14962 7.66288L5.98606 5.5L8.14962 3.33713Z" fill="#11861A"/>
              </svg>              
            }
            {this.state.isAddNew && 
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 5.5C11 6.95869 10.4205 8.35764 9.38909 9.38909C8.35764 10.4205 6.95869 11 5.5 11C4.04131 11 2.64236 10.4205 1.61091 9.38909C0.579463 8.35764 0 6.95869 0 5.5C0 4.04131 0.579463 2.64236 1.61091 1.61091C2.64236 0.579463 4.04131 0 5.5 0C6.95869 0 8.35764 0.579463 9.38909 1.61091C10.4205 2.64236 11 4.04131 11 5.5ZM8.14962 3.33713C8.21417 3.27258 8.25043 3.18503 8.25043 3.09375C8.25043 3.00247 8.21417 2.91492 8.14962 2.85037C8.08508 2.78583 7.99753 2.74957 7.90625 2.74957C7.81497 2.74957 7.72742 2.78583 7.66288 2.85037L5.5 5.01394L3.33713 2.85037C3.30516 2.81841 3.26722 2.79306 3.22546 2.77577C3.18371 2.75847 3.13895 2.74957 3.09375 2.74957C3.04855 2.74957 3.00379 2.75847 2.96204 2.77577C2.92028 2.79306 2.88234 2.81841 2.85037 2.85037C2.81841 2.88234 2.79306 2.92028 2.77577 2.96204C2.75847 3.00379 2.74957 3.04855 2.74957 3.09375C2.74957 3.13895 2.75847 3.18371 2.77577 3.22546C2.79306 3.26722 2.81841 3.30516 2.85037 3.33713L5.01394 5.5L2.85037 7.66288C2.78583 7.72742 2.74957 7.81497 2.74957 7.90625C2.74957 7.99753 2.78583 8.08508 2.85037 8.14962C2.91492 8.21417 3.00247 8.25043 3.09375 8.25043C3.18503 8.25043 3.27258 8.21417 3.33713 8.14962L5.5 5.98606L7.66288 8.14962C7.69484 8.18159 7.73278 8.20694 7.77454 8.22423C7.81629 8.24153 7.86105 8.25043 7.90625 8.25043C7.95145 8.25043 7.99621 8.24153 8.03796 8.22423C8.07972 8.20694 8.11766 8.18159 8.14962 8.14962C8.18159 8.11766 8.20694 8.07972 8.22423 8.03796C8.24153 7.99621 8.25043 7.95145 8.25043 7.90625C8.25043 7.86105 8.24153 7.81629 8.22423 7.77454C8.20694 7.73278 8.18159 7.69484 8.14962 7.66288L5.98606 5.5L8.14962 3.33713Z"
                  fill="#F65A1C"
                />
              </svg>
            }
              Delete
            </div>
            <div className="item">
            {!this.state.isAddNew &&
            <Fragment>
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.6875 9.625C0.6875 10.0053 0.994727 10.3125 1.375 10.3125H9.625C10.0053 10.3125 10.3125 10.0053 10.3125 9.625V3.4375H0.6875V9.625ZM4.125 5.07031C4.125 4.92852 4.24102 4.8125 4.38281 4.8125H6.61719C6.75898 4.8125 6.875 4.92852 6.875 5.07031V5.24219C6.875 5.38398 6.75898 5.5 6.61719 5.5H4.38281C4.24102 5.5 4.125 5.38398 4.125 5.24219V5.07031ZM10.3125 0.6875H0.6875C0.307227 0.6875 0 0.994727 0 1.375V2.40625C0 2.59531 0.154687 2.75 0.34375 2.75H10.6562C10.8453 2.75 11 2.59531 11 2.40625V1.375C11 0.994727 10.6928 0.6875 10.3125 0.6875Z" fill="#11861A"/>
              </svg>   
              Archive
              </Fragment>
            }
            {this.state.isAddNew &&  
            <Fragment>
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11 5.5C11 6.95869 10.4205 8.35764 9.38909 9.38909C8.35764 10.4205 6.95869 11 5.5 11C4.04131 11 2.64236 10.4205 1.61091 9.38909C0.579463 8.35764 0 6.95869 0 5.5C0 4.04131 0.579463 2.64236 1.61091 1.61091C2.64236 0.579463 4.04131 0 5.5 0C6.95869 0 8.35764 0.579463 9.38909 1.61091C10.4205 2.64236 11 4.04131 11 5.5ZM8.27063 3.41687C8.22152 3.36794 8.16304 3.32941 8.0987 3.30359C8.03436 3.27776 7.96547 3.26518 7.89616 3.2666C7.82685 3.26801 7.75853 3.28338 7.69529 3.3118C7.63205 3.34022 7.5752 3.3811 7.52812 3.432L5.14044 6.47419L3.7015 5.03456C3.60375 4.94348 3.47447 4.8939 3.34089 4.89626C3.20731 4.89861 3.07986 4.95273 2.98538 5.0472C2.89091 5.14167 2.8368 5.26912 2.83444 5.4027C2.83209 5.53629 2.88167 5.66557 2.97275 5.76331L4.79187 7.58312C4.84088 7.63204 4.89924 7.67059 4.96346 7.69646C5.02769 7.72234 5.09647 7.73501 5.1657 7.73373C5.23493 7.73244 5.30319 7.71723 5.36642 7.68899C5.42964 7.66076 5.48653 7.62007 5.53369 7.56938L8.27819 4.13875C8.37175 4.04147 8.42344 3.91138 8.42215 3.77641C8.42087 3.64144 8.36671 3.51236 8.27131 3.41687H8.27063Z" fill="#F65A1C"/>
              </g>
              <defs>
              <clipPath id="clip0">
              <rect width="11" height="11" fill="white"/>
              </clipPath>
              </defs>
              </svg>
              Complete
              </Fragment>
            }
            </div>
          </div>
      </div>
      {!this.state.isAddNew && 
      <Fragment>
      <div className="durationInfo d-flex">
        <div className="item">
          <span className="tag purple">Medicare</span>
          <span className="long tag light-grey">Add/Remove NDCs</span>
          <span className="tag grey">Tag 1</span>
          <span className="tag grey">Longer Reporting Tag 2</span>
        </div>
        <div className="item">
          <span className="label">Effective Date:</span>{"09/02/2019"}
          {/* {props.formularyTopData.effectiveDate} */}
        </div>
        <div className="item">
          <span className="label">Termination Date:</span>{"30/09/2020"}
          {/* {props.formularyTopData.terminationDate} */}
        </div>
      </div>
      <div className="benefits-top-description">
        <p>This is a description. This is a description. This is a description. This is a description. This is a description. This is a description. This is a description. This is a description. This is a description. This is a description. This is a description. This is a description. This is a description. This is a description. This is a description. This is a description.</p>
      </div>
      </Fragment>
      }
      {this.state.isAddNew && 
      <div className="benefit-top-form">
      <Grid container>
        <Grid item xs={4}>
          <div className="group">
            <label>
              COMPONENT NAME <span className="astrict">*</span>
            </label>
            <input type="text" className="benefit-top-input-fields" placeholder="Add/Remove NDCs Criteria Component 1" />
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="group-tag">
            <label>
              LOB
            </label>
            <DropDown
              className="benefit-top-select"
              options={[""]}
            />
            <div className="border-round purple"><span className="category-text-font">Medicare</span></div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="group-tag">
            <label>
              TYPE <span className="astrict">*</span>
            </label>
            <DropDown
              className="benefit-top-select"
              options={[""]}
            />
            <div className="border-round grey"><span className="category-text-font">Add/Remove Criteria</span></div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="group-tag">
            <label>
              REPORTING TAGS
            </label>
            <input type="text" className="benefit-top-input-fields" />
            <div className="border-round dark-grey"><span className="category-text-font">Tag 1</span></div>
            <div className="dark-grey longer-tag"><span className="category-text-font">Longer Reporting Tag 2</span></div>
            <EditIcon
              className="reporting-tags-edit-icon"
            />
          </div>
        </Grid>
        <Grid item xs={4}>
        <div className="benefits-top-date-wrapper">
          <div className="form">
              <label>
                EFFECTIVE DATE
              </label>
              <DatePicker
                  className="benefits-top-date"
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
                TERMINATION DATE
              </label>
              <DatePicker
                  className="benefits-top-date"
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
        <Grid item xs={4}>
          <div className="group">
            <label>
              DESCRIPTION <span className="astrict">*</span>
            </label>
            <input type="text" className="benefit-top-input-fields" placeholder="This is a description." />
          </div>
        </Grid>
      </Grid>
      </div>
      }
    </div>
  );
}
}
export default (FormularyBenefitsDetailTop)
