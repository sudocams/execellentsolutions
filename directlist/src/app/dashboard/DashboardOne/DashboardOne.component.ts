import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dashboard-one',
  templateUrl: './DashboardOne.component.html',
  styleUrls: ['./DashboardOne.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardOneComponent implements OnInit{


	servicesTitle : string = '3 simple steps';
	servicesDesc  : string = 'Explore some of the best tips from around the world from our partners and friends.  Discover some of the most popular listings in Sydney.';
	services   : any = [
								{
									icon : 'fa fa-search',
									title: 'Enter requirements',
									desc : 'Enter your paper requirements such as deadline and paper format'
								},
								{
									icon : 'fa fa-phone-square',
									title: 'Select tutor',
									desc : 'Select your tutor and keep chatting him as your paper is being worked on.'
								},
								{
									icon : 'fa fa-user-plus',
									title: 'Get paper',
									desc : "Last step is to pay and get your paper and don't forget to leave a review for the tutor."
								}
							];


	featureGridTitle : string = 'Excellent Solutions guarantees the following';
	featureGridDesc  : string = 'The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.';
	featureGrids : any = [
							{
								//icon : 'fa fa-envelope',
								name : 'Zero plagiarism',
								desc : 'Your paper/Research is done from scratch, the tutors then run it via turnitin to avoid plagiarism.'
							},
							{
								//icon : 'fa fa-phone',
								name : 'Money back guarantee',
								desc : 'Students are guaranteed that an assignment will be done to their satisfaction or their money will be issued back.'
							},
							{
								//icon : 'fa fa-envelope',
								name : 'Privacy Policy',
								desc : 'We guarntee every user of this site that any data collected will be primarily used for intended purposes.'
							},
							{
							//	icon : 'fa fa-phone',
								name : 'Free revision',
								desc : "The tutor who did your assignment will do and redo your assignment to your satisfaction, You're the boss here."
							}
							];
	featureTitle : string = 'Get started today!! $12 per page';
	featureDesc  : string = 'The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.';
	feature : any = [
							{
								//icon : 'fa fa-envelope',
								name : 'Zero plagiarism',
								desc : 'Your paper/Research is done from scratch, the tutors then run it via turnitin to avoid plagiarism.'
							},
							{
								//icon : 'fa fa-phone',
								name : 'Money back guarantee',
								desc : 'Students are guaranteed that an assignment will be done to their satisfaction or their money will be issued back.'
							},
							{
								//icon : 'fa fa-envelope',
								name : 'Privacy Policy',
								desc : 'We guarntee every user of this site that any data collected will be primarily used for intended purposes.'
							},
							{
							//	icon : 'fa fa-phone',
								name : 'Free revision',
								desc : "The tutor who did your assignment will do and redo your assignment to your satisfaction, You're the boss here."
							}
							];



	teamSectionTitle : string = 'Top Amazing Earners';
	teamSectionDesc  : string = 'Below are our top tutors who have managed to make a fortune from the company.';
	teamMembers : any = [
							{
								name     : 'Professor Tompson',
								position : '$13673',
								image    : 'assets/images/thumb-1.jpg'
							},
							{
								name     : 'Romina Hadid',
								position : '$12874',
								image    : 'assets/images/thumb-2.jpg'
							},
							{
								name     : 'Smart Tutor',
								position : '$11947',
								image    : 'assets/images/thumb-3.jpg'
							},
							{
								name     : 'Ethan Moore',
								position : '$8438',
								image    : 'assets/images/thumb-4.jpg'
							},
							{
								name     : 'Smart Tutor',
								position : '$11947',
								image    : 'assets/images/thumb-3.jpg'
							},
							{
								name     : 'Ethan Moore',
								position : '$8438',
								image    : 'assets/images/thumb-4.jpg'
							},
							{
								name     : 'Smart Tutor',
								position : '$11947',
								image    : 'assets/images/thumb-3.jpg'
							},
							{
								name     : 'Ethan Moore',
								position : '$8438',
								image    : 'assets/images/thumb-4.jpg'
							}
						  
						];                  

	
	testimonialTitle : string = 'What Fellow Students Say';
	testimonialDesc  : string = 'We collect reviews from our users so you can get an honest opinion of what an experience with our website are really like!';
	testimonials : any = [
							{
								message  : 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation is on the runway heading towards a streamlined cloud solution user generated content.',
								name     : 'Mahesh',
								position : 'Researcher',
								image    : 'assets/images/thumb-1.jpg'
							},
							{
								message  : 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop.',
								name     : 'Neel Gomez',
								position : 'Clothing Store Owner',
								image    : 'assets/images/thumb-2.jpg'
							},
							{
								message  : 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view.',
								name     : 'Jackline Paden',
								position : 'Restaurant Owner',
								image    : 'assets/images/thumb-3.jpg'
							},
							{
								message  : 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation is on the runway heading towards a streamlined cloud solution user generated content.',
								name     : 'Jennie Smith',
								position : 'Researcher',
								image    : 'assets/images/thumb-1.jpg'
							},
							{
								message  : 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop.',
								name     : 'Tom Baker',
								position : 'Student',
								image    : 'assets/images/thumb-2.jpg'
							},
							{
								message  : 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view.',
								name     : 'Ross Paden',
								position : 'student',
								image    : 'assets/images/thumb-3.jpg'
							}
							];

	constructor(){}

	ngOnInit(){}

	ngAfterViewInit()
	{

	}
}
