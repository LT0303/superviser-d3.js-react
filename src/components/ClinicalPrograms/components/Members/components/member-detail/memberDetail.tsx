import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import React from "react";
import Attribute from "../../../../../user-details/attributes-panel/attribute/Attribute";
import MemberDemographic from './components/demographics/demographics';
import MemberEligibility from "./components/eligibility/eligibility";
import MemberPreferences from "./components/preferences/preferences";
import MemberProviders from "./components/providers/providers";
import './memberDetail.scss';

const styles = {
    tooltip: {
        minWidth: "300px",
        padding: "25px 25px",
        boxShadow: "30px rgba(0, 0, 0, 0.5)",
        backgroundColor: "#ffff",
        border: " 1px solid rgba(0, 0, 0, 0.12)",
        webKitOutline: "none",
        marginTop: 6,
        marginLeft: 5,
        // border: "1px solid #e5e5e5"
    },

    arrow: {
        "&::before": {
            border: " 1px solid rgba(0, 0, 0, 0.12)",
            backgroundColor: "#fff",
            boxSizing: "border-box",
        },
    },
};

const CustomTooltip = withStyles(styles)(Tooltip);

class MemberDetail extends React.Component<any, any> {
    render() {

        return (
            <div className="member-detail-container">
                <div className="demo-row-box">
                    <MemberDemographic />
                    <MemberEligibility />
                    <MemberProviders />
                    <MemberPreferences />
                </div>

                <div className="AttributesPanel">
                    <div className="title">Attributes</div>
                    <div className="Panel-Attribute">
                        <CustomTooltip
                            className="attribute-tooltip"
                            arrow
                            placement="bottom"
                            interactive
                            title={
                                <React.Fragment>
                                    <div className="tooltip-data">
                                        <div className="label">Effective Date</div>
                                        <div>
                                            asdsadas
                                    </div>
                                    </div>
                                    <div className="tooltip-data">
                                        <div className="label">End Date</div>
                                        <div>asdsadasd</div>
                                    </div>
                                </React.Fragment>
                            }
                        >
                            <div>
                                <Attribute name="Hospice" />
                            </div>
                        </CustomTooltip>
                    </div>
                </div>

            </div>
        );
    }
}

export default (MemberDetail);