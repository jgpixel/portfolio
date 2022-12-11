import Component from '../Component.js';

const jobs = [
    {
        positionTitle: 'Developer',
        companyName: 'BuildBites',
        companyWebsite: 'https://www.buildbites.com/',
        workStartDate: 'December 2022',
        workEndDate: 'Present',
        jobResponsibilities: [
            'Creating components for the BuildBites\' website.',
            'Working with clients of BuildBites to develop websites.'
        ]
    },
    {
        positionTitle: 'Freelance Web Development',
        companyName: 'JG Pixel',
        companyWebsite: 'https://jgpixel.com/',
        workStartDate: 'December 2020',
        workEndDate: 'Present',
        jobResponsibilities: [
            'Designing and creating websites for businesses.'
        ]
    },
    {
        positionTitle: 'UX/UI Designer',
        companyName: 'TitanFlow',
        companyWebsite: 'https://titanflow.io/',
        workStartDate: 'June 2020',
        workEndDate: 'November 2022',
        jobResponsibilities: [
            'Assisted in the design of intuitive, simple, and engaging in-app components/features.',
            'Designed branding and social media related graphics and animations.'
        ]
    },
    {
        positionTitle: 'Web Design Intern',
        companyName: 'GoreMediaSolutions',
        companyWebsite: 'http://goremediasolutions.com/',
        workStartDate: 'December 2019',
        workEndDate: 'April 2020',
        jobResponsibilities: [
            'Assisted in the designing of websites for the clients of GoreMediaSolutions.',
            'Created the layout for an internal catalog of inventory.'
        ]
    },
    {
        positionTitle: 'Snapchat Lens Developer',
        companyName: 'Legre Eyewear',
        companyWebsite: 'https://legre.com/',
        workStartDate: 'October 2018',
        workEndDate: 'January 2020',
        jobResponsibilities: [
            'Created interactive Snapchat lenses that allowed users to try on multiple styles of the brand\'s glasses.'
        ]
    }
];

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

        jobs.forEach(job => new ExperienceCard(job, experiences));
        
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