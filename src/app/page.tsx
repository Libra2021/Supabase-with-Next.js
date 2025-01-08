"use client";

import { useEffect } from "react";

import { createClient } from "@/utils/supabase/client";

export default function Home() {
  useEffect(() => {
    const supabase = createClient();
    supabase.storage
      .listBuckets()
      .then((result) => console.log("Bucket List", result));
  }, []);

  return <div>Test Supabase Connection</div>;
}
