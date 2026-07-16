function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

type BlogPostProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;

  await delay(3000);

  if (slug === "not-found") {
    throw new Error("Dieser Blogpost konnte nicht geladen werden.");
  }

  return (
    <main>
      <h1>Blogpost</h1>

      <h2>{slug}</h2>

      <p>Das ist der Inhalt des Blogposts "{slug}".</p>
    </main>
  );
}

//Loading Boundaries werden verwendet, 
// wenn Daten noch geladen werden. 
// Sie zeigen dem Nutzer eine Ladeanzeige und verbessern die Benutzererfahrung.
//  Error Boundaries greifen, wenn beim Laden oder Rendern ein Fehler auftritt.
//  Anstatt die komplette Anwendung abstürzen zu lassen,
//  wird eine eigene Fehleransicht für den betroffenen Bereich angezeigt.