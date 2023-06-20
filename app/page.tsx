import {connectDB} from '@/util/database'
export default async function Home() {

  // DB 입출력 코드는 server component 안에서만 사용하자
  // client component 에서 선언하고 사용시 유저 브라우저에 데이터가 넘어간다.

  const client: any = await connectDB
  const db = client.db("vitte")
  const res = await db.collection('post').find().toArray() // post 컬렉션에서 모든 데이터를 배열로 뽑기
  console.log(res,'res')

  return (
    <div>ㅎㅎㅎ</div>
  )
}
