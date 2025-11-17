// pages/blog/[slug].tsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import sanityClient from "../../sanityClient";
import { Calendar } from "lucide-react";

// Typ posta
interface Post {
  title: string;
  publishedAt: string;
  body: any[];
  mainImage?: { asset?: { url: string } };
}

export default function SinglePost() {
  const router = useRouter();
  const { slug } = router.query;

  const [post, setPost] = useState<Post | null>(null);

  // Pobranie posta PO STRONIE KLIENTA – zawsze działa
  useEffect(() => {
    if (!slug) return;

    sanityClient
      .fetch(
        `
      *[_type == "post" && slug.current == $slug][0]{
        title,
        publishedAt,
        body,
        mainImage{ asset->{url} }
      }
    `,
        { slug }
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, [slug]);

  if (!post) return <div className="p-20 text-center">Ładowanie…</div>;

  // Formatowanie daty
  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("pl-PL", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      {/* POWRÓT */}
      <div className="mb-10">
        <Link
          href="/blog"
          className="text-primary-600 font-semibold hover:underline"
        >
          ← Powrót na bloga
        </Link>
      </div>

      {/* TYTUŁ */}
      <h1 className="text-4xl font-bold font-poppins mb-4">
        {post.title}
      </h1>

      {/* DATA */}
      <div className="flex items-center text-gray-500 mb-8">
        <Calendar className="h-5 w-5 mr-2" />
        {formatDate(post.publishedAt)}
      </div>

      {/* OBRAZEK */}
      {post.mainImage?.asset?.url && (
        <div className="relative w-full h-80 mb-10 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={post.mainImage.asset.url}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* TREŚĆ */}
      <article className="prose prose-lg max-w-none">
        {post.body?.map((block: any, i: number) => {
          if (block._type === "block") {
            return (
              <p key={i} className="mb-4 leading-relaxed">
                {block.children?.map((span: any) => span.text).join("")}
              </p>
            );
          }
          return null;
        })}
      </article>

      {/* POWRÓT NA DOLE */}
      <div className="mt-16">
        <Link
          href="/blog"
          className="inline-block bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition"
        >
          Wróć do wszystkich postów
        </Link>
      </div>
    </section>
  );
}
