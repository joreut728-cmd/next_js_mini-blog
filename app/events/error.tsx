"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main>
      <h1> Fehler beim Laden des Events</h1>

      <p>Das Event konnte nicht geladen werden.</p>

      <p>{error.message}</p>

      <button
        onClick={reset}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Erneut versuchen
      </button>
    </main>
  );
}