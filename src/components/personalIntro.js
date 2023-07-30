import React from 'react';
import { Icon, Avatar, Typography,makeStyles, useMediaQuery} from '@material-ui/core'

const usePCStyles = makeStyles(theme => ({
    main: {
        display: 'flex',
        alignItems: 'flex-center',
        margin: '20px'
    },
    avatar: {
        display: 'block',
        margin: 'auto',
        width:'160px',
        height:'160px',
        alignContent:'center',
        position: 'relative'
    },
    introBlock: {
        margin: '20px'
    },
    intro: {
        fontSize: 16,
        lineBreak: 'strict',
        textAlign:'justify'
    },
    contactwrapper: {
        // display: 'flex'
    },
    inlinewrapper: {
        color: 'black',
        display: 'inline-flex'
    },
    inlineIcon: {
        width: '15px',
        margin: '2px',
        objectFit: 'scale-down',
    },
    contactText: {
        fontSize: 14,
        display: 'inline'
    },
}));

const useMBStyles = makeStyles(theme => ({
    main: {
        margin: '20px'
    },
    avatar: {
        display: 'block',
        margin: 'auto',
        width:'120px',
        height:'120px',
        alignContent:'center',
        position: 'relative'
    },
    introBlock: {
        margin: '20px'
    },
    intro: {
        fontSize: 14,
        textAlign:'justify'
    },
    contactwrapper: {
        // display: 'flex'
    },
    inlinewrapper: {
        color: 'black',
        display: 'inline-flex'
    },
    inlineIcon: {
        width: '15px',
        margin: '2px',
        objectFit: 'scale-down',
    },
    contactText: {
        fontSize: 14,
        display: 'inline'
    },
}));

function PersonalIntro(props) {
    const matches = useMediaQuery('(min-width:900px)');
    const style1 = usePCStyles();
    const style2 = useMBStyles();
    const classes = matches? style1: style2;
    return (
        <div className={classes.main}>
            <Avatar src = './imgs/avatar2.jpg' className = {classes.avatar}/>
            <div className={classes.introBlock}>
                <Typography className = {classes.intro}>
                    {props.content}
                </Typography>
                <div className={classes.contactwrapper}>
                    <Typography 
                    className={classes.contactText}>
                        Contact: 
                    </Typography>
                    {
                        props.contact.map((item) => (
                            <a className={classes.inlinewrapper} href={item.link}>
                                <img className={classes.inlineIcon} src={item.src}/>
                                <Typography  className={classes.contactText}>{item.name}</Typography>
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default PersonalIntro