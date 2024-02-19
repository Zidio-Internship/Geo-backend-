import express from "express"
import "dotenv/config"
import cors from "cors"
import logger from "morgan"


const app = express()
app.use(express.json())
app.use(cors)
app.use(logger('dev'))
const PORT:string|number = 8080 || process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})