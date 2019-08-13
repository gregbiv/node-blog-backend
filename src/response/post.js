const Pagination = require('./pagination');

/**
 * @typedef PostResponse
 * @property {integer} take.required
 * @property {integer} skip.required
 * @property {integer} count.required
 * @property {integer} total.required
 * @property {Array.<Post>} items.required
 */
class PostResponse extends Pagination {

}

module.exports = PostResponse;
