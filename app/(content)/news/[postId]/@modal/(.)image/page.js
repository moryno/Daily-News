import { getNewsItem } from "@/app/lib/news";
import ModalBackdrop from "@/components/modal-backdrop";
import { notFound } from "next/navigation";

const ImagePage = async ({ params }) => {
  const newsSlug = params.postId;
  const newsItem = await getNewsItem(newsSlug);
  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} />
        </div>
      </dialog>
    </>
  );
};

export default ImagePage;
