import Component from '../Component.js';

export default class WorkExperience extends Component {
    constructor(props, root) {
        super(props, root);
        this.render();
    }

    render() {
        const timelineContainer = document.createElement('section');
        timelineContainer.id = 'experience';
        timelineContainer.className = 'work-experience container section';

        const title = document.createElement('h2');
        title.className = 'section-header';
        title.textContent = 'Work Experience';

        const timeline = document.createElement('div');
        timeline.className = 'timeline fade-in';
        
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
        this.render();
    }

    render() {
        const experienceCard = document.createElement('li');
        experienceCard.className = 'experience-card fade-in';

        const cardContent = document.createElement('div');
        cardContent.className = 'card-content';

        const positionTitle = document.createElement('h5');
        positionTitle.textContent = this.props.positionTitle + ' ';

        const company = document.createElement('a');
        Component.setAttributes({
            'class': 'company-anchor link',
            'href': this.props.companyWebsite,
            'target': '_blank'
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