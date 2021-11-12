import { Button, Input, Row } from "antd";
import React from "react";
import CustomDatePicker from "../../../../../shared/Frx-components/date-picker/CustomDatePicker";
import DropDown from "../../../../../shared/Frx-components/dropdown/DropDown";
import './membersInfoSearch.scss';

const SearchData = [
    {
        value: 'Member Name',
        placeHolder: 'Member Name'
    },
    {
        value: 'LOB',
        placeHolder: 'LOB'
    },
    {
        value: 'Program Name',
        placeHolder: 'Program Name',
    },
    {
        value: 'Member ID',
        placeHolder: 'Member ID',
    },
    {
        value: 'Plan Name',
        placeHolder: 'Plan Name',
    },
    {
        value: '1/12/2019',
        placeHolder: 'Start Date',
    },
    {
        value: '1/12/2019',
        placeHolder: 'End Date',
    }
]

class MembersInfoSearch extends React.Component<any, any> {
    render() {
        const data = SearchData;
        return (
            <Row className="member-search-area">
                <Row className="row-1">
                    <Input placeholder={data[0].placeHolder}></Input>
                    <DropDown className="dob-dropdown" placeholder="DOB"
                        options={["1/12/2019"]} />
                    <Input placeholder={data[1].placeHolder}></Input>
                    <Input placeholder={data[2].placeHolder}></Input>
                </Row>

                <Row className="row-2">
                    <Input placeholder={data[3].placeHolder}></Input>
                    <Input placeholder={data[4].placeHolder}></Input>
                    <CustomDatePicker
                        className="start-date-picker__input "
                        value={data[5].placeHolder}
                        placeholder={data[5].placeHolder}
                    />
                    <CustomDatePicker
                        className="start-date-picker__input "
                        value={data[6].value}
                        placeholder={data[6].placeHolder}
                    />

                    <Button className="test-claim-button">Search</Button>

                </Row>
            </Row>
        )
    }
}

export default (MembersInfoSearch);