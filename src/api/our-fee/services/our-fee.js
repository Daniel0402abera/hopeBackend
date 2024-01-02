'use strict';

/**
 * our-fee service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-fee.our-fee');
