// src/lib/api.ts
export async function fetchPostById(id: string) {
  try {
    const wordpressUrl = typeof process !== "undefined" ? process.env.NEXT_PUBLIC_WORDPRESS ?? "" : "";

    const res = await fetch(`${wordpressUrl}/wp-json/wp/v2/posts/${id}`);

    if (!res.ok) throw new Error("Erro ao buscar post");

    const post = await res.json();

    // Se o post tiver uma imagem destacada
    let featuredImageUrl = null;

    if (post.featured_media) {
      try {
        const mediaRes = await fetch(`${wordpressUrl}/wp-json/wp/v2/media/${post.featured_media}`);

        if (mediaRes.ok) {
          const media = await mediaRes.json();
          featuredImageUrl = media.source_url;
        }
      } catch (error) {
        console.error(`Erro ao buscar imagem do post ${id}:`, error);
      }
    }

    return { ...post, featured_image_url: featuredImageUrl };
  } catch (error) {
    console.error("Erro ao buscar post:", error);
    return null;
  }
}
