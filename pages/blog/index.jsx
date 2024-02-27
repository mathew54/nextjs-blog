import Layout from "@/components/Layout";
import Link from "next/link";

export default function index({ data }) {
  return (
    <Layout title="Blog | mext.js" description="agregue una descripcion">
      <h1>Blog</h1>
      {data.map(({ id, title, body }) => (
        <div key={id}>
          <h3>
            <Link href={`/blog/${id}`}>
              {id} - {title}
            </Link>
          </h3>
          <p>{body}</p>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error(error);
  }
}
