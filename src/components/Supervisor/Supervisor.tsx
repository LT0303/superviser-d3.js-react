import React, { useState } from 'react';
import { Space, Select, Collapse, Row, Col, Table, Tabs } from 'antd';
import MyTasksDetail from "../MyTasks/components/MyTasksDetail";
import FrxGridContainer from '../shared/FrxGrid/FrxDrugGridContainer';
import { assignedTasksGridColumns } from "../../utils/grid/columns";
import { getSupervisorTaskGridMockData } from "../../mocks/grid/mytasks-mock";

import "./Supervisor.scss";
import FrxDonutChart from '../shared/FrxDonutChart/FrxDonutChart';

const { Option } = Select;
const { Panel } = Collapse;
const { TabPane } = Tabs;


const moduleMockData = [
  {
    label: 'Formulary',
    value: 'formulary'
  },
  {
    label: 'Benefits',
    value: 'benefits'
  },
  {
    label: 'Network',
    value: 'network'
  },
  {
    label: 'Pharmacy Services',
    value: 'pharmacy',
  },
  {
    label: 'Plan',
    value: 'plan'
  },
  {
    label: 'Prescriber Network',
    value: 'prescriber'
  }
]

const chartMockData = [
  {
    key: "missed",
    color: '#F65A1C',
    value: 31,
  },
  {
    key: "critical",
    color: '#E5AC25',
    value: 1,
  },
  {
    key: "medium",
    value: 2,
    color: '#5069C5'
  },
  {
    key: "low",
    value: 5,
    color: '#59B35E'
  },
];

const dataSource = [
  {
    key: '1',
    users: 'Unassigned',
    tasks: 35,
    missed: 31,
    critical: 1,
    medium: 2,
    low: 1
  },
  {
    key: '2',
    users: 'Elizabeth Noorji',
    tasks: 48,
    missed: 43,
    critical: 0,
    medium: 0,
    low: 5
  },
  {
    key: '3',
    users: 'Lalith Denduluri',
    tasks: 893,
    missed: 543,
    critical: 5,
    medium: 203,
    low: 5
  },
  {
    key: '4',
    users: 'Caitlin C',
    tasks: 1,
    missed: 0,
    critical: 0,
    medium: 0,
    low: 1
  },
];

const columns = [
  {
    title: 'Users',
    dataIndex: 'users',
    key: 'users',
  },
  {
    title: 'Tasks',
    dataIndex: 'tasks',
    key: 'tasks',
  },
  {
    title: 'Missed',
    dataIndex: 'missed',
    key: 'missed',
  },
  {
    title: 'Critical',
    dataIndex: 'critical',
    key: 'critical',
  },
  {
    title: 'Medium',
    dataIndex: 'medium',
    key: 'medium',
  },
  {
    title: 'Low',
    dataIndex: 'low',
    key: 'low',
  }
];

const ChartHeader = () => {
  return (
    <Space align="start" direction="horizontal" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
      <h3>Supervisor View</h3>
      <Select defaultValue="formulary" className="module-select">
        {moduleMockData.map((m: any, i: number) => (
          <Option key={i} value={m.value}>{m.label}</Option>
        ))}
      </Select>
      <div className="total-count">
        <p className="total-count__label">total</p>
        <p className="total-count__value">1301</p>
      </div>
      <div className="unassigned-count">
        <p className="unassigned-count__label">unassigned</p>
        <p className="unassigned-count__value">35</p>
      </div>
      <div className="assigned-count">
        <p className="assigned-count__label">assigned</p>
        <p className="assigned-count__value">1266</p>
      </div>
    </Space>
  )
}

const ChartContent = () => {  
  return (
    <div className="chart-content__wrap">
      <Row gutter={[10, 10]}>
        <Col span={6}>
          <Space align="center">
            <div className="chartview"><FrxDonutChart data={chartMockData} /></div>            
            <div className="listview">
              {chartMockData.map((c: any, i: number) => (
                <div className="listitem" key={i}>
                  <div className="color" style={{ background: c.color }}></div>
                  <p className="title">{c.key}</p>
                  <p className="count">{`${c.value} tasks`}</p>
                </div>
              ))}
            </div>
          </Space>
        </Col>
        <Col span={18}>
          <Table bordered pagination={false} dataSource={dataSource} columns={columns} />
        </Col>
      </Row>
    </div>
  )
}

const GridView = (props: any) => {
  const [pageCount, handlePageSize] = useState<number>(10);
  const [columns, handleTableColums] = useState<any[]>(assignedTasksGridColumns());
  const [tableData, handleTableData] = useState<any[]>(getSupervisorTaskGridMockData());
  const [totalCount, handleTotalCount] = useState<number>(getSupervisorTaskGridMockData().length);

  const handlePagination = () => { }

  const handlePageItemSize = () => { }

  const handleApplyFilter = () => { }

  const handleClearFilter = () => { }

  return (
    <FrxGridContainer
      enableSearch
      enableColumnDrag
      onSearch={() => { }}
      enableSettings={false}
      fixedColumnKeys={[]}
      gridName=""
      pageSize={pageCount}
      rowSelection={{
        type: "checkbox"
      }}
      isFetchingData={false} // if data is fetching from server everytime based on pagination -> false
      columns={columns}
      data={tableData}
      pagintionPosition="topRight"
      onSettingsClick="grid-menu"
      scroll={{ x: 0, y: 0 }}
      totalRowsCount={totalCount}
      onGridPageChangeHandler={handlePagination}
      getPerPageItemSize={handlePageItemSize}
      applyFilter={handleApplyFilter}
      clearFilterHandler={handleClearFilter}
      expandable={{
        isExpandable: true,
        expandIconColumnIndex:
        assignedTasksGridColumns().length + 1,
        expandedRowRender: (props) => (
          <MyTasksDetail {...props} />
        ),
        expandCloseIcon: (
          <span>
            <svg
              width="9"
              height="5"
              viewBox="0 0 9 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.223752 0.24549C0.531543 -0.0693596 0.960049 -0.0940675 1.33632 0.24549L4.09513 2.89065L6.85395 0.24549C7.23022 -0.0940675 7.65943 -0.0693596 7.9651 0.24549C8.27289 0.559634 8.25313 1.0905 7.9651 1.38559C7.67849 1.68067 4.65071 4.56373 4.65071 4.56373C4.57861 4.63846 4.49219 4.69789 4.39662 4.73849C4.30104 4.77908 4.19827 4.8 4.09443 4.8C3.99059 4.8 3.88782 4.77908 3.79224 4.73849C3.69666 4.69789 3.61025 4.63846 3.53815 4.56373C3.53815 4.56373 0.511776 1.68067 0.223752 1.38559C-0.0649778 1.0905 -0.0840382 0.559634 0.223752 0.24549Z"
                fill="#999999"
              />
            </svg>
          </span>
        ),
        expandOpenIcon: (
          <span>
            <svg
              width="5"
              height="9"
              viewBox="0 0 5 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.245493 7.96947C-0.0693603 7.6615 -0.0940685 7.23274 0.245493 6.85625L2.89068 4.09578L0.245492 1.33532C-0.0940688 0.958827 -0.0693606 0.529358 0.245492 0.223503C0.559639 -0.0844708 1.09051 -0.0646925 1.3856 0.223503C1.68069 0.510286 4.56378 3.53987 4.56378 3.53987C4.63851 3.61202 4.69794 3.69849 4.73853 3.79412C4.77913 3.88975 4.80005 3.99259 4.80005 4.09649C4.80005 4.20039 4.77913 4.30322 4.73853 4.39886C4.69794 4.49449 4.63851 4.58096 4.56378 4.6531C4.56378 4.6531 1.68069 7.68128 1.3856 7.96947C1.09051 8.25838 0.55964 8.27745 0.245493 7.96947Z"
                fill="#323C47"
              />
            </svg>
          </span>
        ),
      }}
    />
  )

}

export default function Supervisor(props: any) {
  return (
    <div className="supervisor-view-container">
      <div className="chart-container">
        <div className="chart-container__header">
          <Collapse defaultActiveKey={['1']} expandIconPosition="right">
            <Panel header={<ChartHeader />} key="1">
              <ChartContent />
            </Panel>
          </Collapse>
        </div>
        <div className="chart-container__content"></div>
      </div>
      <div className="grid-container">
        <div className="card-container">
          <Tabs type="card">
            <TabPane tab="Unassigned Tasks" key="1">
              <GridView />
            </TabPane>
            <TabPane tab="Assigned Tasks" key="2">
              <GridView />
            </TabPane>
            <TabPane tab="All Tasks" key="3">
              <GridView />
            </TabPane>
          </Tabs>
        </div>
        <div className="spacer"></div>
      </div>
    </div>
  )
}