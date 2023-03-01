
function createUser(data) {

    const birthDate = data.dob.date.split('T')[0];

    const user = {
        img: data.picture.large,
        fullName: data.name.first + ' ' + data.name.last,
        gender: data.gender,
        birthDate: formatDate(birthDate),
        age: data.dob.age,
        location: data.location.city + ', ' + data.location.state + ', ' + data.location.country,
        email: data.email,
        phone: data.phone
    };

    return user;
};


function formatDate(date) {
    const [ year, month, day ] = date.split('-');
    return `${day}/${month}/${year}`;
};


function fillSkillsArray(skills, amount) {

    let array = [];
    let randomNum;
    let skill;

    while(array.length < amount) {

        randomNum = createRandomNum(skills.length);
        skill = skills[randomNum];

        if(!array.includes( skill )) {
            array.push(skill);
        }
    };

    return array;
};


function createRandomNum(max) {
    return Math.floor(Math.random() * max);
};


export {
    createUser,
    fillSkillsArray,
    createRandomNum
};