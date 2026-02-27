"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import React from "react";

type Post = {
  id: number;
  title: { rendered: string };
  date: string;
  featured_media: number;
  categories: number[];
};

type Category = {
  id: number;
  name: string;
};

const POSTS_PER_PAGE = 8;

export const HoverImageLinks: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [media, setMedia] = useState<{ [key: number]: string }>({});
  const [categories, setCategories] = useState<{ [key: number]: string }>({});
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        setLoading(true);

        const wordpressUrl = process.env.NEXT_PUBLIC_WORDPRESS ?? "";

        const res = await fetch(
          `${wordpressUrl}/wp-json/wp/v2/posts?per_page=${POSTS_PER_PAGE}&page=${page}`
        );

        const data: Post[] = await res.json();

        if (!Array.isArray(data)) {
          console.error("Erro ao buscar notícias:", data);
          return;
        }

        setPosts(data);

        const totalPagesHeader = res.headers.get("X-WP-TotalPages");
        if (totalPagesHeader) {
          setTotalPages(parseInt(totalPagesHeader, 10));
        }

        const mediaResults = await Promise.all(
          data.map(async (post) => {
            if (post.featured_media) {
              try {
                const mediaRes = await fetch(
                  `${wordpressUrl}/wp-json/wp/v2/media/${post.featured_media}`
                );

                if (!mediaRes.ok) throw new Error("Erro ao buscar imagem");

                const mediaData = await mediaRes.json();
                return { id: post.featured_media, url: mediaData.source_url };
              } catch (error) {
                console.error(
                  `❌ Erro ao buscar imagem do post ${post.id}:`,
                  error
                );
                return null;
              }
            }
            return null;
          })
        );

        const mediaMap = mediaResults.reduce((acc, item) => {
          if (item) acc[item.id] = item.url;
          return acc;
        }, {} as { [key: number]: string });

        setMedia(mediaMap);

        const categoryIds = [
          ...new Set(data.flatMap((post) => post.categories)),
        ];

        if (categoryIds.length > 0) {
          const categoryRes = await fetch(
            `${wordpressUrl}/wp-json/wp/v2/categories?include=${categoryIds.join(
              ","
            )}`
          );

          const categoryData: Category[] = await categoryRes.json();

          const categoryMap = categoryData.reduce(
            (acc, cat) => ({ ...acc, [cat.id]: cat.name }),
            {} as { [key: number]: string }
          );

          setCategories(categoryMap);
        }
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNoticias();
  }, [page]);

  return (
    <section id="noticias" className="pb-20">
      <div className="pt-20">
        <h1 className="relative flex justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-slate-200 uppercase">
          <div
            className="absolute top-1/2 left-0 w-full"
            style={{
              height: "4px",
              background: "linear-gradient(to right, white, #146c33, white)",
              transform: "translateY(-50%)",
            }}
          ></div>
          <span className="bg-[#146c33] px-4 sm:px-6 py-2 sm:py-4 rounded-full relative z-10">
            Notícias
          </span>
        </h1>
      </div>

      {loading ? (
        <p className="bg-gradient-to-b flex text-center items-center justify-center h-auto text-xl py-60 text-green-800">
          Carregando...
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 p-4 lg:px-16 px-16 py-20">
            {posts.map((post) => (
              <motion.div
                key={post.id}
                className="bg-slate-100 shadow-md rounded-xl relative border-8 border-[#dee1f2] hover:border-slate-500 hover:shadow-2xl p-2 transition-shadow duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Link href={`/noticia/${post.id}`} className="block group">
                  <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                    <Image
                      key={media[post.featured_media]}
                      src={`/api/image-proxy?url=${encodeURIComponent(
                        media[post.featured_media] || ""
                      )}`}
                      alt={post.title.rendered}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      unoptimized
                    />
                  </div>

                  {post.categories.map((catId) => (
                    <span
                      key={catId}
                      className="absolute top-2 left-2 bg-green-700 text-white text-xs font-semibold px-2 py-1 rounded shadow-sm z-10"
                    >
                      {categories[catId]}
                    </span>
                  ))}

                  <div className="p-4">
                    <h2 className="text-lg font-bold leading-tight text-blue-900">
                      {post.title.rendered}
                    </h2>
                    <p className="mt-2 text-sm text-gray-500 flex items-center gap-1">
                      📅 {new Date(post.date).toLocaleDateString("pt-BR")}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="relative flex justify-center">
            {/* Linha de fundo exatamente no meio da paginação */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-300 -translate-y-1/2"></div>

            <div className="relative flex flex-wrap justify-center items-center space-x-1 sm:space-x-2 bg-slate-200 p-3 sm:p-5 rounded-lg shadow-lg">
              {/* Números das páginas */}
              {[...Array(totalPages)].map((_, i) => {
                const pageNumber = i + 1;

                if (
                  pageNumber === 1 ||
                  pageNumber === 2 ||
                  pageNumber === totalPages ||
                  pageNumber === page ||
                  pageNumber === page - 1 ||
                  pageNumber === page + 1
                ) {
                  return (
                    <button
                      key={i}
                      onClick={() => setPage(pageNumber)}
                      className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base ${
                        page === pageNumber
                          ? "bg-blue-700 text-white font-bold"
                          : "bg-gray-300 text-black hover:bg-gray-400"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                }

                if (pageNumber === page - 2 || pageNumber === page + 2) {
                  return (
                    <span
                      key={i}
                      className="px-3 py-1 sm:px-4 sm:py-2 rounded-lg bg-gray-300 text-sm sm:text-base"
                    >
                      ...
                    </span>
                  );
                }

                return null;
              })}

              {/* Botão Próxima */}
              <button
                onClick={() =>
                  setPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={page === totalPages}
                className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg font-bold text-sm sm:text-base ${
                  page === totalPages
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-green-700 text-white hover:bg-green-800"
                }`}
              >
                Próxima
              </button>

              {/* Botão -10 páginas */}
              <button
                onClick={() => setPage((prev) => Math.max(prev - 10, 1))}
                disabled={page <= 10}
                className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg font-bold text-sm sm:text-base ${
                  page <= 10
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-yellow-500 text-black hover:bg-yellow-600"
                }`}
              >
                -10
              </button>

              {/* Botão +10 páginas */}
              <button
                onClick={() =>
                  setPage((prev) => Math.min(prev + 10, totalPages))
                }
                disabled={page >= totalPages - 10}
                className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg font-bold text-sm sm:text-base ${
                  page >= totalPages - 10
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-yellow-500 text-black hover:bg-yellow-600"
                }`}
              >
                +10
              </button>

              {/* Botão Final */}
              <button
                onClick={() => setPage(totalPages)}
                disabled={page === totalPages}
                className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg font-bold text-sm sm:text-base ${
                  page === totalPages
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-blue-700 text-white hover:bg-blue-500"
                }`}
              >
                Final
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default HoverImageLinks;
