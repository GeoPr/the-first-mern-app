require('dotenv').config()
const express = require('express')
const config = require('./config/default')
const mongoose = require('mongoose')

const app = express()

app.use(express.json({ extended: true }))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/link', require('./routes/link.routes'))
app.use('/t', require('./routes/redirect.routes'))

async function start() {
	try {
		// promise
		await mongoose.connect(config.mongoUri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		})
		app.listen(config.port, () => console.log(`app has been started on port ${config.port}`))
	} catch (e) {
		console.log('server error', e.message)
		process.exit(1)
	}
}

start()

