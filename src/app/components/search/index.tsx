"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Fuse from "fuse.js";
import { motion } from "framer-motion";
import React from "react";

type Post = {
  id: number;
  title: { rendered: string };
  date: string;
  featured_media: number;
  categories: number[];
};

type Category = { id: number; name: string };

type Route = {
  title: string;
  path: string;
  description?: string;
};

interface SearchPageProps {
  searchTerm?: string;
}

const POSTS_PER_PAGE = 8;

export const SearchPage: React.FC<SearchPageProps> = ({ searchTerm }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [totalPages, setTotalPages] = useState(1);
  const [media, setMedia] = useState<{ [key: number]: string }>({});
  const [categories, setCategories] = useState<{ [key: number]: string }>({});
  const [filteredRoutes, setFilteredRoutes] = useState<Route[]>([]);

  useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  useEffect(() => {
    const WORDPRESS_API = process.env.NEXT_PUBLIC_WORDPRESS;

    async function fetchData() {
      if (!searchTerm) {
        setPosts([]);
        setFilteredRoutes([]);
        setLoading(false);
        return;
      }

      setLoading(true);

      try {
        const res = await fetch(
          `${WORDPRESS_API}/wp-json/wp/v2/posts?search=${encodeURIComponent(
            searchTerm
          )}&page=${page}&per_page=${POSTS_PER_PAGE}`
        );
        const data: Post[] = await res.json();

        if (!Array.isArray(data)) {
          console.error("Erro ao buscar notícias:", data);
          setPosts([]);
        } else {
          setPosts(data);
        }

        const totalPagesHeader = res.headers.get("X-WP-TotalPages");
        if (totalPagesHeader) {
          setTotalPages(parseInt(totalPagesHeader, 10));
        }

        const mediaResults = await Promise.all(
          data.map(async (post) => {
            if (!post.featured_media) return null;
            try {
              const mediaRes = await fetch(
                `${WORDPRESS_API}/wp-json/wp/v2/media/${post.featured_media}`
              );
              if (!mediaRes.ok) throw new Error("Erro ao buscar imagem");
              const mediaData = await mediaRes.json();
              return { id: post.featured_media, url: mediaData.source_url };
            } catch (error) {
              console.error(`Erro ao buscar imagem do post ${post.id}:`, error);
              return null;
            }
          })
        );

        const mediaMap = Object.fromEntries(
          mediaResults
            .filter((item): item is { id: number; url: string } => !!item)
            .map((item) => [item.id, item.url])
        );
        setMedia(mediaMap);

        const categoryIds = [
          ...new Set(data.flatMap((post) => post.categories)),
        ];
        if (categoryIds.length > 0) {
          const categoryRes = await fetch(
            `${WORDPRESS_API}/wp-json/wp/v2/categories?include=${categoryIds.join(
              ","
            )}`
          );
          const categoryData: Category[] = await categoryRes.json();
          const categoryMap = Object.fromEntries(
            categoryData.map((cat) => [cat.id, cat.name])
          );
          setCategories(categoryMap);
        }

        const routesRes = await fetch("/data/routes.json");
        if (!routesRes.ok) throw new Error("Erro ao buscar routes.json");
        const allRoutes: Route[] = await routesRes.json();

        const normalizedSearchTerm = searchTerm
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();

        const fuseOptions = {
          keys: ["title", "path", "description"],
          threshold: 0.3,
          ignoreLocation: true,
        };

        const fuse = new Fuse(allRoutes, fuseOptions);
        const fuseResults = fuse.search(normalizedSearchTerm);
        const filtered = fuseResults.map((result) => result.item);
        setFilteredRoutes(filtered);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [searchTerm, page]);

  return (
    <section id="noticias">
      {loading ? (
        <p className="flex text-center items-center justify-center text-gray-600 h-auto text-xl py-60">
          Carregando...
        </p>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-600 pt-20 uppercase">
            Notícias Encontradas:
          </h2>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-10 p-4 lg:px-36 px-10 py-20 ">
              {posts.map((post) => {
                const imageUrl = media[post.featured_media];
                const finalUrl = imageUrl?.startsWith("/")
                  ? `https://backendjaboataoprev.jaboatao.pe.gov.br${imageUrl}`
                  : imageUrl;

                const postCategories = post.categories.map(
                  (catId) => categories[catId] || "Sem categoria"
                );

                return (
                  <motion.div
                    key={post.id}
                    className="bg-slate-100 shadow-md rounded-xl relative border-8 border-[#dee1f2] hover:border-[#0d7c34] p-2 hover:shadow-2xl transition-shadow duration-300"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Link
                      href={`/noticia/${post.id}`}
                      className="block group relative transition-transform duration-300"
                    >
                      {postCategories.length > 0 && (
                        <div className="absolute top-0 left-0 bg-[#008C32] text-white text-xs font-bold px-3 py-1 rounded-tl-lg rounded-br-lg z-10">
                          {postCategories[0]}
                        </div>
                      )}

                      <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                        {finalUrl ? (
                          <Image
                            key={finalUrl}
                            src={`/api/image-proxy?url=${encodeURIComponent(
                              finalUrl
                            )}`}
                            alt={post.title.rendered}
                            width={500}
                            height={300}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            unoptimized
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-300" />
                        )}
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />
                      </div>

                      <div className="p-4">
                        <h2
                          className="text-lg font-bold"
                          dangerouslySetInnerHTML={{
                            __html: post.title.rendered,
                          }}
                        />

                        <p className="text-sm text-gray-500">
                          📅 {new Date(post.date).toLocaleDateString("pt-BR")}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="py-10 flex text-center items-center justify-center text-gray-600 h-auto text-xl ">
              <p>Nenhuma Notícia correspondente.</p>
            </div>
          )}

          <div className="bg-white px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 pt-8 pb-28">
            <h2 className="text-2xl font-bold text-center text-gray-600 uppercase">
              Páginas Encontradas:
            </h2>
            {filteredRoutes.length === 0 ? (
              <div className="py-10 flex text-center items-center justify-center text-gray-600 text-xl">
                <ul className="list-disc list-inside max-w-md mx-auto">
                  <p className="mb-6">Nenhuma página correspondente.</p>
                  <li>Verifique a ortografia</li>
                  <li>Use palavras mais genéricas</li>
                  <li>Tente termos diferentes</li>
                </ul>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredRoutes.map((r) => (
                  <Link
                    key={r.path}
                    href={r.path}
                    className="text-green-700 hover:text-green-900 border-2 border-bg-slate-300 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300"
                  >
                    <div className="bg-slate-100 hover:bg-slate-200 shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                      <h3 className="text-lg font-bold">{r.title}</h3>
                      <p className="text-sm text-gray-600">{r.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default SearchPage;
