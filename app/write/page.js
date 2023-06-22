export default function Write() {
    return (
        <div className={"p-20"}>
            <h4>
                글 작성
            </h4>
            <form action={"/api/board/write"} method={"POST"}>
                <input name={"title"} />
                <input name={"content"} />
                <button type={"submit"}> 버튼</button>
            </form>
        </div>
    )
}