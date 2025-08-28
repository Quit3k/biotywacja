// src/components/Blog.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';
import sanityClient from '../sanityClient';

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: { asset: { url: string } };
  publishedAt: string;
}

const BlogSection = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    sanityClient.fetch(`
      *[_type == "post"] | order(publishedAt desc)[0...4] {
        _id,
        title,
        slug,
        mainImage{ asset->{url} },
        publishedAt
      }
    `).then((data) => setPosts(data)).catch(console.error);
  }, []);

  const latestPost = posts[0];
  const otherPosts = posts.slice(1);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-poppins">
            Ostatnio na Blogu
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Garść wiedzy i inspiracji prosto od Biotywacji.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {latestPost && (
            // ZMIANA: Usunięto <a> i przeniesiono propsy do <Link>
            <Link href={`/blog/${latestPost.slug.current}`} className="group space-y-4">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image src={latestPost.mainImage.asset.url} alt={latestPost.title} layout="fill" className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{formatDate(latestPost.publishedAt)}</span>
              </div>
              <h3 className="text-3xl font-bold font-poppins text-gray-900 group-hover:text-primary-600 transition-colors">{latestPost.title}</h3>
            </Link>
          )}

          <div className="space-y-8">
            {otherPosts.map(post => (
              // ZMIANA: Usunięto <a> i przeniesiono propsy do <Link>
              <Link key={post._id} href={`/blog/${post.slug.current}`} className="group grid grid-cols-3 gap-4 items-center">
                <div className="relative h-24 rounded-lg overflow-hidden col-span-1 shadow-md">
                  <Image src={post.mainImage.asset.url} alt={post.title} layout="fill" className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="col-span-2">
                  <div className="flex items-center text-gray-500 text-xs mb-1">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <h4 className="text-lg font-bold font-poppins text-gray-900 group-hover:text-primary-600 transition-colors">{post.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          {/* ZMIANA: Usunięto <a> i przeniesiono propsy do <Link> */}
          <Link href="/blog" className="group inline-block bg-gradient-to-r from-primary-600 to-purple-600 text-white px-10 py-5 rounded-full text-xl font-semibold hover:from-primary-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Zobacz wszystkie posty
            <ArrowRight className="inline-block ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;