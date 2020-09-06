const db = require('../db/index.js');
const isEmpty = require('../utils/isEmpty');

module.exports = {
    index(req, res) {
        const page = req.query.page || 1;

        db('desenvolvedores').limit(4).offset((page - 1) * 4).select('*').then((devs) => {
            if (page != 1) {
                isEmpty(devs, res, 'página não encontrada');
            } else {
                res.status(200).json(devs);
            }

        }).catch((err) => {
            res.status(400).json({ errorMessage: 'parametros não especificados corretamente', error: err });
        })
    },

    show(req, res) {

        db('desenvolvedores').where('desenvolvedores.id', '=', req.params.id).select('*').then((dev) => {
            isEmpty(dev, res, 'não foi encontrado desenvolvedor com este id');
        }).catch((err) => {
            res.status(400).json({ errorMessage: 'parametro não especificado corretamente', error: err })
        })
    },

    async store(req, res) {
        const { nome, sexo, idade, hobby, datadenascimento } = req.body;

        const tran = await db.transaction();

        try {
            await tran('desenvolvedores').insert({ nome, sexo, idade, hobby, datadenascimento })

            await tran.commit();

            return res.status(201).json({ message: 'sucesso na inserção' });
        } catch (err) {
            await tran.rollback();

            return res.status(400).json({ errorMessage: 'erro inexperado na inserção de novo desenvolvedor', error: err })
        }


    },

    async update(req, res) {

        const dev = await db("desenvolvedores").where('desenvolvedores.id', '=', req.params.id).select('id').first();

        if (!dev) {
            res.status(404).json({ errorMessage: 'não foi encontrado um desenvolvedor com este id' });
        } else {
            db('desenvolvedores').where({ id: req.params.id }).update({
                nome: req.body.nome || '',
                sexo: req.body.sexo || '',
                idade: req.body.idade || '',
                hobby: req.body.hobby || null,
                datadenascimento: req.body.datadenascimento || '',
            }).then(() => {
                res.sendStatus(200);
            }).catch((err) => {
                res.sendStatus(400).json({ errorMessage: 'erro na alteração de dados', error: err });
            });
        }
    },

    async destroy(req, res) {

        const dev = await db("desenvolvedores").where('desenvolvedores.id', '=', req.params.id).select('id').first();

        if (!dev) {
            res.status(404).json({ errorMessage: 'não foi encontrado um desenvolvedor com este id' });
        } else {
            db("desenvolvedores").where('desenvolvedores.id', '=', req.params.id).del()
                .then(() => {
                    res.sendStatus(204);
                })
                .catch((err) => {
                    res.sendStatus(400).json({ errorMessage: 'erro na exclusão de desenvolvedor', error: err });
                });
        }
    }

};