<template>
	<div>
		<section class="hero is-warning">
			<div class="hero-body">
				<div class="container">
					<div class="columns">
						<div class="column">
							<h1 class="title">Join Us
							</h1>
							<h2 class="subtitle">Because why not?
							</h2>
						</div>
					</div>          
				</div>
			</div>
		</section>

		<section class="section">
			
			<div class="container">
				
				<div class="content">
					<h1 class="title">Recruitment {{ year }}</h1>					
				</div>
				<div class="columns">

					<div class="column is-6" id="recruiting">						
						<div class="content">							
							<p>
								Don’t hesitate anymore! Join NUS Mathematics Society and make your first correct move in your university life.
							</p>							
							<p>
								The deadline for submitting the application form is <b>1159pm, 27 August 2017</b>. However, interviews will start from as early as <b>14 August 2017</b>. Do submit your application early so that we can meet you and know you better early!
							</p>	
							<p>
								If you want to apply for <b>member</b> only, please fill up the survey.
</p>						
							<p>
								If you want to apply for Management Committee position, please download the application form, fill up and send to <a href="mailto:admin@nusmathsoc.org">admin@nusmathsoc.org</a>!
							</p>				

							<small v-if="!isRecruiting">Sorry, the application is closed for the moment.</small>

							<a @click.prevent="openSurvey" class="button is-primary" :disabled="!isRecruiting" target="_blank">Fill Survey</a>
							<a @click.prevent="downloadForm" class="button is-primary" :disabled="!isRecruiting" target="_blank">Download Form</a>
						</div>
					</div>
					
					<hr>

					<div class="column is-6" id="positions">
						<div class="content">
							<h4 class="subtitle">The following positions are available for application:</h4>							
							<ul>
								<div class="notification" v-if="availablePositions.length === 0">								
									Sorry we do not have any more available positions...
								</div>
								<li v-else v-for="position in availablePositions" :key="position">{{ position }}</li>
							</ul>
						</div>	
					</div>				
				</div>
				
				<hr>

				<div class="content">
					<h1 class="title">Why Should You Join Us?</h1>
					<ul>
						<li>
							<b>Gain event organizing experience!</b><br>
							Every member will have the chance to organize and even supervise an event.	You can gain first-hand experience in event planning and organization even as a fresh student. Come and take the lead! The society is YOURS!
						</li>
						<li>
							<b>Get to learn NEW things!</b><br>
							Can you solve Sudoku within 1 minute? Can you solve a rubik’s cube within 30 seconds? Join us and you can do all those COOL stuff in front of your loved ones and your friends!
						</li>
						<li>
							<b>Get guidance in your study and career!</b><br>
							In mathematics society, we have seniors from different faculties that will help you in your academies and even your career path. Some of our seniors are the solution solvers for the NUS past year exam papers. So you will definitely be in a good hand!
						</li>
						<li>
							<b>Make new friends and be one of our big families!</b><br>
							Have fun and make new friends through various events. You will gain far beyond what you imagine.
						</li>
					</ul>
				</div>

			</div>

		</section>
	</div>

</template>
<script>
	export default {
	  name: 'JoinUs',
	  data () {
	    return {
	      year: 'AY17/18',
	      isRecruiting: true,
	    	formLink: 'http://nusmathsoc.org/file/application/NUS_Mathematics_Society_33rd_Management_Committee_Application_Form.docx', // the link of the application form (usually a google doc link)
	    	surveyLink: 'https://mysurvey.nus.edu.sg/EFM/se/54CCD14B3F552625',
	      availablePositions: [
	        'Project Director',
	        'Assistant Project Director',
	      // 'Logistics Director',
	        'Publicity Director',
	      // 'Public Relations Officer',
	      // 'Marketing Director',
	        'Ordinary Member'
	      ]
	    }
	  },
	  methods: {
	  	downloadForm () {
	  		if (this.isRecruiting) {
	  			window.open(this.formLink, '_blank').focus()
	  		}
	  	},
	    openSurvey () {
	      if (this.isRecruiting) {
	  			window.open(this.surveyLink, '_blank').focus()
	  		}
	    }
	  }
	}
</script>
<style lang="css" scoped>
</style>
