import Component from '../Component.js';

export default class WorkExperience extends Component {
    constructor(props, root) {
        super();
        this.props = props;
        this.root = root;

        this.#render();
    }

    #render() {
        
    }
}

/* 


const experienceRoot = document.getElementById("experience-root");

class JobCard {
    constructor(position, company, companySiteLink, fromYear, toYear, tasksList) {
        this.position = position;
        this.company = company;
        this.companySiteLink = companySiteLink;
        this.fromYear = fromYear;
        this.toYear = toYear;
        this.tasksList = tasksList;

        this.createJobCard();
    }

    createJobCard() {
        const cardContainer = document.createElement("li");
        const timelineContentContainer = document.createElement("div");
        const positionTitle = document.createElement("h5");
        const companySpan = document.createElement("span");
        const companySiteAnchor = document.createElement("a");
        const fromAndToYears = document.createElement("h6");
        const tasksListContainer = document.createElement("ul");
        
        experienceRoot.appendChild(cardContainer);
            cardContainer.classList.add("job-card");
            cardContainer.classList.add("fade-in");
        cardContainer.appendChild(timelineContentContainer);
            timelineContentContainer.classList.add("timeline-content");
        timelineContentContainer.appendChild(positionTitle);
            positionTitle.textContent = `${this.position} `;
        positionTitle.appendChild(companySpan);
            companySpan.classList.add("company-text");
            companySpan.textContent = "@ ";
        companySpan.appendChild(companySiteAnchor);
            companySiteAnchor.classList.add("company-text");
            this.setAttributes(companySiteAnchor, { "href": this.companySiteLink, "target": "_blank" });
            companySiteAnchor.textContent = this.company;
        timelineContentContainer.appendChild(fromAndToYears);
            fromAndToYears.classList.add("light-text");
            fromAndToYears.textContent = `${this.fromYear} - ${this.toYear}`;
        timelineContentContainer.appendChild(tasksListContainer);
            tasksListContainer.classList.add("tasks-list");

        this.tasksList.forEach(task => {
            const taskLi = document.createElement("li");

            tasksListContainer.appendChild(taskLi);
                taskLi.textContent = task;
        });
    }

    setAttributes(element, attributes) { // ! MAKE THIS A EXPORT
        for (const key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
    }
}

const jobCards = [];

jobCards.push(new JobCard(
    "UX/UI Designer",
    "TitanFlow",
    "https://titanflow.io/",
    "June 2020",
    "Present",
    [
        "Assisted in the design of intuitive, simple, and engaging in-app components/features.",
        "Designer for branding and social media related graphics and animations."
    ]
    
));

jobCards.push(new JobCard(
    "Web Design Intern",
    "GoreMediaSolutions",
    "http://goremediasolutions.com/",
    "December 2019",
    "April 2020",
    [
        "Assisted in the designing of websites for the clients of GoreMediaSolutions.",
        "Created the layout for an internal catalog of inventory."
    ]
));

jobCards.push(new JobCard(
    "Snapchat Lens Developer",
    "Legre Eyewear",
    "https://legre.com/",
    "October 2018",
    "January 2020",
    [
        "Created interactive Snapchat lenses that allowed users to try on multiple styles of the brand's glasses."
    ]
));

*/