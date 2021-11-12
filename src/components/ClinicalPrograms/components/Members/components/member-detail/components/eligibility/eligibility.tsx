import React from "react";
import FrxInfoCard from "../../../../../../../shared/FrxInfoCard/FrxInfoCard";
import './eligibility.scss';

class MemberEligibility extends React.Component<any, any> {

    render() {
        const memberDetails = [
            {
                column1: "Start Date",
                column2: '01/01/2020',
            },
            {
                column1: "Term Date",
                column2: '12/31/2020',
            },
            {
                column1: "Transition Date",
                column2: '01/05/2021'
            }
        ]
        return(
            <div className="eligibility-box">
                <FrxInfoCard
                    heading="Eligibility"
                    itemList={memberDetails}
                />
            </div>
        )
    }
}

export default (MemberEligibility);