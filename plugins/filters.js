import Vue from 'vue';

Vue.filter('currency', function(data) {
  return data
    .toString()
    .replace(/,/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
});

Vue.filter('caps', function(phrase) {
  return phrase
    .split(' ')
    .map(word =>
      word
        .charAt(0)
        .toUpperCase()
        .word.slice(1)
    )
    .join(' ');
});
