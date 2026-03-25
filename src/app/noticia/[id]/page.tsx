/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from "next/navigation";
import { fetchPostById } from "@/lib/api";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import Image from "next/image";
import { JSX } from "react/jsx-runtime";
import React from "react";
import { Metadata } from "next";

// 🔥 Agora params é awaited
export async function generateMetadata(props: any): Promise<Metadata> {
  const params = await props.params;

  if (!params?.id) {
    return { title: "Notícia não encontrada" };
  }

  const postId = parseInt(params.id, 10);
  if (isNaN(postId)) {
    return { title: "Notícia não encontrada" };
  }

  const { post } = await fetchPostById(postId.toString());
  if (!post) {
    return { title: "Notícia não encontrada" };
  }

  return {
    title: `${post.title.rendered}`,
  };
}

interface Post {
  id: number;
  title: { rendered: string };
  date: string;
  content: { rendered: string };
  featured_image_url?: string | null;
}

const NoticiaDetalhada = ({ post }: { post: Post }): JSX.Element => {
  const formattedDate = new Date(post.date).toLocaleDateString("pt-BR");
  const formattedTime = new Date(post.date).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <main className="relative w-full h-auto">
      {/* Imagem de fundo */}
      <div className="absolute top-0 left-0 w-full h-[600px]">
        <Image
          src="/images/Bandeira/bandeira.jpeg"
          alt="Imagem de fundo"
          fill
          className="object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060d29a4] to-[#0000015e]" />
      </div>

      <div className="pt-[150px]"></div>

      <div className="Montserrat-Medium relative z-10 flex flex-col text-white p-6">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="flex gap-4 mt-2">
            <div className="flex gap-2">
              <FaCalendarAlt />
              <span>{formattedDate}</span>
            </div>
            <div className="flex gap-2">
              <FaClock />
              <span>{formattedTime}</span>
            </div>
          </div>

          <h1 className="shadow-xl w-full text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold uppercase pt-3 pb-14 leading-tight">
            {post.title.rendered}
          </h1>
        </div>

        {post.featured_image_url && (
          <div className="w-full max-w-[1200px] mx-auto overflow-hidden rounded-lg shadow-lg">
            <Image
              src={`/api/image-proxy?url=${encodeURIComponent(
                post.featured_image_url
              )}`}
              alt={post.title.rendered}
              width={1200}
              height={600}
              className="w-full h-auto object-cover max-h-[600px]"
            />
          </div>
        )}
      </div>

      <section className="relative z-10 mb-20 max-w-6xl mx-auto bg-white p-10 rounded-lg">
        <h1 className="text-5xl font-bold mb-4 text-center pb-5 text-green-900">
          {post.title.rendered}
        </h1>

        <div className="flex gap-4 mt-2 mb-5 items-center justify-center">
          <div className="flex items-center gap-2">
            <FaCalendarAlt />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock />
            <span>{formattedTime}</span>
          </div>
        </div>

        <div
          className="prose prose-lg max-w-none text-xl"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </section>
    </main>
  );
};

// 🔥 Corrigido: params precisa ser awaited aqui também
export default async function NoticiaPage(props: any): Promise<JSX.Element> {
  const params = await props.params;

  if (!params?.id) {
    return notFound();
  }

  const postId = parseInt(params.id, 10);
  if (isNaN(postId)) {
    return notFound();
  }

  const { post, isNotFound } = await fetchPostById(postId.toString());

  if (isNotFound) {
    return notFound();
  }

  if (!post) {
    return (
      <main className="px-6 py-40 max-w-4xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-green-900">
          Não foi possível carregar esta notícia agora
        </h1>
        <p className="text-gray-700 mt-4">
          Tente novamente em instantes. Se o problema persistir, volte para a
          página inicial e tente abrir a notícia novamente.
        </p>
      </main>
    );
  }

  return <NoticiaDetalhada post={post} />;
}
