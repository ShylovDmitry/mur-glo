const knex = require('knex'),
	{ Model } = require('objection');

let sqlite = require('knex')({
	client: 'sqlite3',
	connection: {
		filename: "./mydb.sqlite"
	},
	useNullAsDefault: true
});

Model.knex(sqlite);

class Class extends Model {
	static get tableName() {
		return 'classes';
	}
}
class Style extends Model {
	static get tableName() {
		return 'styles';
	}
}
class Teacher extends Model {
	static get tableName() {
		return 'teachers';
	}
}

exports.Class = Class;
exports.Style = Style;
exports.Teacher = Teacher;