/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
const axios = require('axios')

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  boostedCreatures,
}) => {
  axios
    .get('https://api.tibialabs.com/v2/boostedcreatures.json')
    .then(function(response) {
      sessionStorage.clear()
      sessionStorage.setItem(
        'boostedcreatures',
        JSON.stringify(response.data.boostedcreatures)
      )
    })
}
