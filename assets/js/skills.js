const profileData = require('./profileData');

function loadSkillsData() {
    const skillsSection = document.getElementById('skills-section');
    skillsSection.innerHTML = '';

    profileData.skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill';

        const skillName = document.createElement('h3');
        skillName.textContent = skill.name;
        skillElement.appendChild(skillName);

        const skillDescription = document.createElement('p');
        skillDescription.textContent = skill.description;
        skillElement.appendChild(skillDescription);

        skillsSection.appendChild(skillElement);
    });
}

document.addEventListener('loadSkills', loadSkillsData);