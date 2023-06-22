import {connectDB} from "../../../util/database";

export default async function Handler (req, res){
    // 요청 파라미터 보기
    console.log(req.body)
    if (req.method == "POST") {
        const db = (await connectDB).db("vitte")
        // 도큐먼트를 발행하고 데이터를 저장하는 로직
        // 저장하기
        let result = await db.collection("post").insertOne(req.body)
        /**
         * 성공 시 200
         * 실패 시 500
         * status code
         *
         * 저장 완료하면 list로 리다이렉트
         */
        return res.status(200)
    }

}