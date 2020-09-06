const isEmpty = require('../../src/utils/isEmpty');

describe('isEmpty function', () => {
    it('should return status code 200', () => {

        let res = {
            status: function (st) {
                this.status = st;
                return this.status;
            },
            json: function (obj) {
                this.json = JSON.stringify(obj);

                return this.json;
            }
        };

        const array = [{ teste: 'teste' }];

        const result = isEmpty(array, res, 'error message');
        expect(result.status).toBe(200);
    });

    it('should return status code 404', () => {

        let res = {
            status: function (st) {
                this.status = st;
                return this.status;
            },
            json: function (obj) {
                this.json = JSON.stringify(obj);

                return this.json;
            }
        };

        const array = [];

        const result = isEmpty(array, res, 'error message');
        expect(result.status).toBe(404);
    })
});