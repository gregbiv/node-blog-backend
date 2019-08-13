const Pagination = require('./pagination');

/**
 * @typedef PostResponse
 * @property {integer} take
 * @property {integer} skip
 * @property {integer} count
 * @property {integer} total
 * @property {Array.<Post>} items
 */
class PostResponse extends Pagination {

}

module.exports = PostResponse;
