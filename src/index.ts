import express from 'express'
import cors from 'cors'
import { UserController } from './controller/UserController'
import { AccountController } from './controller/AccountController'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log(`Servidor rodando na porta ${3003}`)
})

const userController = new UserController()
const accountController = new AccountController()

app.get("/users", userController.findUsers)

app.post("/users", userController.createUser)

app.get("/accounts", accountController.getAccounts)

app.get("/accounts/:id/balance", accountController.getBalanceById)

app.post("/accounts", accountController.insertAccount)

app.put("/accounts/:id/balance", accountController.updateBalance)