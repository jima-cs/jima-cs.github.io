import React, { useState, useEffect, useRef } from 'react'
import Typography from '@material-ui/core/Typography';
import { Step, Grid, Paper, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: '15px',
        margin: '5px',
        display: 'flex',
        alignItems: 'flex-start',
    },
    imageWrapper: {
        width: '40%',
        height: '100%'
    },
    face: {
        objectFit: 'cover',
        position: 'relative',
        marginLeft: '5%',
        marginRight: '5%',
        width: '90%',
    },
    intro: {
        position: 'relative',
        textAlign: 'left',
        width: '60%'
    },
    typoType1: {
        display: 'block'
    },
    button: {
        margin: theme.spacing(1),
    },
}));

function PublicationElement(props) {
    const classes = useStyles();

    const [height, setHeight] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
        setHeight(ref.current.clientHeight)
    }, ref)

    const element = props.element;
    return (
        <Paper className={classes.paper}>
            <div className={classes.imageWrapper}>
                <img src={element.src} className={classes.face} 
                    style={{height: `${height}px`}}
                />
            </div>
            <div className={classes.intro} ref={ref}>
                <Typography variant='h6' className={classes.typoType1}>
                    {element.title}
                </Typography>
                <Typography variant='h7'>
                    {element.authors.split("Dazhen Deng")[0]}
                </Typography>
                <Typography variant='h7' style={{fontWeight: 'Bold'}}>
                    Dazhen Deng
                </Typography>
                <Typography variant='h7'>
                    {element.authors.split("Dazhen Deng")[1]}
                </Typography>
                <Typography variant='h7' className={classes.typoType1}>
                    {element.conference}
                </Typography>
                <div>
                    <Button target="_blank" href={element.paper_url} variant="contained" style={{ backgroundColor: "#AAAAAA", color: '#FDFEFE' }} className={classes.button}>
                        Paper
                    </Button>
                    {
                        element.video_url == '' ? null : <Button target="_blank" href={element.video_url} variant="contained" style={{ backgroundColor: "#AAAAAA", color: '#FDFEFE' }} className={classes.button}>
                            Video
                        </Button>}
                </div>
            </div>
        </Paper>
    )
}

function Publications(props) {
    return (
        props.publications.map((value, index) => {
            return (<PublicationElement
                element={value}
                key={index}
            />)
        })
    )
}
export default Publications;