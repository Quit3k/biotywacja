import React, { useState, useMemo } from 'react';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight, Search } from 'lucide-react';
import sanityClient from '../sanityClient';
import heroImage from '../assets/Mosia.png';

// --- Definicje typów ---
interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: { asset: { url: string } };
  publishedAt: string;
}

interface BlogPageProps {
  posts: Post[];
}

const POSTS_PER_PAGE = 6; // 6 mniejszych kafelków na stronę

// --- Komponent Strony Bloga ---
const BlogPage = ({ posts: initialPosts }: BlogPageProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Memoizacja filtrowania, aby nie było przeliczane przy każdym renderowaniu
  const filteredPosts = useMemo(() => {
    if (!searchTerm) return initialPosts;
    return initialPosts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, initialPosts]);

  const latestPost = filteredPosts[0];
  const postsForPagination = filteredPosts.slice(1);
  const totalPages = Math.ceil(postsForPagination.length / POSTS_PER_PAGE);

  const paginatedPosts = postsForPagination.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="bg-white">
      {/* Nowa Sekcja "Hero" dla bloga */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-indigo-50 flex items-center min-h-[55vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 font-poppins">Blog Biotywacji</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
                Zbiór artykułów, inspiracji i sprawdzonych metod opartych na nauce, które pomogą Ci zrozumieć siebie i osiągnąć więcej.
              </p>
              {latestPost && (
                <Link href={`/blog/${latestPost.slug.current}`} className="mt-8 group inline-block bg-gradient-to-r from-primary-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-primary-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Czytaj najnowszy artykuł
                  <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
            <div className="flex justify-center">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 animate-pulse-slow"></div>
                <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl">
                  <Image src={heroImage} alt="Monika - Biotywacja" className="w-full h-full object-cover" priority />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sekcja Wyszukiwarki */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <input
              type="search"
              placeholder="Szukaj artykułów po tytule..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-4 pl-12 pr-4 text-lg border-2 border-gray-200 rounded-full focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Sekcja z postami */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Wyróżniony post (tylko na pierwszej stronie i gdy nie ma wyszukiwania) */}
          {latestPost && currentPage === 1 && !searchTerm && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Wyróżniony wpis</h2>
              <Link href={`/blog/${latestPost.slug.current}`} className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-96">
                    <Image src={latestPost.mainImage.asset.url} alt={latestPost.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center text-gray-500 text-sm mb-2"><Calendar className="h-4 w-4 mr-2" /><span>{formatDate(latestPost.publishedAt)}</span></div>
                    <h3 className="text-3xl font-bold font-poppins text-gray-900 group-hover:text-primary-600 transition-colors">{latestPost.title}</h3>
                    <p className="mt-4 text-lg text-gray-600">Tutaj w przyszłości pojawi się krótka zajawka artykułu...</p>
                    <div className="mt-6 flex items-center font-semibold text-primary-600">Czytaj więcej <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" /></div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Siatka pozostałych postów */}
          <div className="mb-16">
             <h2 className="text-3xl font-bold text-gray-900 mb-8">{searchTerm ? 'Wyniki wyszukiwania' : 'Wszystkie wpisy'}</h2>
             {paginatedPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {paginatedPosts.map((post) => (
                    <Link key={post._id} href={`/blog/${post.slug.current}`} className="group block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                      <div className="relative h-56"><Image src={post.mainImage.asset.url} alt={post.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform" /></div>
                      <div className="p-6">
                        <div className="flex items-center text-gray-500 text-sm mb-2"><Calendar className="h-4 w-4 mr-2" /><span>{formatDate(post.publishedAt)}</span></div>
                        <h3 className="text-xl font-bold font-poppins text-gray-900 group-hover:text-primary-600 transition-colors">{post.title}</h3>
                      </div>
                    </Link>
                  ))}
                </div>
             ) : (
                <p className="text-center text-gray-600 text-lg py-12">Nie znaleziono postów pasujących do Twojego zapytania.</p>
             )}
          </div>
          
          {/* Paginacja */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-4">
              <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1} className="px-4 py-2 border rounded-full disabled:opacity-50">
                Poprzednia
              </button>
              <span className="font-semibold">Strona {currentPage} z {totalPages}</span>
              <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages} className="px-4 py-2 border rounded-full disabled:opacity-50">
                Następna
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;

export const getStaticProps: GetStaticProps = async () => {
  // Pobieramy WSZYSTKIE posty od razu. Paginacja i wyszukiwanie dzieją się po stronie klienta.
  const posts = await sanityClient.fetch(`*[_type == "post"] | order(publishedAt desc) { _id, title, slug, mainImage{ asset->{url} }, publishedAt }`);
  return { props: { posts }, revalidate: 60 };
};