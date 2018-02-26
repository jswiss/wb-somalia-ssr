<template>
  <div id="documents">
    <div class="columns is-gapless is-mobile">
    <div class="column is-2"></div>
     <div class="column is-5">
      <div class="field">
        <label for="query" class="label">Search Documents</label>
        <input type="text" name="query" class="input" v-model="searchQuery">
      </div>
     </div>
      <div class="column is-5"></div>
    </div>
    <div class="columns is-gapless is-mobile">
      <div class="column is-2"></div>
      <div class="column is-6">
        <ul id="doc-list">
          <li v-for="link in filteredDocs" :key="link.id"><a :href="link.url" target="_blank">{{ link.text }}    </a><span><img :src="link.fileType" alt=""></span></li>
        </ul>
      </div>
      <div class="column is-4"></div>
    </div>
  </div>
</template>

<script>
  export default {
  	name: 'documents',
  	data() {
  		return {
  			links: [
  				{
  					id: 1,
  					text: '2014 Aid Flow Analysis',
  					url:
  						'https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/2014+Aid+Flows+Analysis.pdf',
  					fileType: 'https://icon.now.sh/picture_as_pdf',
  				},
  				{
  					id: 2,
  					text: '2016 Aid Flow Analysis',
  					url:
  						'https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/2016+Aid+Flows+Analysis.pdf',
  					fileType: 'https://icon.now.sh/picture_as_pdf',
  				},
  				{
  					id: 3,
  					text: '2017 Aid Flow Analysis',
  					url:
  						'https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/2017+Aid+Flows+Analysis.pdf',
  					fileType: 'https://icon.now.sh/picture_as_pdf',
  				},
  				{
  					id: 4,
  					text: 'Somalia AIMS Review',
  					url:
  						'https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/Somali+AIMS+Review+19Aug.pdf',
  					fileType: 'https://icon.now.sh/picture_as_pdf',
  				},
  				{
  					id: 5,
  					text: 'Somalia Aid Flows - 2018 Envelopes Reporting',
  					url:
  						'https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/Somalia+Aid+Flows+-+2018+Envelopes+Reporting.xlsx',
  					fileType: 'https://icon.now.sh/microsoftexcel',
  				},
  				{
  					id: 6,
  					text: 'Somalia Aid Flows - 2018 Pooled Funds',
  					url:
  						'https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/Somalia+Aid+Flows+-+2018+Pooled+Funds.xlsx',
  					fileType: 'https://icon.now.sh/microsoftexcel',
  				},
  				{
  					id: 7,
  					text: 'Somalia Aid Flows - 2018 Master Data',
  					url:
  						'https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/Somalia+Aid+Flows+2018+Master.xlsx',
  					fileType: 'https://icon.now.sh/microsoftexcel',
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
  };
</script>

<style scoped>
  #documents {
  	margin-top: 5%;
  }
</style>

