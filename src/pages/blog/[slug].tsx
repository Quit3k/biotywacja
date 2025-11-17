// pages/blog/[slug].tsx
import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import sanityClient from "../../sanityClient";
import { PortableText } from "@portabletext/react";
import { Calendar } from "lucide-react";
import Link from "next/link";

// --- TYPES ---
interface Post {
  title: string;
  mainImage?: { asset: { url: string } };
  publishedAt: string;
  body: any[];
}

interface PostPageProps {
  post: Post;
}

const PostPage = ({ post }: PostPageProps) => {
  if (!post) return <div>Ładowanie...</div>;

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("pl-PL", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* --- BACKGROUND DECORATIONS --- */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Top Wave */}
        <svg className="absolute top-0 left-0 w-full h-32 opacity-10" viewBox="0 0 1200 120">
          <path
            d="M0,0V46.29C47,70,103,80,158,76c70-5,136-33,207-38C438,33,512,54,583,72c69,18,138,25,209,13c36-6,70-18,105-29C989,25,1113-14,1200,52V0Z"
            fill="url(#waveFill1)"
          />
          <defs>
            <linearGradient id="waveFill1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.04" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 opacity-20 animate-float"></div>
        <div className="absolute top-40 right-24 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-400 opacity-20 animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-40 left-16 w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-20 right-10 w-14 h-14 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-400 opacity-20 animate-float" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-1/2 left-1/3 w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 opacity-20 animate-float" style={{ animationDelay: "4s" }}></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-300 opacity-15 animate-float" style={{ animationDelay: "5s" }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 rounded-full bg-gradient-to-br from-red-400 to-pink-500 opacity-20 animate-float" style={{ animationDelay: "6s" }}></div>
      </div>

      {/* --- CONTENT --- */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* BACK BUTTON */}
        <div className="mb-10">
          <Link href="/blog" className="inline-flex items-center gap-3 text-primary-600 hover:text-primary-700 font-semibold text-lg">
            <span className="text-2xl -ml-1">←</span>
            Powrót na bloga
          </Link>
        </div>

        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 font-poppins leading-tight mb-6">
          {post.title}
        </h1>

        {/* DATE */}
        <div className="flex items-center text-gray-500 mb-12 text-lg">
          <Calendar className="w-5 h-5 mr-2" />
          {formatDate(post.publishedAt)}
        </div>

        {/* MAIN IMAGE */}
        {post.mainImage?.asset?.url && (
          <div className="relative h-96 w-full rounded-3xl overflow-hidden shadow-2xl mb-20">
            <Image
              src={post.mainImage.asset.url}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* POST BODY */}
        <article className="prose lg:prose-xl max-w-none pt-10 prose-img:rounded-2xl prose-img:shadow-xl prose-headings:font-poppins prose-a:text-primary-600 prose-a:underline hover:prose-a:text-primary-700">
          <PortableText
            value={post.body}
            components={{
              types: {
                image: ({ value }) => (
                  <div className="w-full my-12">
                    <Image
                      src={value.asset.url}
                      alt=""
                      width={1200}
                      height={800}
                      className="rounded-2xl shadow-xl object-cover"
                    />
                  </div>
                ),
              },
              marks: {
                link: ({ children, value }) => (
                  <a
                    href={value.href}
                    className="text-primary-600 font-semibold underline hover:text-primary-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
              },
              block: {
                h1: ({ children }) => (
                  <h1 className="text-4xl md:text-5xl font-bold mt-16 mb-8">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-3xl md:text-4xl font-bold mt-14 mb-6">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-2xl md:text-3xl font-semibold mt-12 mb-4">{children}</h3>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary-500 pl-6 italic text-gray-700 my-10">
                    {children}
                  </blockquote>
                ),
              },
            }}
          />
        </article>

        {/* BOTTOM RETURN BUTTON — WITHOUT ARROW */}
        <div className="mt-20">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center bg-white border-2 border-primary-600 text-primary-600 px-12 py-5 rounded-full text-xl font-semibold hover:bg-primary-600 hover:text-white transition-all shadow-lg hover:shadow-xl"
          >
            Wróć do wszystkich postów
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)]{
      "params": { "slug": slug.current }
    }`
  );
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const post = await sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      mainImage{ asset->{url} },
      publishedAt,
      body
    }`,
    { slug }
  );
  return {
    props: { post },
    revalidate: 60,
  };
};
