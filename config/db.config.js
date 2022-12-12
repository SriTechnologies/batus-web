module.exports = {
	DB_HOST: "localhost",
	DB_USER: "postgres",
	DB_PASSWORD: "123",
	DB_DATABASE: "testdb",
	dialect: "postgres",
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
};