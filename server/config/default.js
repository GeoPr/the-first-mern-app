module.exports = {
	port: process.env.PORT ?? 5000,
	jwtSecret: process.env.JWT_SECRET,
	mongoUri: process.env.MONGO_URI,
	baseUrl: process.env.BASE_URL
}