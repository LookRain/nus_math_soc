<template>
  <div>
   <section class="hero is-warning">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h1 class="title">About Us
            </h1>
            <h2 class="subtitle">A little story time...
            </h2>
          </div>
        </div>          
      </div>
    </div>
  </section>

  <section class="section">
   <div class="container">
     <div class="columns">
       <div class="column is-3">
         <p v-html="description"></p>
       </div> 

       <hr>
       <div class="column is-1"></div>

       <div class="column is-8">
         <h2 class="subtitle"><b>NUS Mathematics Society 32nd Management Committee:</b></h2>
         <table class="table is-bordered">
          <thead>
            <tr>
              <th>Position</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="person in exco">
              <td>{{ person.position }}</td>
              <td>{{ person.name }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <hr>
    
    <img :src="groupPhoto" alt="">

  </div>
</section>

</div>
</template>
<script>
  export default {
    name: 'AboutUs',
    data () {
      return {
        groupPhotoName: 'exco_AY20162017',
        description: "<p>National University of Singapore (NUS) Mathematics Society was founded back in 1985. In the past few decades, the society has made a remarkable leap in promoting a more gracious mathematical environment in NUS. Aiming to make the students to learn beyond classroom texts, as well as to enrich students' non-academic life.</p><br>" +
        '<p>Click <a target="_blank" href="file/about_us/Math_Society_2017.pptx">here</a> if you want to find out more about us!</p><br>' +
        '<small>* The NUS Mathematics Society is registered with the <a target="_blank" href="https://www.ros.mha.gov.sg">Registry of Societies of Singapore</a>. It is formed by students of NUS and is a self-governing body. NUS Mathematics Society is not part of the legal entity of NUS. It does not represent NUS and cannot act or make any representation on its behalf. Any views or activities of NUS Mathematics Society are solely those of the society and its members. They do not necessarily represent the position of NUS. The activities and views of NUS Mathematics Society are the sole responsibilities of the society and of its members.</small>',
        exco: [
        {position: 'President', name: 'Song Jiaming'},
        {position: 'Vice-President (Internal)', name: 'Bi Mingyan'},
        {position: 'Vice-President (External)', name: 'Yang Sirui'},
        {position: 'Honorary General Secretary', name: 'Chen Penghao'},
        {position: 'Honorary General Treasurer', name: 'Le Minh Phuc'},
        {position: 'Project Director', name: 'Chen Naixian'},
        // {position: 'Assistant Project Director',name: 'Teo Xing Qi'},
        {position: 'Information Technology Director', name: 'Lu Yu'},
        {position: 'Marketing Director', name: 'Li Xiaowei'},
        {position: 'Public Relations Officer', name: 'Yang Muzi'},
        {position: 'Publicity Director', name: 'Li Zihan'},
        {position: 'Logistic Director', name: 'Xia Rui'},
        //    {'Assistant Logistic Director',' name: Yoshiko Kubo'},
        {position: 'President of LaTeXify Subcom', name: 'Mark Ng'},
        //    {position: 'President of Pure Maths Subcom', name: ''},
        //    {position: 'President of Applied Maths Subcom', name: ''},
        {position: 'President of QF Subcom', name: 'Wang Zexin'}
        //    {position: 'President of Statistics Subcom', name: 'Nur Annastasia Hendrietta'}
        ]
      }
    },
    computed: {
      groupPhoto () {
        return this.getImageUrl(this.groupPhotoName)
      }
    },
    methods: {
      getImageUrl (imgName) {
        var images = require.context('../assets/images/', false, /\.jpg$/)
        return images('./' + imgName + '.jpg')
      }
    }
  }
</script>
<style lang="css" scoped>
</style>
