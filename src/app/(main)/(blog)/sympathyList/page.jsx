import SympathyItem from '@/src/components/sympathy/SympathyItem';

const testBloggers = [
    {
        id: 1,
        name: "김개발자",
        description: "프론트엔드 개발과 일상을 기록하는 블로그입니다.",
        profileImage: null,
        isNeighbor: false
    },
    {
        id: 2,
        name: "박디자이너",
        description: "UI/UX 디자인 트렌드와 포트폴리오를 공유합니다.",
        profileImage: null,
        isNeighbor: true
    },
    {
        id: 3,
        name: "이백엔드",
        description: "서버 개발 경험담과 기술 스택을 다룹니다.",
        profileImage: null,
        isNeighbor: false
    },
    {
        id: 4,
        name: "최마케터",
        description: "디지털 마케팅 인사이트와 성장 스토리",
        profileImage: null,
        isNeighbor: false
    },
    {
        id: 5,
        name: "정작가",
        description: "일상 속 소소한 이야기와 여행 기록을 남깁니다.",
        profileImage: null,
        isNeighbor: true
    },
    {
        id: 6,
        name: "달빛조각사",
        description: "밤하늘 아래, 책과 커피 이야기",
        profileImage: null,
        isNeighbor: false
    },
    {
        id: 7,
        name: "지니의하루",
        description: "오늘도 기록하는 작은 순간들",
        profileImage: null,
        isNeighbor: false
    },
    {
        id: 8,
        name: "하루한끼",
        description: "집밥 레시피와 건강한 생활",
        profileImage: null,
        isNeighbor: true
    },
    {
        id: 9,
        name: "코딩하는감자",
        description: "개발자 일상 + 공부 기록",
        profileImage: null,
        isNeighbor: false
    },
    {
        id: 10,
        name: "꽃보다다육",
        description: "다육이 키우며 마음도 자라요.",
        profileImage: null,
        isNeighbor: false
    }
];

export default function SympathyListPage() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    이 글에 공감한 블로거
                </h1>
                <p className="text-sm text-gray-600">
                    총 {testBloggers.length}명의 블로거가 이 글에 공감했습니다.
                </p>
            </div>

            <div className="space-y-4 mb-8">
                {testBloggers.map((blogger) => (
                    <SympathyItem
                        key={blogger.id}
                        blogger={blogger}
                    />
                ))}
            </div>

            <div className="flex justify-center items-center gap-4">
                <button
                    className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
                    disabled={true} // 첫 페이지라고 가정
                >
                    이전
                </button>

                <div className="flex items-center gap-2">
                    <span className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md">1</span>
                    <span className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-md cursor-pointer">2</span>
                    <span className="px-3 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded-md cursor-pointer">3</span>
                </div>

                <button
                    className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
                >
                    다음
                </button>
            </div>
        </div>
    );
}