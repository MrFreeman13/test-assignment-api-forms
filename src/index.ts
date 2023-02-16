import { AppDataSource } from "./data-source"

AppDataSource.initialize().then(async () => {}).catch(error => console.log(error))

import app from './server'

app.listen(3001, () => {
  console.log('starting on http://localhost:3001')
})