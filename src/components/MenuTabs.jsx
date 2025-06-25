'use client';

import {usePathname} from "next/navigation";
import Link from "next/link";

const menuItems = [
    {name: '블로그 홈', href: '/blogHome'},
    {name: '주제별 보기', href: '/category'},
];

export default function MenuTabs() {
    const pathname = usePathname();

    return(
        <div>
            <nav style={{ display: 'flex', borderTop: '1px solid #e0e0e0', borderBottom: '1px solid #e0e0e0', fontFamily: 'NanumGothic', padding: '10px 0', margin: '0 10px' }}>
                {menuItems.map(item => {
                    const isActive = pathname === item.href;
                    return(
                        <Link
                        key={item.href}
                        href={item.href}
                        style={{
                            fontWeight: 'bold',
                            fontSize: '20px',
                            color: isActive ? '#4CAF50' : '#222',
                            marginRight: '32px',
                            paddingBottom: '6px',
                            borderBottom: isActive ? '4px solid #4CAF50' : '4px solid transparent',
                            textDecoration: 'none',
                            transition: 'color 0.2s, border-bottom 0.2s'
                        }}
                    >
                            {item.name}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}