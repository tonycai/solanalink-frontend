import { notFound } from "next/navigation";
import Script from "next/script";

type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  minutesRead: string;
  heroImage: string;
};

const ARTICLES: Record<string, Article> = {
  "future-of-cloud-computing": {
    slug: "future-of-cloud-computing",
    title: "The Future of Cloud Computing: Trends and Innovations",
    excerpt:
      "Cloud computing continues to evolve at a rapid pace, transforming how businesses operate and innovate.",
    category: "Cloud",
    author: "Alex Turner",
    date: "Jan 15, 2024",
    minutesRead: "8 min read",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOz7WRxG0YHOwORIjAbFOhfZqzqzsMQ4N-xUE3qlV9ImHJe2FeC42HmJuc2YBHyqSxSnRWaoSKbmMZ9c0U9_pAAyrZxCOhQ0DvUJS-e0VQAFQIVnAmYBv9lfuofg-zImtlENGAttUMh3T8yt5yNJQGZ3PVsFTPYgPbHR8cvAWdS-gpw4PQdIw1UGn2qBI_a1Uqg3PpWPXkRRtJoRUANSbnbq64gdcxxr4UFfZqXO4ePcnw_iD47OLOo9HXiH3kFtCfbAYoL_7TRlw",
  },
  "edge-computing-and-distributed-systems": {
    slug: "edge-computing-and-distributed-systems",
    title: "Edge Computing and Distributed Systems",
    excerpt:
      "How edge computing is changing the landscape of data processing and real-time applications.",
    category: "Cloud",
    author: "Maya Chen",
    date: "Feb 2, 2024",
    minutesRead: "6 min read",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOz7WRxG0YHOwORIjAbFOhfZqzqzsMQ4N-xUE3qlV9ImHJe2FeC42HmJuc2YBHyqSxSnRWaoSKbmMZ9c0U9_pAAyrZxCOhQ0DvUJS-e0VQAFQIVnAmYBv9lfuofg-zImtlENGAttUMh3T8yt5yNJQGZ3PVsFTPYgPbHR8cvAWdS-gpw4PQdIw1UGn2qBI_a1Uqg3PpWPXkRRtJoRUANSbnbq64gdcxxr4UFfZqXO4ePcnw_iD47OLOo9HXiH3kFtCfbAYoL_7TRlw",
  },
  "personalization-strategies": {
    slug: "personalization-strategies",
    title: "Personalization Strategies to Increase Conversions",
    excerpt:
      "Practical tactics for building personalized shopping experiences that drive engagement and sales.",
    category: "E-commerce",
    author: "Samira Patel",
    date: "Mar 8, 2024",
    minutesRead: "7 min read",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBm-1hpqcdNdbV4jikw_Ydtotz-eRxdJqQhN1Z9jwHJuejY8DyxNX_xxZCfNc6Y2G7euhuzdLGP2aarM_eWzBGZEDWJiMUCqIJi2rTvZq45lLWQuls6493E0KDvYMtfmRhYMChsFOYUS8bv_bcUGuMg0cXqC5WOskbzwwOuRIyYkOKOH85Tzi3TJFnmsZXEKqx7PRr9Aiqm_jkkw28m1cusrz_mPyh0HFSJbNfnjYXdK1fS8GDy22CN9mwNYnynQ-4oE7rdNxjwT0g",
  },
  "cloud-security-2025": {
    slug: "cloud-security-2025",
    title: "Best Practices for Cloud Security in 2025",
    excerpt:
      "Key controls and operational measures to protect modern cloud environments.",
    category: "Security",
    author: "Diego Ramos",
    date: "Apr 12, 2024",
    minutesRead: "9 min read",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3gT52Q-hyAdlVXn8CJ7JUWm5x7EfX1fAPV2q1cQJmBeoJQUPKm9q_6g0oHQXYb0IcL4KCOaqyHzJtyvyk0BxyzQhyaHH9ARr5lOaYS0UfbF6B6w9BR0a1W2zGTbV5H1pQVLlRjQhqKCXS2rbqSMqMMfXOPg8nndRf0W2D5E9acsYieivl2WgD77GjjB6ZFZI_g3VQPeM78zq0ErbYfYw",
  },
};

export function generateStaticParams() {
  return Object.keys(ARTICLES).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = ARTICLES[params.slug];
  if (!article) return {};
  return {
    title: `${article.title} — News & Blog | SolanaLink`,
    description: article.excerpt,
    alternates: { canonical: `/news-and-blog-list/${article.slug}/` },
  };
}

export default function ArticleDetails({
  params,
}: {
  params: { slug: string };
}) {
  const article = ARTICLES[params.slug];
  if (!article) return notFound();

  const related = Object.values(ARTICLES).filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <main className="flex-1">
      <Script id="breadcrumbs-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "News & Blog",
              item: "https://solanalink.example.com/news-and-blog-list/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: article.title,
              item: `https://solanalink.example.com/news-and-blog-list/${article.slug}/`,
            },
          ],
        })}
      </Script>
      <div className="container mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
          <a className="hover:text-primary" href="/news-and-blog-list/">
            News &amp; Blog
          </a>
          <span>/</span>
          <span className="font-medium text-slate-700 dark:text-slate-300">Article</span>
        </div>

        <article className="mt-6">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white md:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
            By {article.author} | Published on {article.date} • {article.minutesRead}
          </p>
          <div className="mt-8 overflow-hidden rounded-xl">
            <img alt={article.title} className="h-auto w-full object-cover" src={article.heroImage} />
          </div>
          <div className="prose prose-lg mt-8 max-w-none text-slate-700 dark:text-slate-300 dark:prose-invert">
            <p>
              {article.excerpt} We unpack practical steps, architectural patterns, and operational
              guidance to help teams adopt these ideas safely and effectively.
            </p>
            <h2>Highlights</h2>
            <ul>
              <li>Trends shaping {article.category.toLowerCase()} in 2025 and beyond</li>
              <li>Actionable best practices you can apply today</li>
              <li>Common pitfalls and how to avoid them</li>
            </ul>
            <blockquote>
              Thoughtful adoption beats chasing hype. Anchor changes in measurable outcomes.
            </blockquote>
            <p>
              Want a deeper dive or bespoke guidance? Reach out — we’re happy to help tailor these
              concepts to your organization’s context.
            </p>
          </div>
        </article>

        <section className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Related Reads</h3>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {related.map((r) => (
              <div
                key={r.slug}
                className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl dark:bg-slate-800"
              >
                <div className="flex-shrink-0">
                  <img alt={r.title} className="h-48 w-full object-cover" src={r.heroImage} />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-primary">{r.category}</p>
                    <a className="mt-2 block" href={`/news-and-blog-list/${r.slug}/`}>
                      <p className="text-xl font-semibold text-slate-900 dark:text-white">{r.title}</p>
                      <p className="mt-3 text-base text-slate-500 dark:text-slate-400">{r.excerpt}</p>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
