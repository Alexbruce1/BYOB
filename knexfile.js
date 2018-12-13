// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/cars',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev/'
    },
    useNullAsDefault: true,
  },

  testing: {
    client: 'pg',
    connection: 'postgres://localhost/cars',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev/'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'pg',
    connection: 'postgres://localhost/cars',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev/'
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'pg',
    connection: 'postgres://localhost/cars',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev/'
    },
    useNullAsDefault: true,
  },

};