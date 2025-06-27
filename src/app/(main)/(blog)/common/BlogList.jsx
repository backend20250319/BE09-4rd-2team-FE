import Image from 'next/image';
import Link from 'next/link';
import styles from './BlogList.module.css';

export default function BlogList({ blogs }) {
  return (
    <div className={styles.blogList}>
      {blogs.map(blog => (
        <div key={blog.id} className={styles.blogItem}>
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
          <div>
            <Link href="/blogDetail" className={styles.titleLink}>
              {blog.title}
            </Link>
            <Link href="/blogDetail" className={styles.contentLink}>
              {blog.content}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
