'use strict';

module.exports = ({ strapi }) => {
  // registeration phase
  strapi.customFields.register({
    name: 'timer',
    plugin: 'custome-timer',
    type: 'time',
  });
};
