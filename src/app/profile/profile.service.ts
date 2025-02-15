import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;
ƒ
  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'MultiTrans',
      desc: 'MultiTrans is a language translation suite capable of translating documents such as PDF, DOCX and other formats from one language to another. This project contains multiple tools and technologies to perform various activities such as document analysis, pre translation, translation, export and many others in an organized and time bounded manner. Project is well equipped with third party language translation API(s) and also integrated with Trados Studio. This project is made using variety of technologies such as Java, C#, C++, Delphi, Wix and many others.',
      livedemo: 'https://registry.terraform.io/modules/mayank0202/s3/aws/1.0.1',
      githurl: 'github.com/harish1277 ',
      registry: '',
      imgUrl: 'assets/images/rws.jpeg',
      tech: 'Jenkins, Az Devops,Vpsher vms, Azure Repos, Linux, Docker, Prometheus, and Grafana'
    },

    {
      id: 2,
      title: 'Walmart',
      desc: 'The project is Synchronizing with developers and meeting their requirements using the CI/CD to plan, code, build, test, release, deploy, operations and monitoring with all phases of DevOps tools and technologies.',
      livedemo: 'https://github.com/harish1277',
      githurl: 'https://github.com/harish1277',
      mediumlink: '',
      imgUrl: 'assets/images/walmart.png',
      tech: 'Git, Azure DevOps, Docker, Kubernetes, Azure Cloud, IBM Cloud, Google Cloud Platform and Ansible.'
    },


    {
      id: 3,
      title: 'MINTS',
      desc: 'Walmart Services (POC work) is a integration service and it is developed using angular.js, node.js and the code is submitted to GitHub and from here my role as a Devops engineer starts, so I used to create a Continuous integration and continuous delivery pipelines for Miracle Walmart Services POC using Azure DevOps Pipelines and manage deployments in Azure Kubernetes Cluster',
      livedemo: '',
      githurl: 'https://github.com/harish1277',
      mediumlink: '',
      imgUrl: 'assets/images/miracle.png',
      tech: 'Jenkins, git, AWS, Kubernetes, AWS S3 buckets, AWS Route53, AWSCloudfront, AWS CloudWatch'
    },

    // {
    //   id: 4,
    //   title: 'Multiroom Chat Application in Node JS',
    //   desc: '',
    //   livedemo: 'https://chatapp-using-node.herokuapp.com/',
    //   githurl: 'https://github.com/mehulk05/Chat-app-using-Nodejs',
    //   mediumlink: 'https://medium.com/weekly-webtips/building-a-multiroom-chat-application-in-node-js-8a8adca5acf2',
    //   imgUrl: 'assets/images/z23.png',
    //   tech: 'Node JS,Socket IO'
    // },


    // {
    //   id: 5,
    //   title: 'Integrate Medium Blogs on your React App',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/Medium-Blog-On-React-App#/',
    //   githurl: 'https://github.com/mehulk05/Medium-Blog-On-React-App',
    //   mediumlink: 'https://javascript.plainenglish.io/how-to-add-medium-blogs-on-your-react-app-a3898a729aad',
    //   imgUrl: 'assets/images/z4.png',
    //   tech: 'React JS'
    // },



    // {
    //   id: 6,
    //   title: 'News App using ReactJS (Parsing XML to JSON)',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/NewsApp-using-React',
    //   githurl: 'https://github.com/mehulk05/NewsApp-using-React',
    //   mediumlink: 'https://codeburst.io/news-app-using-reactjs-f9752d7ab6ce',
    //   imgUrl: 'assets/images/z24.png',
    //   tech: 'React JS, XMl to JSON'
    // },



    // {
    //   id: 7,
    //   title: 'Medium-Like Blog App Using Angular 9 and Firebase',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/Blog-Book/',
    //   githurl: 'https://github.com/mehulk05/Blog-Book',
    //   mediumlink: 'https://codeburst.io/blogging-app-using-angular-9-and-firebase-98e36168d850',
    //   imgUrl: 'assets/images/z21.png',
    //   tech: 'HTML, Bootstrap, CSS, Angular-9, Firebase'
    // },



    // {
    //   id: 8,
    //   title: 'COVID 19 Tracker (Statistics) app Using Angularr',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/COVOID-19/',
    //   githurl: 'https://github.com/mehulk05/COVOID-19',
    //   mediumlink: 'https://codeburst.io/covoid-19-tracker-statistics-app-using-angular-2358347b3d1f',
    //   imgUrl: 'assets/images/z2.png',
    //   tech: 'Angular 10 ,Bootstrap,Javascript'
    // },


    // {
    //   id: 9,
    //   title: 'Weather App with React',
    //   desc: '',
    //   livedemo: 'https://mehulk05.github.io/React-Weather/',
    //   githurl: 'https://github.com/mehulk05/React-Weather-App',
    //   mediumlink: 'https://medium.com/analytics-vidhya/weather-app-with-react-adaa7268bbdb',
    //   imgUrl: 'assets/images/z9.png',
    //   tech: 'React, Open MAp Api'
    // },


    // {
    //   id: 10,
    //   title: 'Spring Boot + Angular 8 CRUD Example',
    //   desc: '',
    //   livedemo: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
    //   githurl: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
    //   mediumlink: 'https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54',
    //   imgUrl: 'assets/images/z28.png',
    //   tech: 'Angular8, Java ,Hibernate'
    // },


    // {
    //   id: 11,
    //   title: 'Personal Portfolio Using Angular',
    //   desc: '',
    //   livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
    //   githurl: 'https://github.com/mehulk05/Personal-Portfolio-Angular-Updated',
    //   mediumlink: 'https://javascript.plainenglish.io/personal-portfolio-using-angular-8-and-bootstrap-5dde6fc7cf9b',
    //   imgUrl: 'assets/images/z11.png',
    //   tech: 'Angular ,Bootstrap'
    // },


    // {
    //   id: 12,
    //   title: 'Personal Portfolio Using Django',
    //   desc: '',
    //   livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
    //   githurl: 'https://github.com/mehulk05/My-Personal-Portfolio',
    //   mediumlink: 'https://mehulkothari05.medium.com/personal-portfolio-using-django-dba49c355905',
    //   imgUrl: 'assets/images/z12.png',
    //   tech: 'Django'
    // },

    // {
    //   id: 13,
    //   title: 'Movie Success Prediction',
    //   desc: '',
    //   livedemo: 'https://mehulkothari05.medium.com/',
    //   githurl: 'https://github.com/mehulk05',
    //   mediumlink: 'https://mehulkothari05.medium.com/movie-success-prediction-a67d871a7b1',
    //   imgUrl: 'assets/images/z13.png',
    //   tech: 'Python, Machine Learning, Django Framework.'
    // },

    // {
    //   id: 14,
    //   title: 'Matrimonial Website',
    //   desc: '',
    //   livedemo: 'https://mehulkothari05.medium.com/',
    //   githurl: 'https://github.com/mehulk05/Matrimonial-Website.git',
    //   mediumlink: 'https://mehulkothari05.medium.com/matrimonial-website-9cd5247f477d',
    //   imgUrl: 'assets/images/z14.png',
    //   tech: 'HTML, CSS, Bootstrap, Jquery'
    // },

  ]
  about2 = `Devops Engineer with 5.9 years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Configuring CI/CD Pipelines AZ Devops and Jenkins .
  Expertise in Containerization Platforms Docker & Kubernetes  . 
  Good Knowledge and Hands-on Experience on Ansible and Terraform .
  Have used various cloud computing services with AWS and Azure.
  Worked with Cloud K8s environments of AKS,IBM,GCP and AWS .
  Have good understanding of programming languages like Java and worked on databases like MySQL, MongoDB etc .
  Have good understanding of scripting languages like yaml, bash, and groovy .
  Knowledge of various software design principles and patterns .
  
  Used various tools like Docker, Github, Jenkins, Kubernetes, Ansible, Terraform, etc.`

  about = "Results-driven DevOps Engineer with a proven track record of 5 years in supporting, automating, and optimizing mission-critical deployments on AKS and Vpshere vm's. Proficient in leveraging advanced configuration management, CI/CD practices, Terraform, and a strong understanding of DevOps methodologies. Seeking a challenging position where I can contribute my expertise, drive innovation, and adapt to evolving technologies while fostering professional growth."
  resumeurl = "https://harish-resume.s3.us-east-1.amazonaws.com/Harish_Bali_updated_resume.docx"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'Git',
      'progress': '90%'
    },
    {
      'id': '2',
      'skill': 'Az Devops',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'Jenkins',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'Docker',
      'progress': '85%'
    },
    {
      'id': '5',
      'skill': 'Kubernetes',
      'progress': '80%'
    },
    {
      'id': '6',
      'skill': 'Ansible',
      'progress': '70%'
    },
    {
      'id': '7',
      'skill': 'Terraform',
      'progress': '60%'
    },
    {
      'id': '8',
      'skill': 'Helm Charts',
      'progress': '60%'
    },
    {
      'id': '9',
      'skill': 'Linux',
      'progress': '70%'
    },
    {
      'id': '10',
      'skill': 'AWS Cloud Services',
      'progress': '70%'
    },
    {
      'id': '11',
      'skill': 'Azure Clouds Serivces',
      'progress': '60%'
    },
    {
      'id': '12',
      'skill': 'IBM & GCP Clouds Serivces',
      'progress': '60%'
    },
    {
      'id': '13',
      'skill': 'yaml, and Groovy',
      'progress': '70%'
    },
    {
      'id': '14',
      'skill': ' MYSQL, MONGO',
      'progress': '50%'
    },
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2015 - 2019',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'info': `Aditya Silver Oak Institute is GTU Affiliated and ranks 7th in Gujurat
Completed B.E in Computer Engineering with 9.54 CGPA.  
Won the Best Student Award 3 times for excellent Academic records at College. 
Maintained above 9.1 spi in every semester of college academic .`,
      'institution': 'ADITYA SILVER OAK INSTITUTE OF TECHNOLOGY, AHMEDABAD'
    },
    {
      'id': '2',
      'from_to_year': '2013 - 2015',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 78%.`
    },
    {
      'id': '3',
      'from_to_year': '2012 - 2013',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 84%.`
    }
  ];
  exprienceData: any = [
    {
      id: 1,
      company: 'RWS Moravia Ind Pvt LTD',
      location: 'Indore, India',
      timeline: 'Aug 29 2022 to Present',
      role: 'Devops Engineer',
      work: 'Working as a Devops Engineer .Responsible for handling and Managing the CI/CD work and Enhance CI/CD Pipelines. Montoring and Maintaining Vpshere Vms    .Creating Snapshot of Vsphere VMs for backup and patching of deployments   .Coordinating with team members on various tasks as per the requirement    .	Responsible for server management and maintenance to provide quality dev/testing environments for team.',

    },
    {
      id: 2,
      company: 'Miracle Software Systems Ind Pvt LTD',
      location: 'Visakhapatnam, India',
      timeline: 'JUN 12 2019 to Aug 26 2022',
      role: 'Devops Engineer',
      work: ' Strong management and administration skills in providing installation, configuration, troubleshooting, backup and recovery in multiple Applications and Web Servers . Deploying applications using Ansible playbooks. Automating the environment in Azure DevOps .Containerizing applications using docker . Build and push Docker images into the docker hub . Applying various Kubernetes services like Configure pods and containers, Manage Kubernetes Objects, Mange Secrets, Inject Data into applications, run applications, Monitoring, Logging, Debugging, Access Applications in Cluster, configuring volumes and Implement Domain Name Services . Automating Deployments, Services, and scaling of Containers for Walmart applications ● Worked in performance testing and troubleshooting various issues, Performed routine Management of application server environment like monitoring disk space, CPU utilization . CI/CD (Continuous Integration / Continuous Deployment) Pipeline creation in multiple environments (Azure DevOps, Jenkins) . Working with multiple Cloud Services for applying Kubernetes Services and  Coordination with team members to work on multiple implementations as per the requirement in the project.',

    },

  ]

  skills(): Observable<any> {
    
    return this.skillsData;
  }

  getProjects(): Observable<any> {
  
    return this.projects;
  }
  education(): Observable<any> {
    
    return this.educationData;
  }

  exprience(): Observable<any> {

    return this.exprienceData;
  }
}
