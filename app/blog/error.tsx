"use client";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main>
      <h1> Fehler</h1>

      <p>Der Blog konnte nicht geladen werden.</p>

      <p>{error.message}</p>

      <button
        onClick={reset}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Erneut versuchen
      </button>
    </main>
  );
}