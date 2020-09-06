const app = require('../../src/confServer');
const request = require('supertest')
const db = require('../../src/db/index');

describe('CRUD methods', () => {
    beforeEach(async () => {
        await db.migrate.rollback();
        await db.migrate.latest();
    });

    afterAll(async () => {
        await db.destroy();
    })

    it('should create a new developer and return 201 (POST)', async () => {

        const res = await request(app).post('/developers').send({
            nome: "Teste Insercao",
            sexo: "F",
            idade: 20,
            hobby: "Nada",
            datadenascimento: "06/03/1999"
        });

        expect(res.status).toBe(201);
    });

    it('should delete a developer and return 404 (DELETE)', async () => {

        const res = await request(app).delete('/developers/:id').send("1");

        expect(res.status).toBe(404);
    });

    it('should search a developer and return 404 (GET)', async () => {

        const res = await request(app).get('/developers/:id').send("1");

        expect(res.status).toBe(404);
    });

    it('should edit data from a developer and return 404 (PUT)', async () => {

        const res = await request(app).put('/developers/:id').send({
            nome: "Teste Update",
            sexo: "X",
            idade: 20,
            hobby: "Nenhum",
            datadenascimento: "06/03/1999"
        });

        expect(res.status).toBe(404);
    });



});