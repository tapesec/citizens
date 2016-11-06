const async = require('async');
const dataSets = require('./dataSets');
const moment = require ('moment');

function createTablesIfNotExists(knex) {

    const start = moment().valueOf();

    return knex.schema.hasTable('users')

    .then((exist) => {
        if (exist) return knex.schema.dropTable('users');
        else return new Promise((resolve, reject) => resolve());
    })

    .then(() => {
        return knex.schema.hasTable('messages').then(exists => {
            if (exists) return knex.schema.dropTable('messages');
            else return new Promise((resolve, reject) => resolve());
        });
    })

    .then(() => {
        return knex.schema.hasTable('message_types').then(exists => {
            if (exists) return knex.schema.dropTable('message_types');
            else return new Promise((resolve, reject) => resolve());
        });
    })

    .then(() => {
        return knex.schema.hasTable('groupes').then(exists => {
            if (exists) return knex.schema.dropTable('groupes');
            else return new Promise((resolve, reject) => resolve());
        });
    })

    .then(() => {
        return knex.schema.hasTable('users_groupes').then(exists => {
            if (exists) return knex.schema.dropTable('users_groupes');
            else return new Promise((resolve, reject) => resolve());
        });
    })

    .then(() => {
        //var schema = knex.schema;
        return knex.schema.hasTable('users').then(function(exists) {

            if (!exists) {
                return knex.schema
                .createTable('users', function(table) {
                    table.text('id').unique().primary();
                    table.string('email', 255);
                    table.integer('updated_at');
                    table.integer('created_at');
                    table.string('password');
                    table.boolean('removed').defaultTo(false);
                })
                .then(() => {
                    return knex('users').insert(dataSets.users, 'id');
                });
            } else {
                return new Promise((resolve, reject) => {resolve()});
            }
        });
    })

    .then(function() {

        return knex.schema.hasTable('messages').then(function(exists) {
            if (!exists) {
                return knex.schema.createTable('messages', function(table) {
                    table.text('id').unique().primary();
                    table.text('content');
                    table.integer('updated_at');
                    table.integer('created_at');
                    table.text("id_user");
                    table.text('id_message_type');
                    table.text('id_groupe');
                    table.boolean('removed').defaultTo(false);
                })
                .then(() => {
                    return knex('messages').insert(dataSets.messages, 'id');
                });
            } else {
                return new Promise((resolve, reject) => {resolve()});
            }
        });
    })
    .then(function() {
        return knex.schema.hasTable('message_types').then(function(exists) {
            if (!exists) {
                return knex.schema.createTable('message_types', function(table) {
                    table.text('id').unique().primary();
                    table.string('label');
                    table.integer('updated_at');
                    table.integer('created_at');
                    table.boolean('removed').defaultTo(false);
                }).then(() => {
                    return knex('message_types').insert(dataSets.message_types, 'id');
                });
            } else {
                return new Promise((resolve, reject) => {resolve()});
            }
        });
    })

    .then(function() {
        return knex.schema.hasTable('groupes').then(function(exists) {
            if (!exists) {
                return knex.schema.createTable('groupes', function(table) {
                    table.text('id').unique().primary();
                    table.text('title');
                    table.integer('updated_at');
                    table.integer('created_at');
                    table.text('id_owner');
                    table.text('password');
                    table.boolean('removed').defaultTo(false);
                }).then(() => {
                    return knex('groupes').insert(dataSets.groupes, 'id');
                });
            } else {
                return new Promise((resolve, reject) => {resolve()});
            }
        });
    })

    .then(function() {
        return knex.schema.hasTable('users_groupes').then(function(exists) {
            if (!exists) {
                return knex.schema.createTable('users_groupes', function(table) {
                    table.text('id').unique().primary();
                    table.text('id_groupe');
                    table.text('id_user');
                    table.integer('updated_at');
                    table.integer('created_at');
                    table.boolean('removed').defaultTo(false);
                }).then(() => {
                    return knex('users_groupes').insert(dataSets.users_groupes, 'id');
                });
            } else {
                return new Promise((resolve, reject) => { resolve(); });
            }
        });
    })


    .then(() => {
        const stop = moment().valueOf();
        const script_duration = stop - start;
        console.log(`Schemas created and data loaded in ${script_duration} millisecondes !`);
    })

    .catch((err) => {
        console.log(err);
    })
}

module.exports = createTablesIfNotExists;
