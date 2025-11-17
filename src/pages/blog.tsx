import React, { useState, useMemo } from "react";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import sanityClient from "../sanityClient";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  imageUrl?: string;
  mainImage?: { asset?: { url: string } };
  publishedAt: string;
  body?: any[];
}

interface BlogPageProps {
  posts: Post[];
}

const POSTS_PER_PAGE = 10;

// --- helper: wyciąganie tekstu z blockContent ---
const extractText = (blocks: any[] = []) => {
  return blocks
    .filter((b) => b._type === "block" && Array.isArray(b.children))
    .map((b) => b.children.map((child: any) => child.text).join(""))
    .join("\n");
};

const makeExcerpt = (body: any[] | undefined, maxChars = 600) => {
  if (!body || body.length === 0) return "";
  const full = extractText(body).replace(/\s+/g, " ").trim();
  if (!full) return "";
  if (full.length <= maxChars) return full;
  return full.slice(0, maxChars).trimEnd() + "…";
};

const BlogPage = ({ posts: initialPosts }: BlogPageProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    if (!searchTerm) return initialPosts;
    return initialPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, initialPosts]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("pl-PL", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* TŁO – rozrzucone elementy */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-8 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-25 animate-float" />
        <div
          className="absolute top-1/4 right-12 w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-3xl opacity-20 animate-float"
          style={{ animationDelay: "1.2s" }}
        />
        <div
          className="absolute top-1/2 -left-4 w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-24 right-10 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl opacity-20 animate-float"
          style={{ animationDelay: "2.8s" }}
        />
        <div
          className="absolute bottom-10 left-1/3 w-8 h-8 bg-gradient-to-br from-purple-400 to-fuchsia-500 rounded-full opacity-25 animate-float"
          style={{ animationDelay: "3.4s" }}
        />
        <div
          className="absolute top-1/3 left-1/4 w-12 h-12 bg-gradient-to-br from-cyan-400 to-sky-500 rounded-3xl opacity-20 animate-float"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-10 h-10 bg-gradient-to-br from-red-400 to-orange-500 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "4.6s" }}
        />
        <div
          className="absolute top-16 right-1/3 w-6 h-6 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-30 animate-float"
          style={{ animationDelay: "5.2s" }}
        />
        <div
          className="absolute bottom-8 right-1/2 w-7 h-7 bg-gradient-to-br from-lime-400 to-emerald-500 rounded-3xl opacity-25 animate-float"
          style={{ animationDelay: "5.8s" }}
        />
      </div>

      {/* NAGŁÓWEK */}
      <div className="relative max-w-4xl mx-auto px-6 text-center mb-10">
        <h1 className="text-5xl font-bold font-poppins text-gray-900">
          Blog{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
            Biotywacji
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Artykuły oparte na nauce, które pomogą Ci lepiej rozumieć siebie,
          podejmować mądrzejsze decyzje i konsekwentnie iść po swoje cele.
        </p>
      </div>

      {/* WYSZUKIWARKA */}
      <div className="relative max-w-lg mx-auto px-6 mt-4 mb-20">
        <input
          type="search"
          placeholder="  Szukaj artykułów..."
          value={searchTerm}
          onChange={(e) => {
            setCurrentPage(1);
            setSearchTerm(e.target.value);
          }}
          className="w-full py-4 pl-6 pr-6 text-lg border-2 border-gray-200 rounded-full 
                     focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm bg-white/90"
        />
      </div>

      {/* LISTA POSTÓW */}
      <div className="relative max-w-4xl mx-auto px-6 space-y-14">
        {paginatedPosts.length === 0 && (
          <p className="text-center text-gray-600 text-xl py-16">
            Brak postów pasujących do wyszukiwania.
          </p>
        )}

        {paginatedPosts.map((post, index) => {
          const excerpt = makeExcerpt(post.body, 600);
          const imageUrl =
            post.imageUrl ||
            post.mainImage?.asset?.url ||
            null; // jeśli nie ma, pokażemy gradient zamiast obrazka

          return (
            <div key={post._id} className="group">
              <Link
                href={`/blog/${post.slug.current}`}
                className="flex flex-col md:flex-row gap-6 md:gap-10 items-start"
              >
                {/* OBRAZEK / PLACEHOLDER */}
                {imageUrl ? (
                  <div className="relative w-full md:w-72 h-44 md:h-44 rounded-xl overflow-hidden shadow-lg flex-shrink-0">
                    <Image
                      src={imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="relative w-full md:w-72 h-44 md:h-44 rounded-xl overflow-hidden shadow-lg flex-shrink-0 bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                    Biotywacja
                  </div>
                )}

                {/* TEKST */}
                <div className="flex flex-col justify-center flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 font-poppins leading-snug">
                    {post.title}
                  </h3>

                  <div className="flex items-center text-gray-500 text-sm mt-2 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {formatDate(post.publishedAt)}
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {excerpt || "Przeczytaj artykuł, aby poznać szczegóły."}
                  </p>
                </div>
              </Link>

              {index !== paginatedPosts.length - 1 && (
                <div className="mt-10 w-full border-b border-gray-200 opacity-70" />
              )}
            </div>
          );
        })}
      </div>

      {/* PAGINACJA */}
      {totalPages > 1 && (
        <div className="relative mt-20 flex justify-center items-center gap-6">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-6 py-3 rounded-full border-2 border-primary-600 text-primary-600
                       hover:bg-primary-600 hover:text-white transition disabled:opacity-40"
          >
            Poprzednia
          </button>

          <span className="font-semibold text-lg">
            Strona {currentPage} z {totalPages}
          </span>
          
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-6 py-3 rounded-full border-2 border-primary-600 text-primary-600
                       hover:bg-primary-600 hover:text-white transition disabled:opacity-40"
          >
            Następna
          </button>
        </div>
      )}
    </section>
    
  );
};

export default BlogPage;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await sanityClient.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      "imageUrl": mainImage.asset->url,
      mainImage{ asset->{url} },
      body,
      publishedAt
    }
  `);

  return {
    props: { posts },
    revalidate: 60,
  };
};
