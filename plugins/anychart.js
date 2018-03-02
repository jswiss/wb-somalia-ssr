import Vue from 'vue';
import anychart from 'anychart';

Vue.use(anychart);

anychart.licenseKey(process.env.CHART_KEY);
