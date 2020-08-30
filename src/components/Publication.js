import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import { Step,Grid, Avatar,makeStyles, Button} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
      },
    gridContainer: {
        marginBottom: '30px',
        display: 'flex',
        alignItems: 'flex-start',
    },
    gridItem1: {
        position: 'relative',
        textAlign : 'left',
    },
    face: {
        objectFit : 'fill',
        position: 'relative',
        marginLeft: '5%',
        marginRight: '5%',
        width: '90%',
    },
    typoType1: {
        display: 'flex',
    }
}));

function PublicationElement(props){
    const classes = useStyles();
    const element = props.element;
    return (
        <Grid container className={classes.gridContainer}>
            <Grid xs = {4} item className = {classes.gridItem1}>
                <img src = {element.src} className = {classes.face}>
                </img>
            </Grid>
            <Grid item xs = {8} className = {classes.gridItem1}>
                <Typography variant='h5' className = {classes.typoType1}>
                    {element.title}
                </Typography>
                <Typography variant='h6' className = {classes.typoType1}>
                    {element.authors}
                </Typography>
                <Typography variant='h6' className = {classes.typoType1}>
                    {element.conference}
                </Typography>
                <div>
                    <Button target="_blank" href={element.paper_url} variant="contained" color="secondary" className={classes.button}>
                        Paper
                    </Button>
                    <Button target="_blank" href={element.video_url} variant="contained" color="primary" className={classes.button}>
                        Video
                    </Button>
                </div>
            </Grid>
            
        </Grid>
    )
}

function Publications(props) {
    return (
        props.publications.map((value,index) => {
            return (<PublicationElement 
                    element={value}
                    key= {index}
                    />)
          })
    )
}
export default Publications;