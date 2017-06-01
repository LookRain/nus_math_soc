/*
    Rules for adding new events:
        1. Cut old events into archivedEvents.js in the same folder.
        2. Add the new event to the front of the EventsList array.
        3. These fields are must-fill: name, shortname, id.
        4. Start a new paragraph in description like this:
            "previous para"
            +
            "Start a new paragraph like this", // Can include any kind of html tags

*/

let EventsList = [
  {
    name: "Singapore Rubik's Cube Competitions 2017 NUS Cateogry",
    shortName: "NUS Rubik's Cube 2017",

    pointColor: 'red',
    id: 'cube2017nus',
    venue: 'LT31',
    venueDetails: 'NUS Faculty of Science S16 Level 3',
    date: '10 Feb 2017',
    timelineDate: '10 Feb',
    startTime: '1900',
    endTime: '2200',
    website: 'AY1617/cube/nus.html',
    description: '<p>This competition is open for current NUS undergraduate and graduate students only.</p>' +
                        '<p>Events include 2x2, 3x3 and 4x4 cubes.</p>', // Can include any kind of html tags
    registrationLink: 'https://nus.edu/2jAVHKo',
    registrationDetails: 'Please register by 9th Feb',
    poster: 'cube2017' // relative path
  },
  {
    name: 'NUS Sudoku Competition 2016',
    shortName: 'NUS Sudoku 2016',
    img: 'sudoku',
    pointColor: 'green',
    id: 'sudoku2016',
    shorterName: 'Sudoku Competition',
    venue: 'LT34',
    venueDetails: 'NUS Faculty of Science S17 Level 3',
    date: '12 Oct 2016',
    timelineDate: '12 Oct',
    startTime: '1830',
    endTime: '2100',
    website: 'AY1617/sudoku',
    description: "You may contact us at <a href='mailto:sudoku@nusmathsoc.org'>sudoku@nusmathsoc.org</a>",
    registrationLink: 'https://mysurvey.nus.edu.sg/EFM/se/54CCD14B75910A80',
    registrationDetails: 'Please register by 8th Oct',
    refreshments: 'Light refreshments will be provided before the prize presentation', // optional
    poster: 'sudoku2016', // relative path
    portrait: true // whether the poster is portrait or not
  },
  {
    name: "Singapore Rubik's Cube Competitions 2016",
    shortName: `SG Rubik's Cube 2016`,
    img: 'rubik',
    pointColor: 'red',
    id: 'cube2016',
    venue: 'LT31 and LT27',
    venueDetails: 'NUS Faculty of Science',
    date: '20 Feb 2016',
    timelineDate: 'Feb',
    description: `The Singapore Rubik’s Cube Competition is an annual competition held by the NUS Mathematics Society. 
						It is the sixth year running in the history of the competition that there would be a total of three categories,
						namely the NUS, School Category and the Open Category. In addition, 
						the Open Category of the Competition would be a WCA-sanctioned (World Cube Association) event.`,
    website: 'cube2016'
  },
  {
    name: "Singapore Rubik's Cube Competitions 2016 NUS Cateogry",
    shortName: `NUS Rubik's Cube 2016`,
    img: 'rubik',
    pointColor: 'red',
    id: 'cube2016nus',
    venue: 'LT31',
    venueDetails: 'NUS Faculty of Science S16 Level 3',
    date: '12 Feb 2016',
    timelineDate: '12 Feb',
    startTime: '1900',
    endTime: '2100',
    website: 'cube2016/nus.html',
    description: 'This competition is open for current NUS undergraduate and graduate students only.' +
						'Events include 2x2, 3x3 and 4x4 cubes.', // Can include any kind of html tags
    registrationLink: 'https://mysurvey.nus.edu.sg/EFM/se/54CCD14B3DA6EF05',
    registrationDetails: 'Please register by 11th Feb',
    poster: 'cube2016' // relative path
  },

  {
    name: 'LaTeX Workshop 2016',
    shortName: `LaTeX Workshop 2016`,
    img: 'workshop',
    pointColor: 'yellow',
    id: 'latex2016',
    venue: 'S17 03-04',
    venueDetails: 'NUS Science Faculty S17 03-04',
    date: '25 Jan 2016',
    timelineDate: '25 Jan',
    startTime: '1900',
    endTime: '2100',
    poster: 'latex2016',
    description: ` <b>LaTeX</b> is a document preparation system widely used to typeset high quality documents,
						especially in mathematics and sciences.
						<u><b>No prior experience</b></u> in LaTeX is required for this workshop. Participants must bring 
						their own laptops, with the required software installed (instructions will be give upon registration).' +
						"Enquiries are welcome at latexify@gmail.com"`

  },
  {
    name: 'Senior-Junior Sharing Session',
    shortName: `Senior-Junior Sharing`,
    img: 'talk',
    pointColor: 'green',
    id: 'sharing2016',
    venue: 'LT31',
    venueDetails: 'NUS Faculty of Science S16 Level 3',
    date: '20 Jan 2016',
    timelineDate: '20 Jan',
    startTime: '1800',
    endTime: '2100',
    poster: 'sharing2016',
    description: ` Our speakers will be sharing their experience and insights on several activities, 
						from the perspective of Pure Math, Applied Math and QF majors. ' +
						'By discussing the details of these activities, we aim to assist students in these majors and related majors
						in their academic and early career decisions.`

  }
]
export default EventsList
