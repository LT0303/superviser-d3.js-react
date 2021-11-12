import React from "react";
import FrxInfoCard from "../../../../../../../shared/FrxInfoCard/FrxInfoCard";
import './demographics.scss';

class MemberDemographic extends React.Component<any, any> {

    render() {
        const memberDetails = [
            {
                column1: "Member ID",
                column2: '8133381165'
            },
            {
                column1: "DOB",
                column2: '6/1/1957 (64)'
            },
            {
                column1: "Language",
                column2: 'English'
            }
        ]
        return(
            <div className="demographics-box">
                <FrxInfoCard
                    heading="Demographics"
                    itemList={memberDetails}
                />
            </div>
        )
    }
}

export default (MemberDemographic);