import Image from 'next/image';
import Link from 'next/link';
import styles from './ResultList.module.css';

export default function ResultList({ blogs }) {
  return (
    <div className={styles.blogList}>
      {blogs.map(blog => (
        <div key={blog.id} className={styles.blogItem}>
          {/* 카드 전체를 flex로 묶음 */}
          <div className={styles.cardRow}>
            {/* 왼쪽: 텍스트 영역 */}
            <div className={styles.cardContent}>
              {/* 프로필(작성자) 영역 */}
              <div className={styles.profileRow}>
                <Link href="/blogDetail">
                  <Image
                    src={blog.authorImage}
                    alt="프로필 이미지"
                    width={35}
                    height={35}
                    className={styles.profileImage}
                  />
                </Link>
                <div>
                  <Link href="/blogDetail" className={styles.authorName}>
                    {blog.author}
                  </Link>
                  <div className={styles.authorDate}>{blog.date}</div>
                </div>
              </div>
              {/* 블로그 제목 및 내용 영역 */}
              <div>
                <Link href="/blogDetail" className={styles.titleLink}>
                  {blog.title}
                </Link>
                <Link href="/blogDetail" className={styles.contentLink}>
                  {blog.content}
                </Link>
              </div>
            </div>
            {/* 오른쪽: 썸네일 이미지 영역 */}
            <Link className={styles.thumbnailBox} href={`/blogDetail`}>
              <Image
                src={blog.thumbnail}
                alt="블로그 썸네일"
                width={70}
                height={70}
                className={styles.thumbnailImage}
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
