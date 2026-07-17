import Link from "next/link";

export default function EventsPage() {
  return (
    <main>
      <h1> Event-Übersicht</h1>

      <ul>
        <li>
          <Link href="/events/1?mode=overview">
            Event 1 – Übersicht
          </Link>
        </li>

        <li>
          <Link href="/events/1?mode=details">
            Event 1 – Details
          </Link>
        </li>

        <li>
          <Link href="/events/2?mode=details">
            Event 2 – Details
          </Link>
        </li>
      </ul>
    </main>
  );
}

//useParams() → Liest Werte aus der URL, z. B. /events/12 → 12.
//useSearchParams() → Liest Query-Parameter aus, z. B. ?mode=details.
//loading.tsx → Zeigt eine Ladeanzeige, solange Daten geladen werden.
//error.tsx → Fängt Fehler ab und verhindert, dass die gesamte Anwendung abstürzt.
//Link → Für interne Navigation ohne kompletten Seiten-Reload.