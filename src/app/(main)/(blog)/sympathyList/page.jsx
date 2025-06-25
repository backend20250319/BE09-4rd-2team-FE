// sympathyList/page.jsx
import SympathyItem from '@/src/components/sympathy/SympathyItem';

export default function SympathyListPage() {
    const testBloggers = [
        {profileImage: 'https://picsum.photos/30/30', name: '말꽃니까', description: '대한민국 ∙∙ 일상이 특별한 ∙∙'},
        {profileImage: 'https://picsum.photos/30/30', name: '구아이어역', description: 'A Pleasant Routine'},
    ];

    return (
        <div>
            <SympathyItem blogger={testBloggers[0]} />
        </div>
    );
}