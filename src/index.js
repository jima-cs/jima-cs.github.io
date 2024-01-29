import React from 'react'
import ReactDom from 'react-dom'
import { Typography } from '@material-ui/core'
import Timeline from './components/Timeline'
import PersonalIntro from './components/personalIntro'
import Publications from './components/Publication'
import { makeStyles } from '@material-ui/styles'
import data from "./components/content";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './index.css';
import News from './components/News'



const usePCStyles = makeStyles(theme => ({
    root: {
        width: '100vw',
        height: '100vh'
    },
    main: {
        marginLeft: `calc(50% - 450px)`,
        width: '900px'
    },
    header: {
        height: '80px',
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#102158'
    },
    mainBody: {
        width: '100%',
        // height: `calc(100% - 40px)`,
        overflowY: 'auto'
    },
    typography: {
        fontSize: 30,
        margin: '15px',
        color: '#FDFEFE'
    },
    logo: {
        width: '60px',
        margin: '5px'
    },
    // foot:{
    //     textAlign:'center'
    // }
}));

const useMBStyles = makeStyles(theme => ({
    root: {
        width: '100vw',
        height: '100vh'
    },
    main: {
        width: '100vw',
        height: '100vh'
    },
    header: {
        width: '100%',
        height: '40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#102158'
    },
    mainBody: {
        width: '100%',
        // height: `calc(100% - 40px)`,
        overflowY: 'scroll'
    },
    typography: {
        fontSize: 18,
        margin: '5px',
        color: '#FDFEFE'
    },
    logo: {
        width: '20px',
        margin: '5px'
    }
}));

function App() {
    const matches = useMediaQuery('(min-width:900px)');
    const style1 = usePCStyles();
    const style2 = useMBStyles();
    const classes = matches? style1: style2;
    return (
        <div className={classes.main}>
            <div className={classes.header}>
                <Typography className={classes.typography}>
                    Ma Ji (马骥)
                </Typography>
                {/* <a href='https://zjuidg.org/'>
                    <img src={logo} className={classes.logo} />
                </a> */}
            </div>
            <div className={classes.mainBody}>
                <PersonalIntro content={data.intro} contact={data.contact}/>
                <Timeline experience={data.experience} />
                <News news={data.news} />
                <Publications publications={data.publications} />
            </div>
            <div style={{textAlign:'center',color:'#000'}}><a style={{color:'#000'}} href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2024062276号-1</a></div>
        </div>
    )
};

ReactDom.render(
    <App/>,
    document.getElementById('root')
)
// const root = ReactDOM.createRoot(
//     document.getElementById('root')
//   );

// const element = <h1>Hello, world</h1>;
// root.render(element);