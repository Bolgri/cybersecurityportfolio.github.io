const logotext = "Seungwoo Cheon Portfolio";
const meta = {
    title: "Seungwoo Cheon Portfolio",
    description: "안녕하세요. 신입 프론트엔드 개발자 천승우입니다.",
};

const introdata = {
    title: "안녕하세요, 저는",
    animated: {
        first: "프론트엔드 개발자",
        second: "AI 엔지니어",
        third: "프로젝트 매니저",
        fourth: "퍼블리셔",
        fifth: "한영 번역가",
        // sixth: "",
        // add more if you'd like but make sure to update /src/pages/home/index.js Line 29
    },
    title_end: "입니다.",
    description: "UI/UX경험을 중시하는 프론트엔드 개발자입니다.",
    your_img_url: "https://github.com/PhoneticsBug/cybersecurity-portfolio-webpage/blob/main/public/profile.png?raw=true",
};

const dataabout = {
    title: "Who am I?",
    aboutme: [
      "- 계명대학교 영어영문학과 학사(2016.03~2023.02)",
      "- 대한민국 육군 만기전역 (2016.07~2018.04)"
    ]
  };
const worktimeline = [{
        jobtitle: "교육",
        where: "KT AIVLE School AI 개발자 교육 3기",
        date: "2023.01~2023.07",
    },
    {
        jobtitle: "공모전",
        where: "광진구 빅데이터 공모전",
        date: "2023.03~2023.05",
    },

];

const skills = [{
        name: "Python",
    },
    
    {
        name: "JavaScript",
    },
    
    {
        name: "Figma",
    },
    
    {
        name: "Bash",
    },

    {
        name: "Powershell",
    },

    {
        name: "MySQL",
    },

    {
        name: "HTML5",
    },

    {
        name: "CSS3",
    },

    {
        name: "Photoshop",
    },

    {
        name: "Lightroom",
    },

    {
        name: "Praat",
    },
];

const dataportfolio = [{
        img: "https://github.com/PhoneticsBug/sw_portpolio/blob/main/public/project%20logo/mini1.jpg?raw=true",
        description: "KT AIVLE School 미니 프로젝트 1",
        link: "#",
    },
    {
        img: "https://github.com/PhoneticsBug/sw_portpolio/blob/main/public/project%20logo/mini2.jpg?raw=true",
        description: "KT AIVLE School 미니 프로젝트 2",
        link: "#",
    },
    {
        img: "https://github.com/PhoneticsBug/sw_portpolio/blob/main/public/project%20logo/mini3.jpg?raw=true",
        description: "KT AIVLE School 미니 프로젝트 3",
        link: "#",
    },
    {
        img: "https://github.com/PhoneticsBug/sw_portpolio/blob/main/public/project%20logo/mini4.jpg?raw=true",
        description: "KT AIVLE School 미니 프로젝트 4",
        link: "#",
    },
    {
        img: "https://github.com/PhoneticsBug/sw_portpolio/blob/main/public/project%20logo/mini5.jpg?raw=true",
        description: "KT AIVLE School 미니 프로젝트 5",
        link: "#",
    },
    {
        img: "https://github.com/PhoneticsBug/sw_portpolio/blob/main/public/project%20logo/mini6.jpg?raw=true",
        description: "KT AIVLE School 미니 프로젝트 6",
        link: "#",
    },

    {
        img: "https://github.com/PhoneticsBug/sw_portpolio/blob/main/public/project%20logo/mini7.jpg?raw=true",
        description: "KT AIVLE School 미니 프로젝트 7",
        link: "#",
    },
    {
        img: "https://github.com/PhoneticsBug/sw_portpolio/blob/main/public/project%20logo/big.jpg?raw=true",
        description: "KT AIVLE School 빅 프로젝트",
        link: "#",
    },
    {
        img: "https://github.com/PhoneticsBug/sw_portpolio/blob/main/public/project%20logo/kwangjin.png?raw=true",
        description: "광진구 빅데이터 공모전",
        link: "#",
    },
    {
        img: "https://github.com/PhoneticsBug/wanted-pre-onboarding-frontend/blob/main/public/video_preview.jpg?raw=true",
        description: "WANTED 프론트엔드 프리온보딩 일정관리 웹서비스 제작 프로젝트",
        link: "https://github.com/PhoneticsBug/wanted-pre-onboarding-frontend",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "swwe1000@gmail.com",
    description: "Looking forward to hearing from you!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "SERVICE_ID",
    YOUR_TEMPLATE_ID: "TEMPLATE_ID",
    YOUR_USER_ID: "USER_ID (PUBLIC_KEY)",
};

const socialprofils = {
    github: "https://github.com/PhoneticsBug",
    linkedin: "https://linkedin.com/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};