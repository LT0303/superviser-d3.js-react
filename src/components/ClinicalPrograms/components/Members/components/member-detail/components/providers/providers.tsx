import React from "react";
import FrxInfoCard from "../../../../../../../shared/FrxInfoCard/FrxInfoCard";
import './providers.scss';

class MemberProviders extends React.Component<any, any> {

    render() {
        const memberDetails = [
            {
                column1: "PCP",
                column2: 'Sullivan, James MD'
            },
            {
                column1: "Pharmacy (Primary)",
                column2: 'CVS mail-order'
            },
            {
                column1: "Pharmacy (Secondary)",
                column2: 'Walgreens'
            }
        ]
        return(
            <div className="providers-box">
                <FrxInfoCard
                    heading="Providers"
                    itemList={memberDetails}
                />
            </div>
        )
    }
}

export default (MemberProviders);