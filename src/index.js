import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import VerticalTimeline from './components/Timeline'
import PersonalIntro from './components/personalIntro'
import Publications from './components/Publication'
import { makeStyles } from '@material-ui/styles'

const data = {
    education:[
        {
            duration:'Sep. 2018 - Present',
            city:'Hangzhou',
            country:'China',
            title:'Ph.D. Candidate',
            affiliation:'State Key Lab of CAD&CG, Zhejiang University',
            description:'Under the supervision of Prof. Yingcai Wu',
            src:'./imgs/zju.png'
        },
        {
            duration:'Sep. 2014 - Jun. 2018',
            city:'Hangzhou',
            country:'China',
            title:'Undergraduate Student',
            affiliation:'School of Mathematical Sciences, Zhejiang University',
            description:'BSc of Applied Mathematics',
            src:'./imgs/zju.png'
        }
    ],
    experience:[
        {
            duration:'Sep. 2018 - Present',
            city:'Hangzhou',
            country:'China',
            title:'Ph.D. Candidate',
            affiliation:'State Key Lab of CAD&CG, Zhejiang University',
            description:'Under the supervision of Prof. Yingcai Wu',
            src:'./imgs/zju.png'
        },
        {
            duration:'Sep. 2014 - Jun. 2018',
            city:'Hangzhou',
            country:'China',
            title:'Undergraduate Student',
            affiliation:'School of Mathematical Sciences, Zhejiang University',
            description:'BSc of Applied Mathematics',
            src:'./imgs/zju.png'
        }
    ],
    publications:[
        {
            title:'Tac-Simur: Tactic-based Simulative Visual Analytics of Table Tennis',
            authors:'Jiachen Wang, Kejian Zhao, Dazhen Deng, Anqi Cao, Xiao Xie, Zheng Zhou, Hui Zhang, and Yingcai Wu',
            conference:'To appear in IEEE TVCG (IEEE VAST 2019)',
            paper_url:'https://zjuidg.org/files/Tac-Simur.pdf',
            video_url:'https://www.youtube.com/watch?v=_I6cne3Wd4U&feature=youtu.be',
            src:'./imgs/tac-simur.png'
        },
        {
            title:'ForVizor: Visualizing Spatio-Temporal Team Formations in Soccer',
            authors:'Yingcai Wu, Xiao Xie, Jiachen Wang, Dazhen Deng, Hongye Liang, Hui Zhang, Shoubin Cheng, and Wei Chen',
            conference:'IEEE TVCG, 25.1 (2019), 65-75.(IEEE VAST 2018)',
            paper_url:'https://zjuidg.org/files/forvizor.pdf',
            video_url:'https://www.youtube.com/watch?v=03U7PESGkOQ',
            src:'./imgs/forvizor.png'
        },
    ]}

const useStyles = makeStyles(theme => ({
        gridContainer: {
            height:'80px',
            alignItems: 'flex-center',
            marginTop: '20px',
        }
    }));

const App = () => {
    const classes = useStyles();
    return (
        <div style = {{marginLeft:400,marginRight:400}} id = {'main'}>
            <div>
                <Grid container spacing = {2} className = {classes.gridContainer}>
                    <Grid item xs = {8} >
                        <Typography variant = 'h3'>
                            Dazhen Deng (邓达臻)
                        </Typography>
                    </Grid>
                    <Grid item xs = {2}>
                        
                    </Grid>
                    <Grid item xs = {2} style = {{textAlign:"center"}}>
                        <img src='./imgs/zjuidg.png' width = '60px'/>
                    </Grid>
                </Grid>
            </div>
            <div>
                <PersonalIntro/>
            </div>
            <div style={{marginBottom:'30px'}}>
                <Typography variant = 'h4' style={{marginBottom:'30px'}}>
                    Education
                </Typography>
                <VerticalTimeline experience={data.education}/>
            </div>
            {/* <div>
                <Typography variant = 'h4'>
                    Experience
                </Typography>
                <VerticalTimeline experience={data.experience}/>
            </div> */}
            <div>
                <Typography variant = 'h4' style={{marginBottom:'30px'}}>
                    Publications
                </Typography>
                <Publications publications={data.publications}/>
            </div>
        </div>
    )
};

ReactDom.render(
    <App/>,
    document.getElementById('root')
)