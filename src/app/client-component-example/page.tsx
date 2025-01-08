"use client";

import { useEffect, useState } from "react";

import { createClient } from "@/utils/supabase/client";

export default function ClientComponentExample() {
  const [buckets, setBuckets] =
    useState<
      Awaited<
        ReturnType<ReturnType<typeof createClient>["storage"]["listBuckets"]>
      >
    >();

  useEffect(() => {
    const supabase = createClient();
    supabase.storage.listBuckets().then((result) => {
      setBuckets(result);

      console.log("@client", result);
    });
  }, []);

  return (
    <>
      <h2>
        With <code className="inline">Client Component</code>
      </h2>

      <code data-label="Buckets">
        <pre>
          {buckets === null ? "Loading..." : JSON.stringify(buckets, null, 2)}
        </pre>
      </code>
    </>
  );
}
