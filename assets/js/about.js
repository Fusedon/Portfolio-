// Fetching profile data
fetch('profileData.json')
  .then(response => response.json())
  .then(data => loadProfileData(data));

// Function to load profile data
function loadProfileData(profileData) {
  const profileSection = document.querySelector('#profile-section');

  const profileName = document.createElement('h2');
  profileName.textContent = profileData.name;
  profileSection.appendChild(profileName);

  const profileRole = document.createElement('p');
  profileRole.textContent = profileData.role;
  profileSection.appendChild(profileRole);

  const profileDescription = document.createElement('p');
  profileDescription.textContent = profileData.description;
  profileSection.appendChild(profileDescription);
}