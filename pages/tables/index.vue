<template lang="html">
  <div id="topmost" class="container is-fluid">
    <table-tabs></table-tabs>
    <div id="table-text">
			Dummy text here (add columns dummy)
		</div>
  </div>
</template>

<script>
	import TableTabs from '~/components/TableTabs';

	export default {
		name: 'tables',
		components: {
			TableTabs,
		},
	};
</script>
