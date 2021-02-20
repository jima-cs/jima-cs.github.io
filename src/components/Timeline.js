import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import { Step,Grid, Avatar,makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    gridContainer: {
        height:'100%',
        alignItems: 'flex-start',
    },
    gridItem1: {
        textAlign : 'right',
    },
    typoType1: {
        right : '0%',
    },
    timeLineElement: {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        height:'100%'
    },
    circleBase: {
        margin: 'auto',
        borderRadius: '50%',
        width: '20px',
        height: '20px',
        left:'50%',
        background: '#A6DAF7',
        border: '0px solid red',
    },
    verticalLine: {
        color:'#53737B',
        display : 'inline-block',
        minHeight: '110px',
        height:'100%',
        borderLeft: '2px solid',
    },
    avatarType: {
        display: 'block',
        margin: 'auto',
        width:'110px',
        height:'110px',
        alignContent:'center',
        position: 'relative'
    }
}));

function TimelineEntry(props){
    const classes = useStyles();
    const element = props.element;
    return (
        <Grid container className={classes.gridContainer}>
            <Grid xs = {3} item className = {classes.gridItem1}>
                <Typography variant = 'h6' className = {classes.typoType1}>
                    {element.duration}
                </Typography>
                <Typography variant = 'h6' className = {classes.typoType1}>
                    {element.city + ', ' + element.country}
                </Typography>
            </Grid>
            <Grid item xs = {1} className = {classes.timeLineElement}>
                <div className={classes.circleBase}></div>
                <div className={classes.verticalLine}></div>
            </Grid>
            <Grid item xs = {6}>
                <Typography variant = 'h5'>
                    {element.title}
                </Typography>
                <Typography variant = 'h6'>
                    {element.affiliation}
                </Typography>
                <Typography variant = 'h6'>
                    {element.description}
                </Typography>
            </Grid>
            <Grid item xs = {2}>
                <Avatar variant="square" src = {element.src} className={classes.avatarType}/>
            </Grid>
        </Grid>
    )
}

function VerticalTimeline(props) {
    return (
        props.experience.map((value,index) => {
            return (<TimelineEntry 
                    element={value}
                    key= {index}
                    />)
          })
    )
}
export default VerticalTimeline;