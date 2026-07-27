export function ErrorState({ error, message = "Something went wrong." }) {
  return (
    <div className="error-state">
      <p>{message}</p>
      {error?.message && <p className="error-detail">{error.message}</p>}
    </div>
  );
}
