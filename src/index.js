import React from 'react'
import ReactDom from 'react-dom'
import { Typography } from '@material-ui/core'
import Timeline from './components/Timeline'
import PersonalIntro from './components/personalIntro'
import Publications from './components/Publication'
import { makeStyles } from '@material-ui/styles'
import logo from './assets/IDG-simplified.gif';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './index.css';


const data = {
    intro: "I'm a 4th-year Computer Science Ph.D. candidate at the State Key Lab of CAD&CG, Zhejiang University, under the supervision of Prof. Yingcai Wu. My research interest lies in machine learning for visualization, visual analytics for sports, and computer vision.",
    contact: [
        {
            src: './imgs/email.png',
            name: 'dengdazhen@outlook.com',
            link: 'mailto:dengdazhen@outlook.com'
        },
        {
            src: './imgs/googlescholar.png',
            name: 'Google Scholar',
            link: 'https://scholar.google.com/citations?user=opQZa-EAAAAJ&hl=en'
        }
    ],
    education: [
        {
            duration: 'Sep. 2018 - Present',
            city: 'Hangzhou',
            country: 'China',
            title: 'Ph.D. Candidate',
            affiliation: 'State Key Lab of CAD&CG, Zhejiang University',
            description: 'Under the supervision of Prof. Yingcai Wu',
            src: './imgs/zju.png'
        },
        {
            duration: 'Sep. 2014 - Jun. 2018',
            city: 'Hangzhou',
            country: 'China',
            title: 'Undergraduate Student',
            affiliation: 'School of Mathematical Sciences, Zhejiang University',
            description: 'BSc of Applied Mathematics',
            src: './imgs/zju.png'
        }
    ],
    experience: [
        {
            duration: 'Dec. 2020 - Apr. 2021',
            city: 'Beijing',
            country: 'China',
            title: 'Research Intern',
            affiliation: 'Microsoft Research Asia',
            description: 'Supervised by Dr. Weiwei Cui',
            src: './imgs/microsoft.png'
        },
        {
            duration: 'Sep. 2018 - Present',
            city: 'Hangzhou',
            country: 'China',
            title: 'Ph.D. Candidate',
            affiliation: 'State Key Lab of CAD&CG, Zhejiang University',
            description: 'Supervised by Prof. Yingcai Wu',
            src: './imgs/zju.png'
        },
        {
            duration: 'Sep. 2014 - Jun. 2018',
            city: 'Hangzhou',
            country: 'China',
            title: 'Undergraduate Student',
            affiliation: 'School of Mathematical Sciences, Zhejiang University',
            description: 'BSc of Applied Mathematics',
            src: './imgs/zju.png'
        }
    ],
    publications: [
        {
            title: 'VisImages: A Fine-Grained Expert-Annotated Visualization Dataset',
            authors: 'Dazhen Deng, Yihong Wu, Xinhuan Shu, Jiang Wu, Siwei Fu, Weiwei Cui, and Yingcai Wu',
            conference: 'IEEE Transactions on Visualization and Computer Graphics (To Appear, 2022)',
            paper_url: 'https://zjuidg.org/source/projects/visimages/visimages.pdf',
            video_url: '',
            src: './imgs/visimages.png'
        },
        {
            title: 'Tac-Valuer: Knowledge-based Stroke Evaluation in Table Tennis',
            authors: 'Jiachen Wang*, Dazhen Deng*, Xiao Xie, Xinhuan Shu, Yu-Xuan Huang, Le-Wen Cai, Hui Zhang, Min-Ling Zhang, Zhi-Hua Zhou, and Yingcai Wu (* denotes equal contribution)',
            conference: 'The ACM SIGKDD Conference on Knowledge Discovery and Data Mining (ACM SIGKDD 2021)',
            paper_url: 'https://zjuidg.org/source/projects/tacValuer/tacValuer.pdf',
            video_url: '',
            src: './imgs/tac-valuer.png'
        },
        {
            title: 'EventAnchor: Reducing Human Interactions in Event Annotation of Racket Sports Videos',
            authors: 'Dazhen Deng, Jiang Wu, Jiachen Wang, Yihong Wu, Xiao Xie, Zheng Zhou, Hui Zhang, Xiaolong Zhang, and Yingcai Wu',
            conference: 'CHI Conference on Human Factors in Computing Systems (ACM SIGCHI 2021)',
            paper_url: 'https://zjuidg.org/source/projects/eventanchor/eventanchor.pdf',
            video_url: '',
            src: './imgs/eventanchor.png'
        },
        {
            title: 'PassVizor: Toward Better Understanding of the Dynamics of Soccer Passes',
            authors: 'Xiao Xie, Jiachen Wang, Hongye Liang, Dazhen Deng, Shoubin Cheng, Hui Zhang, Wei Chen, and Yingcai Wu',
            conference: 'IEEE Transactions on Visualization and Computer Graphics (IEEE VIS 2020), Vol. 27, Issue 2, Page 1322-1331, 2020',
            paper_url: 'https://zjuidg.org/source/projects/passvizor/passvizor.pdf',
            video_url: '',
            src: './imgs/passvizor.png'
        },
        {
            title: 'Tac-Simur: Tactic-based Simulative Visual Analytics of Table Tennis',
            authors: 'Jiachen Wang, Kejian Zhao, Dazhen Deng, Anqi Cao, Xiao Xie, Zheng Zhou, Hui Zhang, and Yingcai Wu',
            conference: 'IEEE Transactions on Visualization and Computer Graphics (IEEE VAST 2018), Vol. 26, Issue 1, Page 407-417, 2020.',
            paper_url: 'https://zjuidg.org/source/projects/tacSimur/Tac-Simur.pdf',
            video_url: 'https://www.youtube.com/watch?v=_I6cne3Wd4U&feature=youtu.be',
            src: './imgs/tac-simur.png'
        },
        {
            title: 'ForVizor: Visualizing Spatio-Temporal Team Formations in Soccer',
            authors: 'Yingcai Wu, Xiao Xie, Jiachen Wang, Dazhen Deng, Hongye Liang, Hui Zhang, Shoubin Cheng, and Wei Chen',
            conference: 'IEEE Transactions on Visualization and Computer Graphics (IEEE VAST 2018), Vol. 25, Issue 1, Page 65-75, 2019.',
            paper_url: 'https://zjuidg.org/source/projects/forvizor/forvizor.pdf',
            video_url: 'https://www.youtube.com/watch?v=03U7PESGkOQ',
            src: './imgs/forvizor.png'
        },
    ]
}

const usePCStyles = makeStyles(theme => ({
    root: {
        width: '100vw',
        height: '100vh'
    },
    main: {
        marginLeft: '21%',
        marginRight: '21%'
    },
    header: {
        height: '80px',
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#24292e'
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
    }
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
        backgroundColor: '#24292e'
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
                    Dazhen Deng (邓达臻)
                </Typography>
                {/* <a href='https://zjuidg.org/'>
                    <img src={logo} className={classes.logo} />
                </a> */}
            </div>
            <div className={classes.mainBody}>
                <PersonalIntro content={data.intro} contact={data.contact}/>
                <Timeline experience={data.experience} />
                <Publications publications={data.publications} />
            </div>
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