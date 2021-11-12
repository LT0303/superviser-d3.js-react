import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Box from '@material-ui/core/Box'
import CardContent from '@material-ui/core/CardContent'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import DeleteIcon from '@material-ui/icons/Delete'
// components
import Sidebar from './sidebar'
import data from './data.json'
import DescriptionCard from './descriptionCard'

import './style.scss'
import { Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  card: {
    border: '1px solid #E5E5E5',
    boxShadow: 'none',
    width: '1200px'
  },
  rightPanel: {
    maxHeight: 700,
    overflowY: 'scroll',
  },
  header: {
    borderBottom: '1px solid #E5E5E5',
    padding: theme.spacing(3),
  },
  action: {
    background: '#F9F9F9',
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  link: {
    color: '#666666',
  },
  actionButton: {
    margin: theme.spacing(0, 2),
  },

  h6: {
    fontSize: '16px',
  },

  spanText: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
    color:'#707689'
  }
}))

const Header = ({ onExpand }: any) => {
  const classes = useStyles()
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Typography variant="h6" className={classes.h6}>Advanced Search</Typography>
      <IconButton size="small">
        <ExpandMoreIcon fontSize="small" onClick={onExpand} />
      </IconButton>
    </Box>
  )
}

const AddRemovePanel = () => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(true)
  const [sections, setSections] = useState<any>([])
  const [visibility, setVisibility] = useState(false)

  const handleExpand = () => {
    setExpanded(!expanded)
  }

  const handleDelete = (index: number) => {
    const filteredData = sections.filter((_: any, indx: number) => index !== indx)
    setSections(filteredData)
  }

  const sidebarCallBack = (visible) => {
    setVisibility(true)
  }

  return (
    <div className="advance-search-container">    
    <Card className={classes.card}>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Sidebar parentCallback={sidebarCallBack}/>
            </Grid>
            <Grid item xs={12} md={9}>
              {visibility && 
              <Box className={classes.rightPanel} pr={1}>
                {data.map(({ title, options }: any, index: number) => (
                  <Box display="flex" alignItems="center">
                    <DescriptionCard title={title} options={options} />
                    <IconButton size="small" onClick={() => handleDelete(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                ))}
              </Box>}
              {!visibility &&
              <span className={classes.spanText}>
                Drag the file type(s) from the list on the left to create a filter
              </span>}
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
    </div>
  )
}

export default AddRemovePanel
