function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

type EventPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EventPage({ params }: EventPageProps) {
  const { id } = await params;

  await delay(3000);

    if (id === "0" || id === "999") {
    throw new Error("Dieses Event existiert nicht.");
  }

  return (
    <main>
      <h1> Event</h1>

      <p>Event-ID: {id}</p>

      <p>Die Eventdetails wurden erfolgreich geladen.</p>
    </main>
  );
}