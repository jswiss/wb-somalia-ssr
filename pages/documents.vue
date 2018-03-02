<template>
  <div id="section" class="section">
    <div class="container">

      <div class="columns is-gapless">
        <div class="column is-2"></div>
        <div class="column is-5">
          <h1 class="title is-3">{{ title }}</h1>
          <div class="field is-mobile">
            <label for="query" class="label">Search Documents</label>
            <input type="text" name="query" class="input" v-model="searchQuery">
          </div>
        </div>
        <div class="column is-5"></div>
      </div>

      <div class="columns is-gapless">
        <div class="column is-2"></div>
        <div class="column is-6 is-mobile">
          <ul id="doc-list is-mobile">
            <li v-for="link in filteredDocs" :key="link.id"><a :href="link.url" target="_blank">{{ link.text }}    </a><span><img :src="link.fileType" alt=""></span></li>
          </ul>
        </div>
        <div class="column is-4"></div>
      </div>

      <!-- <div class="columns is-gapless">
        <div class="column is-2"></div>
        <div class="column is-6 is-mobile">
          <ul id="doc-list is-mobile">
            <li>
              <h1>Reports</h1>
            </li>
            <li v-for="link in sortedReports" :key="link.id">
              <a :href="link.url" target="_blank">{{ link.text }}</a>
              <span><img :src="link.fileType" alt=""></span>
            </li>
          </ul>
        </div>
        <div class="column is-4"></div>
      </div>

      <div class="columns is-gapless">
        <div class="column is-2"></div>
        <div class="column is-6 is-mobile">
          <ul id="doc-list is-mobile">
            <li>
              <h1>Datasheets</h1>
            </li>
            <li v-for="link in sortedData" :key="link.id">
              <a :href="link.url" target="_blank">{{ link.text }}</a>
              <span><img :src="link.fileType" alt=""></span>
            </li>
          </ul>
        </div>
        <div class="column is-4"></div>
      </div> -->

      <div id="tables-container">

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
          date: 1414800000,
          type: 'report'
        },
        {
          id: 2,
          text: '2016 Aid Flow Analysis',
          url:
          'https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/2016+Aid+Flows+Analysis.pdf',
          fileType: 'https://icon.now.sh/picture_as_pdf',
          date: 1454284800,
          type: 'report'
        },
        {
          id: 3,
          text: '2017 Aid Flow Analysis',
          url:
          'https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/2017+Aid+Flows+Analysis.pdf',
          fileType: 'https://icon.now.sh/picture_as_pdf',
          date: 1491004800,
          type: 'report'
        },
        {
          id: 4,
          text: 'Somalia AIMS Review',
          url:
          'https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/Somali+AIMS+Review+19Aug.pdf',
          fileType: 'https://icon.now.sh/picture_as_pdf',
          date: 1439596800,
          type: 'report'
        },
        {
          id: 5,
          text: 'Somalia Aid Flows - 2018 Envelopes Reporting',
          url:
          'https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/Somalia+Aid+Flows+-+2018+Envelopes+Reporting.xlsx',
          fileType: 'https://icon.now.sh/microsoftexcel',
          date: 1514764800,
          type: 'data'
        },
        {
          id: 6,
          text: 'Somalia Aid Flows - 2018 Pooled Funds',
          url:
          'https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/Somalia+Aid+Flows+-+2018+Pooled+Funds.xlsx',
          fileType: 'https://icon.now.sh/microsoftexcel',
          date: 1514764802,
          type: 'data'
        },
        {
          id: 7,
          text: 'Somalia Aid Flows - 2018 Master Data',
          url:
          'https://s3.eu-central-1.amazonaws.com/somalia-aid-flows.so/Somalia+Aid+Flows+2018+Master.xlsx',
          fileType: 'https://icon.now.sh/microsoftexcel',
          date: 1514764801,
          type: 'data'
        },
      ],
      searchQuery: '',
    }
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
          this.sortedReports.push(link)
        } else if (link.type === 'data') {
          this.sortedData.push(link)
        }
      }
      this.sortArray(this.sortedReports);
      this.sortArray(this.sortedData);
    },

    sortArray(array) {
      array.sort(function(a, b) {
        return a.date - b.date
      })
    }
  },
  mounted() {
    this.sortData()
  }
}
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
