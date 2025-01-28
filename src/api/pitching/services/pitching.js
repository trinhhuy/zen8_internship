'use strict';

/**
 * pitching service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pitching.pitching');
