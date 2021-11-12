import React from 'react';
import { Box, Typography } from "@material-ui/core";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: 'relative'
  },
  innertext: {
    textAlign: 'center',
    width: 200,
    height: 24,
    lineHeight: '24px',
    fontSize: 12,
    fontWeight: 600,
    color: '#666666'   
  },
  progressbar: {
    height: '24px !important',
    borderRadius: '15px',
    width: '200px !important',
    border: '1px solid #E5E5E5',
  },
  redbar: {
    backgroundColor: '#FDD6C6',
    border: '1px solid rgba(246, 90, 28, 0.25)'
  },
  greenbar: {
    backgroundColor: '#DFF0E0',
  },
  yellowbar: {
    backgroundColor: '#FCEBD8',
    border: '1px solid rgba(244, 175, 100, 0.25)'
  }
});

export default function FrxProgressBar(props: any) {
  const classes = useStyles();

  const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
      borderRadius: 15,
      border: '1px solid #E5E5E5'
    },
    bar: {
      borderRadius: 15,
      backgroundColor: parseProgressValue(props.value),
      border: `1px solid ${parseProgressValue(props.value)}`
    },
  }))(LinearProgress);

  const parseProgressValue = (value: number) => {
    if (value >= 0 && value <= 50) return '#DFF0E0';
    else if (value > 50 && value < 100) return '#FCEBD8';
    else if (value >= 100) return '#FDD6C6';
  }

  return (
    <Box position="relative" display="inline-flex">
      <BorderLinearProgress variant="determinate" color="primary" className={classes.progressbar} value={props.value || 0} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="textSecondary" className={classes.innertext}>{props.content || ""}</Typography>
      </Box>
    </Box>
  );
}