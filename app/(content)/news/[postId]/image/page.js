import { DUMMY_NEWS } from "@/dummy-news";

const ImagePage = ({ params }) => {
  const newsSlug = params.postId;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);
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
