import { getRandomUser, getPersonalSkills, getTechnicalSkills, getExperience } from './data.js';

let user;

let personalInformation;
let personalSkills;
let technicalSkills;
let experience;

const btnChangeUser = document.querySelector('#btn-change-user');

const profileImgHTML = document.querySelector('#profile-img');
const fullNameHTML = document.querySelector('#name');

const personalInformationHTML = document.querySelector('#personal-information');
const personalSkillsHTML = document.querySelector('#personal-skills');
const technicalSkillsHTML = document.querySelector('#technical-skills');
const experienceHTML = document.querySelector('#experience');

const list = document.querySelector('.list');

const linkedin = document.querySelector('#linkedin');
const github = document.querySelector('#github');
const facebook = document.querySelector('#facebook');
const instagram = document.querySelector('#instagram');
const twitter = document.querySelector('#twitter');


function addEventListeners() {
    document.addEventListener('DOMContentLoaded', startApp);

    personalInformationHTML.addEventListener('click', showPersonalInformation);
    personalSkillsHTML.addEventListener('click', showPersonalSkills);
    technicalSkillsHTML.addEventListener('click', showTechnicalSkills);
    experienceHTML.addEventListener('click', showExperience);

    btnChangeUser.addEventListener('click', startApp);
};

addEventListeners();


async function startApp() {
    user = await getRandomUser();

    printHeader();
    fillPersonalInformarion();
    showPersonalInformation()

    personalSkills = getPersonalSkills();
    technicalSkills = getTechnicalSkills();
    experience = getExperience();

    const linkName = user.fullName.replaceAll(' ', '-');

    linkedin.href = `http://linkedin.com/${linkName}`;
    github.href = `http://github.com/${linkName}`;
    facebook.href = `http://facebook.com/${linkName}`;
    instagram.href = `http://instagram.com/${linkName}`;
    twitter.href = `http://twitter.com/${linkName}`;
};


function printHeader() {
    profileImgHTML.src = user.img;
    fullNameHTML.textContent = user.fullName;
};


function fillPersonalInformarion() {
    personalInformation = [
        `Gender: <span>${user.gender}</span>`,
        `Birth date: <span>${user.birthDate}</span>`,
        `Age: <span>${user.age}</span>`,
        `Location: <span>${user.location}</span>`,
        `Email: <span>${user.email}</span>`,
        `Phone: <span>${user.phone}</span>`
    ];
};


function showPersonalInformation() {
    cleanClasses();

    personalInformationHTML.classList.add('bg-light-grey');
    list.classList.add('border-radius-1');

    printInfo(personalInformation);
};


function showPersonalSkills() {
    cleanClasses();

    personalSkillsHTML.classList.add('bg-light-grey');
    list.classList.add('border-radius-2-3');

    printInfo(personalSkills);
};


function showTechnicalSkills() {
    cleanClasses();

    technicalSkillsHTML.classList.add('bg-light-grey');
    list.classList.add('border-radius-2-3');

    printInfo(technicalSkills);
};


function showExperience() {
    cleanClasses();

    experienceHTML.classList.add('bg-light-grey');
    list.classList.add('border-radius-4');

    printInfo(experience);
};


function printInfo(info) {

    // Esto simplifica lo que esta comentado abajo
    for( let i = 0; i < 6; i++) {
        document.querySelector(`#item-${i+1}`).innerHTML = info[i];
    };

    // const item1 = document.querySelector('#item-1');
    // const item2 = document.querySelector('#item-2');
    // const item3 = document.querySelector('#item-3');
    // const item4 = document.querySelector('#item-4');
    // const item5 = document.querySelector('#item-5');
    // const item6 = document.querySelector('#item-6');

    // item1.innerHTML = info[0];
    // item2.innerHTML = info[1];
    // item3.innerHTML = info[2];
    // item4.innerHTML = info[3];
    // item5.innerHTML = info[4];
    // item6.innerHTML = info[5];
};


function cleanClasses() {

    personalInformationHTML.classList.remove('bg-light-grey');
    personalSkillsHTML.classList.remove('bg-light-grey');
    technicalSkillsHTML.classList.remove('bg-light-grey');
    experienceHTML.classList.remove('bg-light-grey');

    list.classList.remove('border-radius-1');
    list.classList.remove('border-radius-2-3');
    list.classList.remove('border-radius-4');
};