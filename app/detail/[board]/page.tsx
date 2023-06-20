import { ObjectId } from "mongodb";
import {connectDB} from "@/util/database";

export default async (props: any) => {

    const db = (await connectDB).db("vitte")
    const result = await db.collection('post').findOne({_id : new ObjectId(props.params.board)}); // findOne은 조건문 where

    return (
        <div>
            <h4>상세페이지임</h4>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
        </div>
    )
}
