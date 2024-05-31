import { getNewsItem } from "@/app/lib/news";
import Link from "next/link";
import { notFound } from "next/navigation";

const NewsDetailPage = async ({ params }) => {
  const newsSlug = params.postId;
  const newsItem = await getNewsItem(newsSlug);
  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${params.postId}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
};

export default NewsDetailPage;
