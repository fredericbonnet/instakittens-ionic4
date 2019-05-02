module.exports = {
  url: function() {
    return this.api.launchUrl + '/';
  },

  commands: {
    navigateTo: function() {
      return this.navigate();
    },
  },
};
