export default function handler(req, res) {
    //

    if (req.method == "POST") {
    console.log("포쓰트")
    }
    /**
     * 성공 시 200
     * 실패 시 500
     * status code
     *
     */
    return res.status(200).json('처리와룐')
}