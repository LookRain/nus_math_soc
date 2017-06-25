/*
    Rules for adding new events:
        1. Cut old events into archivedEvents.js in the same folder.
        2. Add the new event to the front of the EventsList array.
        3. These fields are must-fill: name, shortname, id.
        4. Start a new paragraph in description like this:
            "previous para"
            +
            "Start a new paragraph like this",
// Can include any kind of html tags

*/

let EventsList = [
    {
    name: 'Enrichment Talk 2017',
    shortname: 'Talk 2015',
    venue: 'LT28',
    pointColor: 'yellow',
    img: 'talk',
    date: '22 Mar 2017',
    startTime: '1830',
    endTime: '2030',
    poster: 'enrichment-talk-2017',
    description: `This year, we had Associate Professor Han Fei, giving a talk on Application of Topology/Geometry in Science and Technology. The talk was very thought-intriguing and interesting. Students didn't hesitate to raise their questions at the end of the talk.`
  },
  {
    name: "Singapore Rubik's Cube Competitions 2017 Open Category",
    shortName: `SG Cube`,
    img: 'rubik',
    startTime: '0815',
    endTime: '1900',
    pointColor: 'red',
    id: 'cube2017open',
    venue: 'LT27 and LT31',
    venueDetails: 'NUS Faculty of Science',
    date: '18 Feb 2017',
    endDate: '19 Feb 2017',
    description: `<p>In Singapore Open 2017, we had 191 participants from 16 countries and saw 34 national records and 1 Asian record broken.</p> <p>
    We have updated all results on the Cubecomps website at <a href="http://cubecomps.com/live.php?cid=2034">http://cubecomps.com/live.php?cid=2034</a>.</p> 
    <p>Many photos have been uploaded to our <a href="https://www.facebook.com/pg/SGCubeComps/photos/?tab=album&album_id=1321806427880045">Facebook album</a> as well.</p> Congratulations to our prize winners and we hope to see you again next year!
    <p><b>Video</b>: <a href="https://www.youtube.com/watch?v=NdostXBHzQI&sns=fb">https://www.youtube.com/watch?v=NdostXBHzQI&sns=fb</a></p>
    `,
    website: 'http://cube2017.nusmathsoc.org/open.html#home',
    poster: 'cube2017open'
  },
  {
    name: "Singapore Rubik's Cube Competitions 2017 School Category",
    shortName: `NUS Cube`,
    img: 'rubik',
    pointColor: 'yellow',
    id: 'cube2017school',
    venue: 'LT27 and LT31',
    venueDetails: 'NUS Faculty of Science',
    date: '11 Feb 2017',
    startTime: '0900',
    endTime: '1730',
    description: `The results of Singapore Rubik's Cube 2017 School Category can be found at <a href="http://cube2017.nusmathsoc.org/school/results.html#3i">here</a>. 
    <p>Thanks for coming and see you next year!</p>
    <p>Many photos have been uploaded to our <a href="https://www.facebook.com/pg/SGCubeComps/photos/?tab=album&album_id=1314085901985431">Facebook album</a> as well.</p>
    `,
    poster: 'cube2017school'
  },
  {
    name: 'QF Industrial Talk 2016',
    shortName: 'QF Talk 16',
    pointColor: 'green',
    img: 'talk',
    id: 'QFtalk2016',
    venue: 'LT31',
    date: '3 Nov 2016',
    startTime: '1900',
    endTime: '2100',
    poster: 'QF Industrial Talk'
  },
  {
    name: 'NUS Sudoku Competition 2016',
    shortName: 'NUS Sudoku',
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
    name: 'QF Senior-Junior Sharing Session 2016',
    shortName: 'QF Sharing 16',
    pointColor: 'green',
    img: 'talk',
    id: 'QFsharing2017',
    venue: 'LT31',
    date: '13 Sep 2016',
    startTime: '1900',
    endTime: '2100',
    poster: 'QF senior-junior sharing session 2016'
  },
  {
    name: "Singapore Rubik's Cube Competitions 2016",
    shortName: `SG Cube`,
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
    shortName: `NUS Cube`,
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
    description: ' <p><b>LaTeX</b> is a document preparation system widely used to typeset high quality documents,\n' +
    'especially in mathematics and sciences.</p>' +
    '<p><u><b>No prior experience</b></u> in LaTeX is required for this workshop. Participants must bring \n' +
    'their own laptops, with the required software installed (instructions will be give upon registration).</p>' +
    '<p>Enquiries are welcome at <a href="mailto:latexify@gmail.com">latexify@gmail.com</a></p>'

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
