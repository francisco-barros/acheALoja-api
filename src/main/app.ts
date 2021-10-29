import 'dotenv/config'
import 'reflect-metadata'
import express from 'express'
import '../database'

import { routes } from '../routes'
import routeAlias from '../middlewares/routeAlias'

const app = express()

app.use(express.json())
app.use(routeAlias)
app.use('/', routes)

export { app }
