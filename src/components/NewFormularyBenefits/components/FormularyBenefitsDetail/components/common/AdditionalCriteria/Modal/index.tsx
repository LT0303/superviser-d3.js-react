import React, { Component, Fragment } from "react";

// import styles
import "../style.scss";

// import constant data
import { AdditionalCriteriaModalData } from "../../../../../../../../utils/constants";

class AdditionalCriteriaModal extends Component<any, any> {
  render() {
    return (
      <Fragment>
        <div className="additional-criteria-modal">
          {AdditionalCriteriaModalData.map((item, index) => {
            return (
              <div className="content">
                <h1>{item.heading}</h1>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default AdditionalCriteriaModal;
