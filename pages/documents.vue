<template>
  <div id="documents">
    <form action="">
      <input type="text" name="query" placeholder="filter documents" v-model="searchQuery">
    </form>
    <ul id="doc-list">
      <li v-for="link in filteredDocs" :key="link.id"><a href="link.url">{{ link.text }}</a></li>
    </ul>
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

