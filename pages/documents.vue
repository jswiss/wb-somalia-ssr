<template>
  <div id="section" class="section is-mobile">
    <div class="container is-mobile">
      <h1 class="title is-3 is-mobile">{{ title }}</h1>

        <!--<div class="column is-2"></div>
        <div class="column is-5">
          <h1 class="title is-3">{{ title }}</h1>
          <div class="field is-mobile">
            <label for="query" class="label">Search Documents</label>
            <input type="text" name="query" class="input" v-model="searchQuery">
          </div>
        </div>
        <div class="column is-5"></div>

      <div class="columns is-gapless">
        <div class="column is-2"></div>
        <div class="column is-6 is-mobile">
          <ul id="doc-list is-mobile">
            <li v-for="link in filteredDocs" :key="link.id"><a :href="link.url" target="_blank">{{ link.text }}    </a><span><img :src="link.fileType" alt=""></span></li>
          </ul>
        </div>
        <div class="column is-4"></div>
      </div> -->


      <div class="columns is-gapless">
        <!-- <div class="column is-1"></div> -->
        <div class="column is-5 is-mobile">
          <table id="table" class="table is-striped is-hoverable is-bordered is-narrow is-mobile">
            <thead>
              <tr>
                <th>Reports</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="link in sortedReports" :key="link.id">
                <td>{{ link.text }}</td>
                <td><span><a :href="link.url" target="_blank"><img :src="link.fileType" alt=""></a></span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="column is-1"></div>
        <div class="column is-5 is-mobile">
          <table id="table" class="table is-striped is-hoverable is-bordered is-narrow is-mobile">
            <thead>
              <tr>
                <th>Data</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="link in sortedData" :key="link.id">
                <td>{{ link.text }}</td>
                <td><span><a :href="link.url" target="_blank"><img :src="link.fileType" alt=""></a></span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="column is-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  	name: 'documents',
  	data() {
  		return {
  			title: 'Aid Flow Document Library',
  			sortedReports: [],
  			sortedData: [],
  			links: [
  				{
  					id: 1,
  					text: '2014 Aid Flow Analysis',
  					url:
  						'https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/2014+Aid+Flows+Analysis.pdf',
  					fileType: 'https://icon.now.sh/picture_as_pdf',
  					date: 1,
  					type: 'report',
  				},
  				{
  					id: 2,
  					text: '2016 Aid Flow Analysis',
  					url:
  						'https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/2016+Aid+Flows+Analysis.pdf',
  					fileType: 'https://icon.now.sh/picture_as_pdf',
  					date: 3,
  					type: 'report',
  				},
  				{
  					id: 3,
  					text: '2017 Aid Flow Analysis',
  					url:
  						'https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/2017+Aid+Flows+Analysis.pdf',
  					fileType: 'https://icon.now.sh/picture_as_pdf',
  					date: 4,
  					type: 'report',
  				},
  				{
  					id: 4,
  					text: '2015 - Somalia AIMS Review',
  					url:
  						'https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/Somali+AIMS+Review+19Aug.pdf',
  					fileType: 'https://icon.now.sh/picture_as_pdf',
  					date: 2,
  					type: 'report',
  				},
  				{
  					id: 5,
  					text: 'Somalia Aid Flows - 2018 Envelopes Reporting',
  					url:
  						'https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/Somalia+Aid+Flows+-+2018+Envelopes+Reporting.xlsx',
  					fileType: 'https://icon.now.sh/microsoftexcel',
  					date: 3,
  					type: 'data',
  				},
  				{
  					id: 6,
  					text: 'Somalia Aid Flows - 2018 Pooled Funds',
  					url:
  						'https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/Somalia+Aid+Flows+-+2018+Pooled+Funds.xlsx',
  					fileType: 'https://icon.now.sh/microsoftexcel',
  					date: 2,
  					type: 'data',
  				},
  				{
  					id: 7,
  					text: 'Somalia Aid Flows - 2018 Master Data',
  					url:
  						'https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/Somalia+Aid+Flows+2018+Master.xlsx',
  					fileType: 'https://icon.now.sh/microsoftexcel',
  					date: 1,
  					type: 'data',
  				},
  				{
  					id: 8,
  					text: '2018 - FGS Excerpt',
  					url:
  						'https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/Aid+Flows+in+Somalia+-+FGS+Excerpt.pdf',
  					fileType: 'https://icon.now.sh/picture_as_pdf',
  					date: 5,
  					type: 'report',
  				},
  				{
  					id: 9,
  					text: '2018 - Benadir Excerpt',
  					url:
  						'https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/Aid+Flows+in+Somalia+-+Benadir+Exerpt.pdf',
  					fileType: 'https://icon.now.sh/picture_as_pdf',
  					date: 6,
  					type: 'report',
  				},
  				{
  					id: 10,
  					text: '2018 - Galmudug Excerpt',
  					url:
  						'https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/Aid+Flows+in+Somalia+-+Galmudug+Excerpt+.pdf',
  					fileType: 'https://icon.now.sh/picture_as_pdf',
  					date: 7,
  					type: 'report',
  				},
  				{
  					id: 11,
  					text: '2018 - Hiirshabelle Excerpt',
  					url:
  						'https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/Aid+Flows+in+Somalia+-+Hiirshabelle+Excerpt.pdf',
  					fileType: 'https://icon.now.sh/picture_as_pdf',
  					date: 8,
  					type: 'report',
  				},
  				{
  					id: 12,
  					text: '2018 - Jubaland Excerpt',
  					url:
  						'https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/Aid+Flows+in+Somalia+-+Jubaland+Excerpt++.pdf',
  					fileType: 'https://icon.now.sh/picture_as_pdf',
  					date: 9,
  					type: 'report',
  				},
  				{
  					id: 13,
  					text: '2018 - Puntland Excerpt',
  					url:
  						'https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/Aid+Flows+in+Somalia+-+Puntland+Excerpt+.pdf',
  					fileType: 'https://icon.now.sh/picture_as_pdf',
  					date: 10,
  					type: 'report',
  				},
  				{
  					id: 14,
  					text: '2018 - Somaliland Excerpt',
  					url:
  						'https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/Aid+Flows+in+Somalia+-+Somaliland+Excerpt.pdf',
  					fileType: 'https://icon.now.sh/picture_as_pdf',
  					date: 11,
  					type: 'report',
  				},
  				{
  					id: 15,
  					text: '2018 - South West Excerpt',
  					url:
  						'https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/Aid+Flows+in+Somalia+-+South+West+Excerpt.pdf',
  					fileType: 'https://icon.now.sh/picture_as_pdf',
  					date: 12,
  					type: 'report',
  				},
  			],
  			searchQuery: '',
  		};
  	},
  	computed: {
  		filteredDocs() {
  			return this.links.filter(link => {
  				return link.text.toLowerCase().includes(this.searchQuery.toLowerCase());
  			});
  		},
  	},
  	methods: {
  		sortData() {
  			for (var link of this.links) {
  				if (link.type === 'report') {
  					this.sortedReports.push(link);
  				} else if (link.type === 'data') {
  					this.sortedData.push(link);
  				}
  			}
  			this.sortArray(this.sortedReports);
  			this.sortArray(this.sortedData);
  		},

  		sortArray(array) {
  			array.sort(function(a, b) {
  				return a.date - b.date;
  			});
  		},
  	},
  	mounted() {
  		this.sortData();
  	},
  };
</script>

<style scoped>
  #section {
  	margin-top: 3%;
  }

  #tables-container {
  	display: flex;
  	justify-content: space-around;
  }
</style>
