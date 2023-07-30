const data = {
    intro: "I am a tenure-track assistant professor (ZJU 100-Young professor) in the School of Software and Technology at Zhejiang University. I received my Ph.D. at the State Key Lab of CAD&CG, Zhejiang University, under the supervision of Prof. Yingcai Wu. My research interests lie in AI for insight discovery, AI for visualization generation, and AI explainability.",
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
            duration: 'Sep. 2018 - June 2023',
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
    news: [
        {
            date: "07/2023",
            content: 'A paper accepted to IEEE VIS 2023 and a paper accepted to ACM UIST.'
        },
        {
            date: "09/2022",
            content: 'A paper accepted to IEEE TVCG.'
        },
        {
            date: "09/2022",
            content: 'Welcome to our panel "Grand Challenges in Visual Analytic Systems" in VIS\'22!'
        },
        {
            date: "07/2022",
            content: "Four papers accepted to IEEE VIS 2022."
        },
        {
            date: "01/2022",
            content: "One paper accepted to IEEE TVCG."
        },
        {
            date: "05/2021",
            content: "One paper accepted to ACM SIGKDD 2021."
        },
        {
            date: "12/2020",
            content: "Started internship at Microsoft Research Asia (Beijing)."
        },
        {
            date: "11/2020",
            content: "One paper accepted to ACM SIGCHI 2021."
        },
        {
            date: "07/2020",
            content: "One paper accepted to IEEE VIS 2020."
        },
        {
            date: "07/2019",
            content: "One paper accepted to IEEE VIS 2019."
        },
        {
            date: "09/2018",
            content: "Started my Ph.D. program at Zhejiang University."
        }
    ],
    experience: [
        {
            duration: 'August 2023 - Present',
            city: 'Ningbo',
            country: 'China',
            title: 'Tenure-track Assistant Professor',
            description: 'ZJU 100-Young professor',
            affiliation: 'School of Software and Technology, Zhejiang University',
            src: './imgs/zju.png'
        },
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
            duration: 'Sep. 2018 - June 2023',
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
            title: 'Revisiting the Design Patterns of Composite Visualizations',
            authors: 'Dazhen Deng, Weiwei Cui, Xiyu Meng, Mengye Xu, Yu Liao, Haidong Zhang, Yingcai Wu',
            conference: 'IEEE Transactions on Visualization and Computer Graphics (CCF-A, JCR-Q1)',
            paper_url: 'https://arxiv.org/pdf/2203.10476.pdf',
            video_url: '',
            src: './imgs/composition.png'
        },
        {
            title: 'DashBot: Insight-Driven Dashboard Generation Based on Deep Reinforcement Learning',
            authors: 'Dazhen Deng, Aoyu Wu, Huamin Qu, and Yingcai Wu',
            conference: 'IEEE VIS 2022 (CCF-A)',
            paper_url: 'https://arxiv.org/pdf/2208.01232.pdf',
            video_url: 'https://youtu.be/hM4XMU7pv-0',
            src: './imgs/dashbot.png'
        },
        {
            title: 'In Defence of Visual Analytics Systems: Replies to Critics',
            authors: 'Aoyu Wu*, Dazhen Deng*, Furui Cheng, Yingcai Wu, Shixia Liu, and Huamin Qu (* denotes equal contribution)',
            conference: 'IEEE VIS 2022 (CCF-A)',
            paper_url: 'https://arxiv.org/pdf/2201.09772.pdf',
            video_url: '',
            src: './imgs/critics.png'
        },
        {
            title: 'OBTracker: Visual Analytics of Off-ball Movements in Basketball',
            authors: 'Yihong Wu, Dazhen Deng, Xiao Xie, Moqi He, Jie Xu, Hongzeng Zhang, Hui Zhang, and Yingcai Wu',
            conference: 'IEEE VIS 2022 (CCF-A)',
            paper_url: 'https://zjuidg.org/source/projects/OBTracker/OBTracker.pdf',
            video_url: '',
            src: './imgs/obtracker.png'
        },
        {
            title: 'MetaGlyph: Automatic Generation of Metaphoric Glyph-based Visualization',
            authors: 'Lu Ying, Xinhuan Shu, Dazhen Deng, Yuchen Yang, Tan Tang, Lingyun Yu, and Yingcai Wu',
            conference: 'IEEE VIS 2022 (CCF-A)',
            paper_url: 'https://arxiv.org/pdf/2209.05739.pdf',
            video_url: '',
            src: './imgs/metaglyph.png'
        },
        {
            title: 'VisImages: A Fine-Grained Expert-Annotated Visualization Dataset',
            authors: 'Dazhen Deng, Yihong Wu, Xinhuan Shu, Jiang Wu, Siwei Fu, Weiwei Cui, and Yingcai Wu',
            conference: 'IEEE Transactions on Visualization and Computer Graphics (CCF-A, JCR-Q1)',
            paper_url: 'https://zjuidg.org/source/projects/visimages/visimages.pdf',
            video_url: '',
            src: './imgs/visimages.png'
        },
        {
            title: 'Tac-Valuer: Knowledge-based Stroke Evaluation in Table Tennis',
            authors: 'Jiachen Wang*, Dazhen Deng*, Xiao Xie, Xinhuan Shu, Yu-Xuan Huang, Le-Wen Cai, Hui Zhang, Min-Ling Zhang, Zhi-Hua Zhou, and Yingcai Wu (* denotes equal contribution)',
            conference: 'The ACM SIGKDD Conference on Knowledge Discovery and Data Mining (ACM SIGKDD 2021, CCF-A)',
            paper_url: 'https://zjuidg.org/source/projects/tacValuer/tacValuer.pdf',
            video_url: '',
            src: './imgs/tac-valuer.png'
        },
        {
            title: 'EventAnchor: Reducing Human Interactions in Event Annotation of Racket Sports Videos',
            authors: 'Dazhen Deng, Jiang Wu, Jiachen Wang, Yihong Wu, Xiao Xie, Zheng Zhou, Hui Zhang, Xiaolong Zhang, and Yingcai Wu',
            conference: 'CHI Conference on Human Factors in Computing Systems (ACM SIGCHI 2021, CCF-A)',
            paper_url: 'https://zjuidg.org/source/projects/eventanchor/eventanchor.pdf',
            video_url: '',
            src: './imgs/eventanchor.png'
        },
        {
            title: 'PassVizor: Toward Better Understanding of the Dynamics of Soccer Passes',
            authors: 'Xiao Xie, Jiachen Wang, Hongye Liang, Dazhen Deng, Shoubin Cheng, Hui Zhang, Wei Chen, and Yingcai Wu',
            conference: 'IEEE Transactions on Visualization and Computer Graphics (IEEE VIS 2020), Vol. 27, Issue 2, Page 1322-1331, 2020 (CCF-A, JCR-Q1)',
            paper_url: 'https://zjuidg.org/source/projects/passvizor/passvizor.pdf',
            video_url: '',
            src: './imgs/passvizor.png'
        },
        {
            title: 'Tac-Simur: Tactic-based Simulative Visual Analytics of Table Tennis',
            authors: 'Jiachen Wang, Kejian Zhao, Dazhen Deng, Anqi Cao, Xiao Xie, Zheng Zhou, Hui Zhang, and Yingcai Wu',
            conference: 'IEEE Transactions on Visualization and Computer Graphics (IEEE VAST 2019), Vol. 26, Issue 1, Page 407-417, 2020 (CCF-A, JCR-Q1)',
            paper_url: 'https://zjuidg.org/source/projects/tacSimur/Tac-Simur.pdf',
            video_url: 'https://www.youtube.com/watch?v=_I6cne3Wd4U&feature=youtu.be',
            src: './imgs/tac-simur.png'
        },
        {
            title: 'ForVizor: Visualizing Spatio-Temporal Team Formations in Soccer',
            authors: 'Yingcai Wu, Xiao Xie, Jiachen Wang, Dazhen Deng, Hongye Liang, Hui Zhang, Shoubin Cheng, and Wei Chen',
            conference: 'IEEE Transactions on Visualization and Computer Graphics (IEEE VAST 2018), Vol. 25, Issue 1, Page 65-75, 2019 (CCF-A, JCR-Q1)',
            paper_url: 'https://zjuidg.org/source/projects/forvizor/forvizor.pdf',
            video_url: 'https://www.youtube.com/watch?v=03U7PESGkOQ',
            src: './imgs/forvizor.png'
        },
    ]
};


export default data;