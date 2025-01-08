import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello App Page</h1>
      <ul>
        <li>
          <Link
            className="highlight"
            href="/client-component-example"
          >
            Page with <strong>Client Component</strong> usage
          </Link>
        </li>
        <li>
          <Link
            className="highlight"
            href="/server-component-example"
          >
            <strong>Server Component only</strong> Sample
          </Link>
        </li>
        <li>
          <Link
            className="highlight"
            href="/server-action-example"
          >
            Page with <strong>Server Action</strong> usage
          </Link>
        </li>
      </ul>
    </div>
  );
}
