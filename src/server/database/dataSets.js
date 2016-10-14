var uuid = require('uuid');
const moment = require('moment');

const user1_uuid = uuid.v4();
const user2_uuid = uuid.v4();

const message1_uuid = uuid.v4();
const message2_uuid = uuid.v4();
const message3_uuid = uuid.v4();
const message4_uuid = uuid.v4();

const type_message1_uuid = uuid.v4();

const id_general_groupe_uuid = uuid.v4();

const id_user_group = uuid.v4();

module.exports = {
	users: [{
		id: user1_uuid,
		email: "lionnel@citizens.io",
		password: "password",
		updated_at: moment().unix(),
		created_at: moment().unix()
	},{
		id: user2_uuid,
		email: "admin@citizens.io",
		password: "password",
		updated_at: moment().unix(),
		created_at: moment().unix()
	}],
	messages: [{
		id: message1_uuid, 
		content: "Salut Martignas, nouvelle naissance",
		id_user: user1_uuid,
		id_message_type: type_message1_uuid,
		id_groupe: id_general_groupe_uuid,
		updated_at: moment().unix(),
		created_at: moment().unix()
	},{
		id: message2_uuid, 
		content: "Cool alors ! en route pour l'aventure",
		id_user: user1_uuid,
		id_message_type: type_message1_uuid,
		id_groupe: id_general_groupe_uuid,
		updated_at: moment().unix(),
		created_at: moment().unix()
	},{
		id: message3_uuid, 
		content: "Oui ca va créateur",
		id_user: user2_uuid,
		id_message_type: type_message1_uuid,
		id_groupe: id_general_groupe_uuid,
		updated_at: moment().unix(),
		created_at: moment().unix()
	},{
		id: message4_uuid, 
		content: "Super !!",
		id_user: user2_uuid,
		id_message_type: type_message1_uuid,
		id_groupe: id_general_groupe_uuid,
		updated_at: moment().unix(),
		created_at: moment().unix()
	}],
	message_types: [{
		id: type_message1_uuid,
		label: "simple",
		updated_at: moment().unix(),
		created_at: moment().unix()
	}],
	groupes: [{
		id: id_general_groupe_uuid,
		title: "La rue",
		id_owner: user2_uuid,
		password: null,
		updated_at: moment().unix(),
		created_at: moment().unix()
	}],
	users_groupes: [{
		id: id_user_group,
		id_groupe: id_general_groupe_uuid,
		id_user:user1_uuid,
		updated_at: moment().unix(),
		created_at: moment().unix()
	}]

};