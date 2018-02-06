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
          <li v-for="link in filteredDocs" :key="link.id"><a href="link.url">{{ link.text }}</a></li>
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
  				{ id: 1, text: 'Johnny', url: 'https://google.com' },
  				{ id: 2, text: 'Joey', url: 'https://google.com' },
  				{ id: 3, text: 'Jimmy', url: 'https://google.com' },
  				{ id: 4, text: 'Turducken', url: 'https://google.com' },
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

