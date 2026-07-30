import rss from "@astrojs/rss";
import { getAllPosts, getEntryUrl } from "../lib/content";

export async function GET(context) {
  const posts = await getAllPosts();
  const sorted = posts.sort(
    (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );

  return rss({
    title: "Shohoj BD",
    description: "বাংলাদেশের সরকারি সেবা, শিক্ষা ও স্থানীয় তথ্যের জন্য একটি পেশাদার বাংলা ব্লগ।",
    site: context.site,
    items: sorted.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: getEntryUrl(post).replace("https://shohojbd.pages.dev", ""),
    })),
    customData: `<language>bn</language>`,
  });
}
