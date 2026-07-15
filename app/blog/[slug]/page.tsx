type BlogPostProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;

  return (
    <main>
      <h1>Blogpost</h1>

      <p>Aktueller Slug:</p>

      <h2>{slug}</h2>
    </main>
  );
}