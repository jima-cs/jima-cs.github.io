import React, { useState, useEffect, useRef } from 'react'
import Typography from '@material-ui/core/Typography';
import { useMediaQuery, Paper, makeStyles, Button } from '@material-ui/core';

const defaultImgHeight = 150

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
        position: 'relative',
        textAlign: 'left',
        width: '60%'
    },
    typo1: {
        fontSize: 20,
        fontWeight: 'bold',
        display: 'block'
    },
    typo2: {
        fontSize: 14,
        display: 'inline'
    },
    typo3: {
        fontSize: 14,
        fontStyle: 'italic',
        display: 'block'
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
        width: '100%',
        position: 'relative',
        textAlign: 'left',
    },
    typo1: {
        fontSize: 14,
        fontWeight: 'bold',
        display: 'block'
    },
    typo2: {
        fontSize: 12,
        lineBreak: 'strict',
        display: 'inline'
    },
    typo3: {
        fontSize: 12,
        fontStyle: 'italic',
        display: 'block'
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

function PublicationElement(props) {
    const matches = useMediaQuery('(min-width:900px)');
    const style1 = usePCStyles();
    const style2 = useMBStyles();
    const classes = matches? style1: style2;

    const [height, setHeight] = useState(defaultImgHeight)
    const ref = useRef(null)

    useEffect(() => {
        if (!matches)
            setHeight(ref.current.clientHeight)
    }, ref)

    const element = props.element;
    return (
        <Paper className={classes.paper} elevation={0}>
            <div className={classes.imageWrapper}
            // style={{ height: `${height}px` }}
            >
                <img src={element.src} className={classes.face}
                // style={{ height: `${height}px` }}
                />
            </div>
            <div className={classes.intro} ref={ref}>
                <Typography className={classes.typo1}>
                    {element.title}
                </Typography>
                <Typography className={classes.typo2}>
                    {element.authors.split("Ji Ma")[0]}
                </Typography>
                <Typography className={classes.typo2} style={{ fontWeight: 'Bold' }}>
                    Ji Ma
                </Typography>
                <Typography className={classes.typo2}>
                    {element.authors.split("Ji Ma")[1]}
                </Typography>
                <Typography className={classes.typo3}>
                    {element.conference}
                </Typography>
                <div>
                    <Button
                        target="_blank"
                        href={element.paper_url}
                        variant="contained"className={classes.button}>
                        Paper
                    </Button>
                    {
                        element.video_url == '' ?
                            null :
                            <Button
                                target="_blank" href={element.video_url} variant="contained"
                                className={classes.button}>
                                Video
                            </Button>
                    }
                </div>
            </div>
        </Paper>
    )
}

function Publications(props) {
    const matches = useMediaQuery('(min-width:900px)');
    const style1 = usePCStyles();
    const style2 = useMBStyles();
    const classes = matches? style1: style2;
    return (
        <div>
            <Typography className={classes.title}>
                Publications
            </Typography>
            {props.publications.map((value, index) => {
                return (<PublicationElement
                    element={value}
                    key={index}
                />)
            })}
        </div>
    )
}
export default Publications;
