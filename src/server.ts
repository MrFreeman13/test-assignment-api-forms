import * as express from "express"
import router from "./router"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api', router)
app.use((err, req, res, next) => {
  console.log(err)
  res.status(400)
  res.json({ message: "Error occured during the request" });
});

export default app