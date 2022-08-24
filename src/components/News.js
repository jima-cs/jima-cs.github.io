import React from 'react';
import {Typography,makeStyles, useMediaQuery} from '@material-ui/core'


const usePCStyles = makeStyles(theme => ({
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        margin: '5px'
    },
    paper: {
        padding: '15px',
        margin: '5px',
        display: 'flex',
        alignItems: 'start',
    },
    imageWrapper: {
        display: 'block',
        width: '40%',
        height: '100%'
    },
    face: {
        objectFit: 'scale-down',
        position: 'relative',
        width: '90%',
    },
    intro: {
        fontFamily: "Roboto, Arial, Sans-Serif",
        fontSize: 16
    },
    button: {
        margin: theme.spacing(1),
        height: '25px',
        fontSize: 12,
        backgroundColor: "#AAAAAA", 
        color: '#FDFEFE'
    },
}));

const useMBStyles = makeStyles(theme => ({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: '5px'
    },
    paper: {
        padding: '15px',
        margin: '5px',
    },
    imageWrapper: {
        width: '100%'
    },
    face: {
        objectFit: 'scale-down',
        position: 'relative',
        maxWidth: '80%',
        maxHeight: '200px'
    },
    intro: {
        fontFamily: "Roboto, Arial, Sans-Serif",
        fontSize: 12
    },
    button: {
        margin: theme.spacing(1),
        width: '40px',
        height: '25px',
        fontSize: 12,
        backgroundColor: "#AAAAAA", 
        color: '#FDFEFE'
    },
}));

function News(props) {
    const matches = useMediaQuery('(min-width:900px)');
    const style1 = usePCStyles();
    const style2 = useMBStyles();
    const classes = matches? style1: style2;
    return (
        <div>
            <Typography className={classes.title}>
                News
            </Typography>
            <ul className={classes.intro}>
            {props.news.map((value, index) => {
                return (<li
                    key={index}
                >{`${value.date}: ${value.content}`}</li>)
            })}
            </ul>
        </div>
    )
}
export default News;