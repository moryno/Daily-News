import { getNewsItem } from "@/app/lib/news";

const ImagePage = async ({ params }) => {
  const newsSlug = params.postId;
  const newsItem = await getNewsItem(newsSlug);
  if (!newsItem) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} />
    </div>
  );
};

export default ImagePage;
