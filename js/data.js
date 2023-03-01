import { createUser, fillSkillsArray, createRandomNum } from "./helpers.js";


const personalSkills = ['Self knowledge', 'Empathy', 'Assertive communication', 'Relationships', 'Decision making', 'Handling problems and conflicts', 'Creative thinking', 'Critical thinking', 'Management of emotions', 'Tension and stress management', 'Flexibility and adaptation', 'Resolution capacity', 'Ability to work in a team', 'Motivation and confidence', 'Know how to work under pressure', 'Proactivity', 'Communication', 'Professionalism', 'Attention', 'Memory'];


const technicalSkills = [['PHP', 'Laravel', 'Symfony', 'MySQL', 'PostgreSQL', 'Vue.js'], ['Python', 'Django', 'Flask', 'Oracle Database', 'Angular.js', 'Solidity'], ['Node.js', 'Express', 'Nest', 'MongoDB', 'React', 'Next']];


const experienceEng = ['2 years as QA Tester in Facebook', '1 year as Software Engineer in Google', '3 years as Web Developer in C&S', '2 years as Software Developer in Uala', '1 year as Software Developer in Lemon', '3 years as Web Developer in Mercado Libre'];


async function getRandomUser() {
    const url = 'https://randomuser.me/api/';

    const response = await fetch(url);
    const data = await response.json();

    const user = createUser(data.results[0]);

    return user;
};


function getPersonalSkills() {
    return fillSkillsArray(personalSkills, 6);
};


function getTechnicalSkills() {
    return technicalSkills[ createRandomNum(technicalSkills.length) ];
};


function getExperience(idiom = 'eng') {
    return experienceEng;
};


export {
    getRandomUser,
    getPersonalSkills,
    getTechnicalSkills,
    getExperience
};