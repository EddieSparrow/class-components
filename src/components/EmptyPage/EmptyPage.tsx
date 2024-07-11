import { Link } from "react-router-dom";

export default function EmptyPage() {
  return (
    <>
      <h2>404 Error</h2>
      <h3>Nothing here</h3>
      <div>
        <Link to="/">
          <button>Go to main page</button>
        </Link>
      </div>
    </>
  );
}
