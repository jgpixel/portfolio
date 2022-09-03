import Component from '../Component.js';

export default class WorkExperience extends Component {
    constructor(props, root) {
        super(props, root);

        this.#render();
    }

    #render() {
        const timelineContainer = document.createElement('section');
        timelineContainer.id = 'experience';
        timelineContainer.classList.add('work-experience', 'container', 'section')

        const title = document.createElement('h2');
        title.className = 'section-header';
        title.textContent = 'Work Experience';

        const timeline = document.createElement('div');
        timeline.classList.add('timeline', 'fade-in'); // ? .fade-in
        
        const experiences = document.createElement('ul');
        experiences.className = 'experiences';

        this.props.jobs.forEach(job => {
            new ExperienceCard(job, experiences);
        });
        
        this.root.appendChild(timelineContainer);
        timelineContainer.appendChild(title);
        timelineContainer.appendChild(timeline);
        timeline.appendChild(experiences);
    }
}

class ExperienceCard extends Component {
    constructor(props, root) {
        super(props, root);

        this.#render();
    }

    #render() {
        const experienceCard = document.createElement('li');
        experienceCard.classList.add('experience-card', 'fade-in');

        const cardContent = document.createElement('div');
        cardContent.className = 'card-content';

        const positionTitle = document.createElement('h5');
        positionTitle.textContent = this.props.positionTitle + ' ';

        const company = document.createElement('a');
        Component.setAttributes({
            class: 'company-anchor',
            href: this.props.companyWebsite,
            target: '_blank'
        }, company);
        company.textContent = `@ ${this.props.companyName}`;

        const startToEndWorkDate = document.createElement('h6');
        startToEndWorkDate.className = 'grey-type';
        startToEndWorkDate.textContent = `${this.props.workStartDate} - ${this.props.workEndDate}`;

        const jobResponsibilitiesList = document.createElement('ul');
        jobResponsibilitiesList.className = 'jobs-responsibilities-list';

        this.props.jobResponsibilities.forEach(responsibility => {
            const responsibilityLi = document.createElement('li');
            responsibilityLi.textContent = responsibility;

            jobResponsibilitiesList.appendChild(responsibilityLi);
        });

        this.root.appendChild(experienceCard);
        experienceCard.appendChild(cardContent);
        cardContent.appendChild(positionTitle);
        positionTitle.appendChild(company);
        cardContent.appendChild(startToEndWorkDate);
        cardContent.appendChild(jobResponsibilitiesList);
    }
}

/* 

<section id="experience" class="work-experience">
    <h3>Work Experience</h3>
    <div class="timeline fade-in">
        <ul id="experience-root" class="experience-root"></ul>
    </div>
</section>

*/

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