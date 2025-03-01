import { createClient } from "@/utils/supabase/server";

// force-dynamic is not needed when dynamic functions like cookies()
// are called. But i kept it for clarity.
export const dynamic = "force-dynamic";

export default async function ServerOnlyPageWithSupabase() {
  const supabase = await createClient();
  const buckets = await supabase.storage.listBuckets();

  console.log("@server", buckets);

  return (
    <>
      <h2>Server Only (Server Component)</h2>

      <code data-label="Buckets">
        <pre>
          {buckets === null ? "Loading..." : JSON.stringify(buckets, null, 2)}
        </pre>
      </code>
    </>
  );
}
