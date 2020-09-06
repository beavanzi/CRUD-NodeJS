const path = require('path');

module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: path.resolve(__dirname, 'src', 'db', 'database.sqlite'),
        },
        migrations: {
            directory: path.resolve(__dirname, 'src', 'db', 'migrations')
        },
        useNullAsDefault: true,
    },
    test: {
        client: 'sqlite3',
        connection: {
            filename: path.resolve(__dirname, 'src', 'db', 'test.sqlite'),
        },
        migrations: {
            directory: path.resolve(__dirname, 'src', 'db', 'migrations')
        },
        useNullAsDefault: true,

    },

    //não setei as configurações abaixo
    staging: {
        client: '',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },

    production: {
        client: '',
        connection: {
            database: 'my_db',
            user: 'username',
            password: 'password'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }

};


