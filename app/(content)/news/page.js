import { getAllNews } from "@/app/lib/news";
import NewsList from "@/components/news-list";

const News = async () => {
  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
};

export default News;
