'use client'

import {useRouter} from "next/navigation";

export default function DetailLink() {
    const router = useRouter()


    return (
        <>
            <button onClick={() => {
                router.push('/')
            }}> 메인으로
            </button>
            <button onClick={() => {
                router.back()
            }}> 뒤으로
            </button>
            <button onClick={() => {
                router.forward()
            }}> 앞으로
            </button>
            {/*soft refresh 기존 새로고침과 다르고 변동사항만 새로고침 시킴 next 기능 */}
            <button onClick={() => {
                router.refresh()
            }}> 새로고침
            </button>
            {/*prefetch 기능 입력된 페이지를 미리 로드 시켜 좀 더 빠른 화면 이동이 가능해짐*/}
            <button onClick={() => {
                router.prefetch('/list')
            }}> 미리로드
            </button>
        </>
    )
}