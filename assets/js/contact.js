// Fetching contact data from server
fetch('data/contact.json')
  .then(response => response.json())
  .then(data => loadContactData(data));

// Function to load contact data
function loadContactData(data) {
  const contactSection = document.querySelector('#contact-section');

  // Creating elements for contact data
  const email = document.createElement('p');
  const phone = document.createElement('p');
  const address = document.createElement('p');

  // Setting text for contact data elements
  email.textContent = `Email: ${data.email}`;
  phone.textContent = `Phone: ${data.phone}`;
  address.textContent = `Address: ${data.address}`;

  // Appending contact data elements to contact section
  contactSection.appendChild(email);
  contactSection.appendChild(phone);
  contactSection.appendChild(address);
}