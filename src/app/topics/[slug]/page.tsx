import PostList from "@/components/posts/PostList";
import PostsCreateForm from "@/components/posts/PostsCreateForm";
import { fetchPostsByTopicSlug } from "@/db/queries/posts";

type TopicShowPageProps = {
  params: {
    slug: string;
  };
};

function TopicShowPage({ params }: TopicShowPageProps) {
  const { slug } = params;
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">{slug}</h1>
        <PostList fetchData={() => fetchPostsByTopicSlug(slug)} />
      </div>
      <div>
        <PostsCreateForm slug={slug} />
      </div>
    </div>
  );
}

export default TopicShowPage;
