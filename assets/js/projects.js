var projectData = [
    {
        id: "discord-bot-project",
        title: "Discord Bot",
        image: "../assets/images/discord-bot.png",
        description: "A discord bot with various functionalities."
    },
    {
        id: "website-design-project",
        title: "Website Design",
        image: "../assets/images/website-design.png",
        description: "A responsive and modern website design."
    },
    {
        id: "ai-tools-project",
        title: "AI Tools",
        image: "../assets/images/ai-tools.png",
        description: "AI tools for various applications."
    }
];

function loadProjectsData() {
    projectData.forEach(function(project) {
        var projectElement = document.getElementById(project.id);
        projectElement.querySelector(".project-title").innerText = project.title;
        projectElement.querySelector(".project-image").src = project.image;
        projectElement.querySelector(".project-description").innerText = project.description;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    loadProjectsData();
});