class Pagination {
    /**
     * @param {number} page - page
     * @param {number} perPage - limit
     * @param {number} total - total
     * @param {Array<Object>} items - items
     * @constructor
     */
    constructor(page, perPage, total, items) {
        this.take = perPage;
        this.skip = (page - 1) * perPage;
        this.count = items.length;
        this.total = total;
        this.items = items;
    }
}

module.exports = Pagination;
