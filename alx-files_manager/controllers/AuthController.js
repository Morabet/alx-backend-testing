
import dbClient from '../utils/db'
import redisClient from '../utils/redis'
import sha1 from 'sha1'
import {v4 as uuidv4}  from 'uuid'

class AuthController{

    static async getConnect(req, res) {
        const { authorization } = req.headers
        const base64Credentials = authorization.split(" ")[1]
        const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8')
        const [email, password] = credentials.split(':')
        const userCollection = dbClient.client.db().collection('users')
        const user = await userCollection.findOne({ email, password: sha1(password) })
        if (!user) {
            res.status(401).json({ 'error': 'Unauthorized' })
        }
        else {
            const uuid = uuidv4()
            const key = `auth_${uuid}`
            await redisClient.set(key, user._id, 24 * 3600)  
            res.status(200).json({"token": uuid})
        }        
    }
    static getDisconnect(req, res) {
        
    }
    static getMe(req, res) {
        
    }
}
export default AuthController