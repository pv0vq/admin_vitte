import { MongoClient } from 'mongodb'
const url: string = '몽고 db' // 몽고 db url
const options: any = { useNewUrlParser: true }
let connectDB: any


 // 환경 변수 개발시
if (process.env.NODE_ENV === 'development') if (global) {
    if (!global._mongo) {
        global._mongo = new MongoClient(url, options).connect()
    }
    connectDB = global._mongo
} else {
    connectDB = new MongoClient(url, options).connect()
}
export { connectDB }