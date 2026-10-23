export type PublicationCategory = 'llm' | 'visual-analytics' | 'explainable-ai' | 'visualization';
export type PublicationLinkType = 'paper' | 'video' | 'code' | 'project' | 'dataset';

export interface Publication {
  id: string;
  year: number;
  title: string;
  authors: Array<{ name: string; isMe?: boolean }>;
  venue: string;
  image: string;
  categories: PublicationCategory[];
  links: Array<{ label: string; url: string; type: PublicationLinkType }>;
}

export const site = {
  name: 'Ji Ma',
  nameZh: '马骥',
  role: 'Ph.D. Candidate in Computer Science',
  affiliation: 'Zhejiang University',
  emailLabel: 'jimazju [at] gmail [dot] com',
  email: 'mailto:jimazju@gmail.com',
  scholar: 'https://scholar.google.com/citations?user=vz6ryCwAAAAJ&hl=en',
  researchAreas: ['Data Mining','Large Language Models', 'Embodied Intelligence',  'AI4Sports'],
};

export const categoryLabels: Record<PublicationCategory, string> = {
  llm: 'LLM',
  'visual-analytics': 'Visual Analytics',
  'explainable-ai': 'Explainable AI',
  visualization: 'Visualization',
};

export const publications: Publication[] = [
  {
    id: 't3set',
    year: 2025,
    title: 'T3Set: A Multimodal Dataset with Targeted Suggestions for LLM-based Virtual Coach in Table Tennis Training',
    authors: [
      { name: 'Ji Ma', isMe: true }, { name: 'Jiale Wu' }, { name: 'Haoyu Wang' },
      { name: 'Yanze Zhang' }, { name: 'Xiao Xie' }, { name: 'Zheng Zhou' },
      { name: 'Hui Zhang' }, { name: 'Jiachen Wang' }, { name: 'Yingcai Wu' },
    ],
    venue: "The 31st ACM SIGKDD Conference on Knowledge Discovery and Data Mining (KDD '25, CCF-A)",
    image: '/imgs/t3set.png',
    categories: ['llm'],
    links: [
      { label: 'Paper', url: 'https://pub-b17d7d2288df4942a00824c4394886f8.r2.dev/projects/t3set/t3set.pdf', type: 'paper' },
      { label: 'Video', url: 'https://youtu.be/fW734qv0CT4', type: 'video' },
      { label: 'Code', url: 'https://github.com/jima-cs/t3set', type: 'code' },
    ],
  },
  {
    id: 'custmatcher',
    year: 2025,
    title: 'CustMatcher: Enhancing Preference-driven People-to-People Recommendation',
    authors: [
      { name: 'Ji Ma', isMe: true }, { name: 'Jiachen Wang' }, { name: 'Xiao Xie' },
      { name: 'Zheng Zhou' }, { name: 'Hui Zhang' }, { name: 'Yingcai Wu' },
    ],
    venue: 'Visual Informatics (JCR Q1)',
    image: '/imgs/CustMatcher.png',
    categories: ['visual-analytics'],
    links: [
      { label: 'Paper', url: 'https://www.sciencedirect.com/science/article/pii/S2468502X25000816', type: 'paper' },
    ],
  },
  {
    id: 'tacprint',
    year: 2024,
    title: 'TacPrint: Visualizing the Biomechanical Fingerprint in Table Tennis',
    authors: [
      { name: 'Jiachen Wang' }, { name: 'Ji Ma', isMe: true }, { name: 'Zheng Zhou' },
      { name: 'Xiao Xie' }, { name: 'Hui Zhang' }, { name: 'Yingcai Wu' }, { name: 'Huamin Qu' },
    ],
    venue: 'IEEE Transactions on Visualization and Computer Graphics (CCF-A)',
    image: '/imgs/tacprint.png',
    categories: ['explainable-ai', 'visualization'],
    links: [
      { label: 'Paper', url: 'https://pub-b17d7d2288df4942a00824c4394886f8.r2.dev/projects/TacPrint/TacPrint.pdf', type: 'paper' },
      { label: 'Video', url: 'https://ieeexplore.ieee.org/ielx7/2945/4359476/10500518/supp1-3388555.mp4', type: 'video' },
    ],
  },
  {
    id: 'tactrainer',
    year: 2023,
    title: 'Tac-Trainer: A Visual Analytics System for IoT-based Racket Sports Training',
    authors: [
      { name: 'Jiachen Wang' }, { name: 'Ji Ma', isMe: true }, { name: 'Kangping Hu' },
      { name: 'Zheng Zhou' }, { name: 'Hui Zhang' }, { name: 'Xiao Xie' }, { name: 'Yingcai Wu' },
    ],
    venue: 'IEEE Transactions on Visualization and Computer Graphics (CCF-A)',
    image: '/imgs/tactrainer.png',
    categories: ['visual-analytics', 'visualization'],
    links: [
      { label: 'Paper', url: 'https://pub-b17d7d2288df4942a00824c4394886f8.r2.dev/projects/TacTrainer/TacTrainer.pdf', type: 'paper' },
      { label: 'Video', url: 'https://youtu.be/nriqaQUjZ1E', type: 'video' },
    ],
  },
];

export const news = [
  { date: 'Jun. 2025', text: "Kuafu Running Club was awarded 8k CNY from the \"Qing-Miao Fund.\""},
  { date: 'Dec. 2025', text: "Kuafu Running Club placed 6th in the 2025 G100 Final."},
  { date: 'Nov. 2025', text: "Kuafu Running Club won the championship in the 2025 G100 (Huadong)."},
  {date: 'Jul. 2025', text:"Attended ChinaVIS 2025."},
  { date: 'Jun. 2025', text: "Our paper T3Set was accepted by ACM KDD 2025." },
  {date: 'Jun. 2025', text:"Kuafu Running Club was officially established as a registered student organization, filling the long-standing void of a long-distance running association at Zhejiang University."},
  { date: 'Oct. 2024', text: 'Became a student assistant coach for the Faculty and Staff Running Association of Zhejiang University.' },
  { date: 'Dec. 2023', text: 'Became a Graduate Peer Psychological Counselor.' },
  { date: 'Dec. 2023', text: 'Our paper TacPrint was accepted by the IEEE PacificVis 2024 TVCG journal track.'},
  { date: 'Sep. 2022', text: 'Ranked 1st in the School of Computer Science’s interview for direct admission to the PhD program from undergraduate study.'},
  { date: 'Jul. 2022', text: "Our paper Tac-Trainer was accepted by IEEE VIS 2022." },
  { date: 'May. 2022', text: 'Finished the National Undergraduate Training Program for Innovation and Entrepreneurship.'},
  { date: 'May. 2020', text: 'Joined the ZJUIDG Lab led by Prof. Yingcai Wu.'},
  { date: 'Aug. 2019', text: 'Admitted to the Mixed Class at Chu Kochen Honors College in Zhejiang University'},
  { date: 'Jun. 2019', text: 'Participated in the selection processes for Tsinghua University’s Leading Talent Program and Peking University’s Boya Talent Program.'},
  { date: 'Nov. 2018', text: 'Ranked 4th throughout the Province in the Tsinghua University Standard Scholastic Assessment Test (THUSSAT).'},
  { date: 'Jul. 2018', text: 'Attended Tsinghua University’s Summer School for High School Students.'},
  { date: 'Nov. 2016', text: 'Attended a dialogue with Sir J. Fraser Stoddart, recipient of the 2016 Nobel Prize in Chemistry, at Tianjin University.'},
  { date: 'Jul. 2016', text: 'Citywide top scorer in the high school entrance examination (11 points below full marks).'},

];

export const experience = [
  {
    duration: 'Aug. 2023 — Present', title: 'Ph.D. Candidate in Computer Science',
    affiliation: 'Zhejiang University', location: 'Hangzhou, China',
    description: 'Data Mining and Human-Centered AI, advised by Prof. Yingcai Wu.', image: '/imgs/zju.png',
  },
  {
    duration: 'Aug. 2019 — Jun. 2023', title: 'B.E. in Computer Science',
    affiliation: 'Zhejiang University', location: 'Hangzhou, China',
    description: 'VIS4Sports, Supervised by Prof. Yingcai Wu since 2020.\n Member of the Mixed Class at Chu Kochen Honors College.', image: '/imgs/zju.png',
  },
];

export const services = [
  { year: '2026', title: 'Conference Reviewer', detail: 'KDD 2026' },
  { year: '2025', title: 'Teaching Assistant', detail: 'History of Computer Thoughts, Zhejiang University' }
];

export const awards = [
  { year: '2025', title: 'Outstanding Graduate Leader Award of Zhejiang University' },
  { year: '2024', title: 'Award of Honor for Graduate of Zhejiang University' },
  { year: '2023', title: 'Graduate Peer Psychological Counselor, Zhejiang University' },
  { year: '2023', title: 'Outstanding Graduate Award of Zhejiang University' },
  { year: '2023', title: 'Certificate of Chu Kochen Honors Program of Zhejiang University' },
  { year: '2020', title: 'First-prize Scholarship of Zhejiang University' },
  { year: '2018', title: 'Second Prize, National Olympiad in Mathematics (Provincial Level)' },
  { year: '2018', title: 'Second Prize, National Olympiad in Physics (Provincial Level)' },
  { year: '2018', title: 'Third Prize, National Olympiad in Chemistry (Provincial Level)' },
  { year: '2018', title: 'Second Prize, National Olympiad in Biology (Provincial Level)' },
];
