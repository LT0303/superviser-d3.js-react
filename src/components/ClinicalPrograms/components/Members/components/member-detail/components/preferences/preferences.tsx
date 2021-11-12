import React from "react";
import FrxInfoCard from "../../../../../../../shared/FrxInfoCard/FrxInfoCard";
import './preferences.scss';

class MemberPreferences extends React.Component<any, any> {

    render() {
        const memberDetails = [
            {
                column1: "PCM",
                column2: 'Email'
            },
            {
                column1: "AOR / POA",
                column2: 'mjohnsonrobertson_aor.doc'
            }
        ]
        return(
            <div className="preferences-box">
                <FrxInfoCard
                    heading="Providers"
                    itemList={memberDetails}
                />
            </div>
        )
    }
}

export default (MemberPreferences);