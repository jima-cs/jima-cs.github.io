import React from 'react'
import ReactDom from 'react-dom'
import Grid from '@material-ui/core/Grid'
import {Avatar, Typography} from '@material-ui/core'
import VerticalTimeline from './components/Timeline'
import PersonalIntro from './components/personalIntro'
import Publications from './components/Publication'
import { makeStyles } from '@material-ui/styles'
import logo from './assets/IDG-simplified.gif';

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
            duration:'Dec. 2020 - Apr. 2021',
            city:'Beijing',
            country:'China',
            title:'Research Intern',
            affiliation:'Microsoft Research Asia',
            description:'Under the supervision of Dr. Weiwei Cui',
            src:'./imgs/microsoft.png'
        },
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
            title:'Tac-Valuer: Knowledge-based Stroke Evaluation in Table Tennis',
            authors:'Jiachen Wang*, Dazhen Deng*, Xiao Xie, Xinhuan Shu, Yu-Xuan Huang, Le-Wen Cai, Hui Zhang, Min-Ling Zhang, Zhi-Hua Zhou, and Yingcai Wu (* denotes equal contribution)',
            conference:'The ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD 2021)',
            paper_url:'https://zjuidg.org/source/projects/tacValuer/tacValuer.pdf',
            video_url:'',
            src:'./imgs/tac-valuer.png'
        },
        {
            title:'EventAnchor: Reducing Human Interactions in Event Annotation of Racket Sports Videos',
            authors:'Dazhen Deng, Jiang Wu, Jiachen Wang, Yihong Wu, Xiao Xie, Zheng Zhou, Hui Zhang, Xiaolong Zhang, and Yingcai Wu',
            conference:'CHI Conference on Human Factors in Computing Systems (CHI \'21)',
            paper_url:'https://zjuidg.org/source/projects/eventanchor/eventanchor.pdf',
            video_url:'',
            src:'./imgs/eventanchor.png'
        },
        {
            title:'PassVizor: Toward Better Understanding of the Dynamics of Soccer Passes',
            authors:'Xiao Xie, Jiachen Wang, Hongye Liang, Dazhen Deng, Shoubin Cheng, Hui Zhang, Wei Chen, and Yingcai Wu',
            conference:'IEEE Transactions on Visualization and Computer Graphics, 2021.',
            paper_url:'https://zjuidg.org/source/projects/passvizor/passvizor.pdf',
            video_url:'',
            src:'./imgs/passvizor.png'
        },
        {
            title:'Tac-Simur: Tactic-based Simulative Visual Analytics of Table Tennis',
            authors:'Jiachen Wang, Kejian Zhao, Dazhen Deng, Anqi Cao, Xiao Xie, Zheng Zhou, Hui Zhang, and Yingcai Wu',
            conference:'IEEE Transactions on Visualization and Computer Graphics, Vol. 26, Issue 1, Page 407-417, 2020.',
            paper_url:'https://zjuidg.org/source/projects/tacSimur/Tac-Simur.pdf',
            video_url:'https://www.youtube.com/watch?v=_I6cne3Wd4U&feature=youtu.be',
            src:'./imgs/tac-simur.png'
        },
        {
            title:'ForVizor: Visualizing Spatio-Temporal Team Formations in Soccer',
            authors:'Yingcai Wu, Xiao Xie, Jiachen Wang, Dazhen Deng, Hongye Liang, Hui Zhang, Shoubin Cheng, and Wei Chen',
            conference:'IEEE Transactions on Visualization and Computer Graphics (IEEE VAST 2018), Vol. 25, Issue 1, Page 65-75, 2019.',
            paper_url:'https://zjuidg.org/source/projects/forvizor/forvizor.pdf',
            video_url:'https://www.youtube.com/watch?v=03U7PESGkOQ',
            src:'./imgs/forvizor.png'
        },
    ]}

const useStyles = makeStyles(theme => ({
        gridContainer: {
            height:'80px',
            marginTop: '20px',
            display:'flex',
            alignItems:'center',
            backgroundColor:'#24292e'
        },
        avatar: {
            backgroundColor:theme.primary,
            height: '80px',
            width: '80px'
        }
    }));

const App = () => {
    const classes = useStyles();
    return (
        <div style = {{marginLeft:'21%',marginRight:'21%'}} id = {'main'}>
            <div>
                <Grid 
                    container 
                    spacing = {2} 
                    className = {classes.gridContainer}>
                    <Grid item xs = {8} >
                        <Typography variant = 'h3' style={{color:'#FDFEFE'}}>
                            Dazhen Deng (邓达臻)
                        </Typography>
                    </Grid>
                    <Grid item xs = {2}>
                        
                    </Grid>
                    <Grid className={classes.avatar} item xs = {2}>
                        <a  href='https://zjuidg.org/'>
                        <img src={logo}  width = '60px'/>
                        </a>
                    </Grid>
                </Grid>
            </div>
            <div>
                <PersonalIntro/>
            </div>
            <div style={{marginBottom:'30px'}}>
                <Typography variant = 'h4' style={{marginBottom:'30px'}}>
                    Experience
                </Typography>
                <VerticalTimeline experience={data.experience}/>
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