import React, { useState, useEffect } from 'react';
import { Row, Col, List, Space, Button, Select, Avatar, Input, Form, DatePicker, TimePicker } from 'antd';
import { LockOutlined, PlusOutlined, EyeOutlined } from '@ant-design/icons';
import moment from 'moment-timezone';
import _ from 'lodash';
import FrxProgressBar from '../../shared/FrxProgressBar/FrxProgressBar';

import "./MyTasksDetail.scss";

const { Option } = Select;

const sampleUsersForList = [
  {
    id: 1,
    name: 'Alex Walters'
  },
  {
    id: 2,
    name: 'Alex Walters'
  },
  {
    id: 3,
    name: 'Alex Walters'
  }
];

const status = [
  {
    id: 1,
    name: 'Complete'
  },
  {
    id: 2,
    name: "Review"
  },
  {
    id: 3,
    name: "Pending"
  }
];

const reasons = [
  {
    id: 1,
    name: 'Reason 1'
  },
  {
    id: 2,
    name: 'Reason 2'
  },
  {
    id: 3,
    name: 'Reason 3'
  }
];

const sampleUserData = [
  {
    id: 1,
    name: 'Alex Walters',
    desc: 'We need to figure out what’s going on with the last three iterms',
    timeago: '1 hour ago'
  }
]

const renderUserSelectOption = (item: any) => {
  return (
    <Space style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
      <div className="nameIcon"><span>{item.name.split("")[0]}</span></div>
      <div className="username">{item.name}</div>
    </Space>
  )
}

const renderStatusOptionItem = (item: any) => {
  const colors = ['#F89090', '#1fbbc4', '#FDD6C6']
  return (
    <Space style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
      <div style={{ width: 8, height: 8, backgroundColor: colors[item.id - 1], borderRadius: 50 }}></div>
      <div>{item.name}</div>
    </Space>
  );
}

export default function MyTasksDetail(props: any) {
  const [rowData, handleRowData] = useState<any>({});
  const [isShowTaskForm, handleShowTaskForm] = useState<boolean>(false);
  const [selSubTask, handleSelSubTask] = useState<any>({});
  const [subTaskData, handleSubTaskData] = useState<any[]>([]);
  const [userNotes, handleUserNotes] = useState<any[]>(sampleUserData);

  useEffect(() => {
    console.log(props);
    if (props.data) {
      handleRowData(props.data);
      handleSubTaskData(props.data.subtask_detail);
      if (props.data.subtask_detail.length) handleSelSubTask(props.data.subtask_detail[0])
      else {
        handleShowTaskForm(true)
        handleUserNotes([]);
      };
    }
  }, [props.data]);

  const handleSubmitNoteForm = (values: any) => {
    let tempUserNotes = _.clone(userNotes);
    const newNoteId = tempUserNotes.length ? (tempUserNotes.length + 1) : 0;
    const newNoteObj = {
      id: newNoteId,
      name: 'Alex Walters',
      desc: values['note'],
      timeago: moment().fromNow()
    };
    tempUserNotes.push(newNoteObj);
    handleUserNotes(tempUserNotes);
  }

  const handleAddNewSubTask = () => {
    if (isShowTaskForm !== true) handleShowTaskForm(true);
  }

  const handleNewSubTaskSubmit = (values: any) => {
    let tempDetails: any[] = _.clone(subTaskData);
    const newSubTaskId = tempDetails.length ? (tempDetails.length + 1) : 0;
    const newSubTaskObj = {
      ...values,
      id: newSubTaskId,
      due_date: moment(values['due_date']).format('MM/DD/YYY'),
      due_time: moment(values['due_time']).format('hh:mm'),
      created_by: "Alex Walters",
      user_profile_pic: "data:image/png;base64,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"
    };
    tempDetails.push(newSubTaskObj);
    handleSubTaskData(tempDetails);
    handleSelSubTask(newSubTaskObj);
    handleShowTaskForm(false);
  }

  const handleSubtaskDetailClick = (subtask: any) => {
    handleSelSubTask(subtask);
    handleShowTaskForm(false);
  }

  useEffect(() => {
    console.log(subTaskData)
  }, [subTaskData])

  return (
    <Row className="frx-grid-mytasks-detail">
      <Col span={5} className="frx-grid-mytasks-detail__subtask-list">
        <Space className="task-detail-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
          <div>
            <span className="statusIcon"></span>
            <label>{rowData.taskName || ""}</label>
          </div>
          <div className="taskPicWrapper">
            <span>
              <img src={rowData.assign_user_pic || ""} alt="User" />
            </span>
          </div>
          <EyeOutlined className="eyeIcon" />
        </Space>
        <div className="subtask-wrapper">
          <Space className="task-detail-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
            <div>
              <span className="statusIcon"></span>
              <p style={{ color: 'rgb(112, 118, 131)' }}>SUBTASK</p>
            </div>
          </Space>
          {subTaskData.map((item: any, i: number) => (
            <Button className="subtask-detail-item" onClick={() => handleSubtaskDetailClick(item)} type="text" key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
              <div>
                <span className="statusIcon">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4" cy="4" r="4" fill="#80C483"></circle></svg>
                </span>
                <p style={{ color: 'rgb(51, 51, 51)' }}>{item.subtask_name || ""}</p>
              </div>
              <div className="taskPicWrapper">
                <span>
                  <img src={item.user_profile_pic} alt="User" />
                </span>
                <div className="lockIcon"><LockOutlined /></div>
              </div>
              <EyeOutlined className="eyeIcon" />
            </Button>
          ))}
          <div className="subtask-row">
            <Button type="text" className="add-new-task" onClick={() => handleAddNewSubTask()} icon={<PlusOutlined />}>
              {"Add New SubTask"}
            </Button>
          </div>
        </div>
      </Col>
      {isShowTaskForm && (
        <Col span={9} className="frx-grid-mytasks-detail__subtask-submitform">
          <Form layout="vertical" onFinish={(values: any) => handleNewSubTaskSubmit(values)}>
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item label="SUBTASK NAME" name="subtask_name" rules={[{ required: true, message: '' }]} hasFeedback><Input /></Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="DUE DATE" name="due_date" rules={[{ required: true, message: '' }]} hasFeedback>
                  <DatePicker />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="due_time" label="TIME" rules={[{ required: true, message: '' }]} hasFeedback>
                  <TimePicker />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="assign_type"
                  label="ASSIGN TYPE"
                  hasFeedback
                  rules={[{ required: true, message: '' }]}
                >
                  <Select placeholder="Please select a type">
                    <Option value={'Roles'}>{'Roles'}</Option>
                    <Option value={'User Groups'}>{'User Groups'}</Option>
                    <Option value={'Users'}>{'Users'}</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="assign_to"
                  label="ASSIGN TO"
                  hasFeedback
                  rules={[{ required: true, message: '' }]}
                >
                  <Select className="searchWrapper">
                    {sampleUsersForList.map((item: any) => (
                      <Option key={item.id} value={item.name}>{renderUserSelectOption(item)}</Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="priority"
                  label="PRIORITY"
                  hasFeedback
                  rules={[{ required: true, message: '' }]}
                >
                  <Select placeholder="Please select a priority">
                    <Option value={'LOW'}>{'LOW'}</Option>
                    <Option value={'MEDIUM'}>{'MEDIUM'}</Option>
                    <Option value={'CRITICAL'}>{'CRITICAL'}</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label="DESCRIPTION" name="description" rules={[{ required: true, message: '' }]} hasFeedback><Input /></Form.Item>
              </Col>
              <Col span={24}>
                <Button type="primary" htmlType="submit">
                  {'Submit'}
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      )}
      {!isShowTaskForm && (
        <Col span={9} className="frx-grid-mytasks-detail__subtask-detail">
          <div className="taskAssigned">ASSIGNED TO</div>
          <Select className="searchWrapper" value={selSubTask.assign_to}>
            {sampleUsersForList.map((item: any) => (
              <Option key={item.id} value={item.name}>{renderUserSelectOption(item)}</Option>
            ))}
          </Select>
          <div className="wrapper">
            <div className="columnWrapper">
              <div className="rowOne">
                <div>WORKFLOW</div>
                <div className="spacer"></div>
                <div className="spantwo">PERIORITY</div>
              </div>
              <div className="rowTwo">
                <div className="spanOne">PA</div>
                <div className="spacer"></div>
                <div className="spanTwo">{selSubTask.priority || ""}</div>
              </div>
            </div>
            <div className="spacer"></div>
          </div>
          <div className="descriptionWrapper">
            <div className="description">
              <label>DESCRIPTION</label>
              <p>{selSubTask.description || ""}</p>
            </div>
          </div>
          <div className="createdWrapper">
            <div className="columnWrapper">
              <div className="rowOne">
                <div className="spanOne">CREATED</div>
                <div className="spacer"></div>
                <div className="spantwo">CREATED BY</div>
              </div>
              <div className="rowTwo">
                <div>{(selSubTask.due_date && selSubTask.due_time) ? moment(selSubTask.due_date + " " + selSubTask.due_time).format('MMMM Do YYYY') : ""}</div>
                <div className="spacer"></div>
                <div className="spanTwo">{selSubTask.created_by || ""}</div>
              </div>
            </div>
            <div className="spacer"></div>
          </div>
          <div className="wrapper">
            <div className="remaining">
              <label>REMAINING</label>
              <div>
                <FrxProgressBar value={(selSubTask.id * 20)} content={(selSubTask.due_date && selSubTask.due_time) ? moment(selSubTask.due_date + " " + selSubTask.due_time).format('MM/DD/YYYY @ hh:mm a') : ""} />
              </div>
            </div>
            <div className="spacer"></div>
          </div>
          <div className="statusControlWrapper">
            <label className="statusLabel">STATUS</label>
            <Select className="searchWrapper" defaultValue={1}>
              {status.map((item: any) => (
                <Option key={item.id} value={item.id}>{renderStatusOptionItem(item)}</Option>
              ))}
            </Select>
          </div>
          <div className="reasonControlWrapper">
            <Select className="searchWrapper" defaultValue={1}>
              {reasons.map((item: any) => (
                <Option key={item.id} value={item.id}>{item.name}</Option>
              ))}
            </Select>
            <div className="spacer"></div>
            <Select className="searchWrapper" defaultValue={1}>
              {reasons.map((item: any) => (
                <Option key={item.id} value={item.id}>{item.name}</Option>
              ))}
            </Select>
          </div>
        </Col>
      )}
      <Col span={10} className="frx-grid-mytasks-detail__subtask-notes">
        <div className="workFlowNotes">NOTE</div>
        <div className="workflowNotelist">
          <List
            dataSource={userNotes}
            renderItem={(item: any) => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={<div>{item.name}<span style={{ color: '#C4C4C4', marginLeft: '15px', fontWeight: 'normal', fontStyle: 'italic', fontSize: '12px' }}>{item.timeago}</span></div>}
                  description={<div><p>{item.desc}</p><p style={{ color: '#707683', marginTop: '1em' }}>Version 1</p></div>}
                />
              </List.Item>
            )}
          />
        </div>
        <div className="workflowNoteForm">
          <Form
            name="noteForm"
            layout="inline"
            onFinish={handleSubmitNoteForm}
          >
            <Form.Item name="note" rules={[{ required: true, message: 'Note name is required!' }]}>
              <Input placeholder="Add a note." />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                {'Save Note'}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  )
}