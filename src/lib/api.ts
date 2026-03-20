// src/lib/api.ts
const DEFAULT_WORDPRESS_URL = "https://backendjaboataoprev.jaboatao.pe.gov.br";

const normalizeBaseUrl = (value?: string): string | null => {
  if (!value) return null;

  const normalized = value.trim().replace(/\/+$/, "");
  if (!normalized) return null;

  if (!/^https?:\/\//i.test(normalized)) {
    return null;
  }

  return normalized;
};

const getWordpressBaseUrls = (): string[] => {
  const candidates = [
    process.env.WORDPRESS_API,
    process.env.NEXT_PUBLIC_WORDPRESS,
    DEFAULT_WORDPRESS_URL,
  ]
    .map((url) => normalizeBaseUrl(url))
    .filter((url): url is string => Boolean(url));

  return [...new Set(candidates)];
};

interface WordpressPost {
  id: number;
  title: { rendered: string };
  date: string;
  content: { rendered: string };
  featured_media?: number;
  [key: string]: unknown;
}

type PostWithFeaturedImage = WordpressPost & {
  featured_image_url: string | null;
};

type FetchPostByIdResult = {
  post: PostWithFeaturedImage | null;
  isNotFound: boolean;
};

export async function fetchPostById(id: string): Promise<FetchPostByIdResult> {
  const baseUrls = getWordpressBaseUrls();
  let lastError: unknown = null;

  for (const baseUrl of baseUrls) {
    try {
      const postRes = await fetch(`${baseUrl}/wp-json/wp/v2/posts/${id}`, {
        cache: "no-store",
      });

      if (postRes.status === 404) {
        return { post: null, isNotFound: true };
      }

      if (!postRes.ok) {
        lastError = new Error(
          `Erro ao buscar post ${id} em ${baseUrl}: ${postRes.status}`
        );
        continue;
      }

      const post = (await postRes.json()) as WordpressPost;

      let featuredImageUrl = null;

      if (post.featured_media) {
        try {
          const mediaRes = await fetch(
            `${baseUrl}/wp-json/wp/v2/media/${post.featured_media}`,
            { cache: "no-store" }
          );

          if (mediaRes.ok) {
            const media = await mediaRes.json();
            featuredImageUrl = media.source_url;
          }
        } catch (error) {
          console.error(`Erro ao buscar imagem do post ${id}:`, error);
        }
      }

      return {
        post: { ...post, featured_image_url: featuredImageUrl },
        isNotFound: false,
      };
    } catch (error) {
      lastError = error;
    }
  }

  console.error("Erro ao buscar post:", lastError);
  return { post: null, isNotFound: false };
}
