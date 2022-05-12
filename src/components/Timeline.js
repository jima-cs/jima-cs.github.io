import React from 'react'
import Typography from '@material-ui/core/Typography';
import { useMediaQuery, Avatar, makeStyles } from '@material-ui/core';

const usePCStyles = makeStyles(theme => ({
    block: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-start',
    },
    left: {
        width: '15%',
        textAlign: 'right',
    },
    line: {
        width: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%'
    },
    circleBase: {
        margin: 'auto',
        borderRadius: '50%',
        width: '20px',
        height: '20px',
        left: '50%',
        background: '#AAAAAA',
        border: '0px solid red',
    },
    verticalLine: {
        color: '#24292e',
        display: 'inline-block',
        minHeight: '100px',
        height: '100%',
        borderLeft: '2px solid',
    },
    right: {
        width: '45%'
    },
    logo: {
        height: `80px`,
        width: `80px`
    },
    typo1: {
        display: 'block',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: '5px'
    },
    typo2: {
        display: 'block',
        fontSize: 16,
        marginBottom: '5px'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        margin: '5px'
    }
}));

const useMBStyles = makeStyles(theme => ({
    block: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'flex-start',
    },
    left: {
        width: '150px',
        textAlign: 'right',
    },
    line: {
        width: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%'
    },
    circleBase: {
        margin: 'auto',
        borderRadius: '50%',
        width: '20px',
        height: '20px',
        left: '50%',
        background: '#AAAAAA',
        border: '0px solid red',
    },
    verticalLine: {
        color: '#24292e',
        display: 'inline-block',
        minHeight: '110px',
        height: '100%',
        borderLeft: '2px solid',
    },
    right: {
        width: '60%',
    },
    logoWrapper: {
        display: 'block',
        width: `calc(20% - 180px)`,
        height: 'auto'
    },
    logo: {
        width: '40px'
    },
    typo1: {
        display: 'block',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: '5px'
    },
    typo2: {
        display: 'block',
        fontSize: 12,
        marginBottom: '5px'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: '5px'
    }
}));

function TimelineEntry(props) {
    const matches = useMediaQuery('(min-width:900px)');
    const style1 = usePCStyles();
    const style2 = useMBStyles();
    const classes = matches ? style1 : style2;
    const element = props.element;
    return (
        <div className={classes.block}>
            <div className={classes.left}>
                <Typography className={classes.typo2}>
                    {element.duration}
                </Typography>
                <Typography className={classes.typo2}>
                    {element.city + ', ' + element.country}
                </Typography>
            </div>
            <div className={classes.line}>
                <div className={classes.circleBase}></div>
                <div className={classes.verticalLine}></div>
            </div>
            {matches ?
                <div className={classes.right}>
                    <Typography className={classes.typo1}>
                        {element.title}
                    </Typography>

                    <Typography className={classes.typo2}>
                        {element.affiliation}
                    </Typography>
                    <Typography className={classes.typo2}>
                        {element.description}
                    </Typography>
                </div> :
                <div className={classes.right}>
                    <Typography className={classes.typo1}>
                        {element.title}
                    </Typography>
                    <Avatar variant="square" src={element.src} className={classes.logo} />
                    <Typography className={classes.typo2}>
                        {element.affiliation}
                    </Typography>
                    <Typography className={classes.typo2}>
                        {element.description}
                    </Typography>
                </div>
            }
            {matches?
            <Avatar variant="square" src={element.src} className={classes.logo}/>:null}

        </div>
    )
}

function Timeline(props) {
    const matches = useMediaQuery('(min-width:900px)');
    const style1 = usePCStyles();
    const style2 = useMBStyles();
    const classes = matches ? style1 : style2;
    return (
        <div>
            <Typography className={classes.title}>
                Experience
            </Typography>
            {props.experience.map((value, index) => {
                return (<TimelineEntry
                    element={value}
                    key={index}
                />)
            })}
        </div>
    )
}
export default Timeline;