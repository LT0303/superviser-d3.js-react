
import { Row } from "antd";
import React from "react";
import MemberBasicInfo from "./components/member-basic-info/memberBasicInfo";
import MemberDetail from "./components/member-detail/memberDetail";
import MembersInfoSearch from "./components/members-info-search/membersInfoSearch";
import './Members.scss';


class Members extends React.Component<any, any> {

    state = {
        detail: false
    }

    memberDetailClick = () => {
        this.setState({
            detail: true
        })
    }

    render(){
        return(
            <div className="member-container">
                <div className="user-info-row">
                    
                    {this.state.detail ? (
                        <MemberBasicInfo />
                    ) : (<div></div>)}
                    
                    <div className="updated-on">
                        <div className="label" onClick={this.memberDetailClick}>
                            Last Analysis:<span className="val">09/22/2020</span></div>
                        <div className="label">Claim Data Updated:<span className="val">
                            06/12/2021</span></div>
                    </div>

                </div>

                {this.state.detail ? (<MemberDetail />) : (
                    <div className="all-members-container">
                        <Row className="heading">ALL MEMBERS</Row>
                        {/* <MembersInfoSearch /> */}
                    </div>
                )}
                
            </div>
        );
    }
}

export default (Members);