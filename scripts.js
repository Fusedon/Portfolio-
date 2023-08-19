// Define the profile and project data
let profileData = {};
let projectData = {};

// Define the schemas for the profile and project data
const ProfileSchema = {};
const ProjectSchema = {};

// Function to load profile data
function loadProfileData() {
  // Fetch the profile data from the server
  fetch('data/profile.json')
    .then(response => response.json())
    .then(data => {
      // Assign the fetched data to the profileData variable
      profileData = data;
      // Dispatch the loadProfile event
      document.dispatchEvent(new CustomEvent('loadProfile', { detail: profileData }));
    });
}

// Function to load skills data
function loadSkillsData() {
  // Fetch the skills data from the server
  fetch('data/skills.json')
    .then(response => response.json())
    .then(data => {
      // Assign the fetched data to the profileData variable
      profileData.skills = data;
      // Dispatch the loadSkills event
      document.dispatchEvent(new CustomEvent('loadSkills', { detail: profileData.skills }));
    });
}

// Function to load projects data
function loadProjectsData() {
  // Fetch the projects data from the server
  fetch('data/projects.json')
    .then(response => response.json())
    .then(data => {
      // Assign the fetched data to the projectData variable
      projectData = data;
      // Dispatch the loadProjects event
      document.dispatchEvent(new CustomEvent('loadProjects', { detail: projectData }));
    });
}

// Function to load contact data
function loadContactData() {
  // Fetch the contact data from the server
  fetch('data/contact.json')
    .then(response => response.json())
    .then(data => {
      // Assign the fetched data to the profileData variable
      profileData.contact = data;
      // Dispatch the loadContact event
      document.dispatchEvent(new CustomEvent('loadContact', { detail: profileData.contact }));
    });
}

// Function to display project details
function displayProjectDetails(projectId, projectData) {
  // Get the project element by id
  const projectElement = document.getElementById(projectId);
  // Set the innerHTML of the project element to the project data
  projectElement.innerHTML = `
    <h2>${projectData.title}</h2>
    <p>${projectData.description}</p>
    <img src="${projectData.image}" alt="${projectData.title}">
  `;
}

// Load the profile, skills, projects, and contact data when the page loads
window.onload = function() {
  loadProfileData();
  loadSkillsData();
  loadProjectsData();
  loadContactData();
};