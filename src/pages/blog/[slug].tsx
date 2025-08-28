// pages/blog/[slug].tsx
import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import sanityClient from '../../sanityClient';
import { PortableText } from '@portabletext/react'; // Nasza nowa biblioteka
import { Calendar } from 'lucide-react';

// --- Definicja typów ---
interface Post {
  title: string;
  mainImage: { asset: { url: string } };
  publishedAt: string;
  body: any; // Typ dla "rich text" z Sanity
}

interface PostPageProps {
  post: Post;
}

// --- Komponent Szablonu Posta ---
const PostPage = ({ post }: PostPageProps) => {
  if (!post) {
    return <div>Ładowanie posta...</div>;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pl-PL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-4">{post.title}</h1>
      <div className="flex items-center text-gray-500 mb-8">
        <Calendar className="h-5 w-5 mr-2" />
        <span>{formatDate(post.publishedAt)}</span>
      </div>
      {post.mainImage && (
        <div className="relative h-96 w-full rounded-2xl overflow-hidden mb-8">
          <Image
            src={post.mainImage.asset.url}
            alt={post.title}
            layout="fill"
            className="object-cover"
          />
        </div>
      )}
      <div className="prose lg:prose-xl max-w-none">
        <PortableText value={post.body} />
      </div>
    </article>
  );
};

export default PostPage;

// --- Mówimy Next.js, jakie ścieżki (posty) ma wygenerować ---
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)]{
      "params": { "slug": slug.current }
    }`
  );
  return {
    paths,
    fallback: true, // Pozwala na generowanie nowych stron bez przebudowywania całej aplikacji
  };
};

// --- Dla każdej strony pobieramy dane konkretnego posta ---
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
    props: {
      post,
    },
    revalidate: 60,
  };
};