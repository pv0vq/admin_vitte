import {connectDB} from "@/util/database";
import Link from "next/link";
import DetailLink from "@/app/list/DetailLink";

export default async function List() {

    const db = (await connectDB).db("vitte")
    const res: Array<any> = await db.collection('post').find().toArray()


    return (
        <div className="list-bg">
            {
                res.map((item: any, i: number) =>
                    <>
                        {/*링크 태그가 prefatch 기능을 자동으로 사용한다 끄고 싶으면 prefetch={false} 개발중일때는 확인할 수 없다 */}
                        <Link key={i} href={`/detail/${item._id}`}>
                            <div className="list-item">
                                <h4>{item.title}</h4>
                                <p>{item.content}</p>
                            </div>
                        </Link>
                        <DetailLink/>
                    </>
                )
            }
        </div>
    )
}