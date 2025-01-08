import { NextResponse, type NextRequest } from "next/server";

import { createClient } from "@/utils/supabase/server";

// force-dynamic is not needed when dynamic functions like cookies()
// are called. But i kept it for clarity.
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const supabase = await createClient();
  const buckets = await supabase.storage.listBuckets();

  return NextResponse.json(buckets);
}
