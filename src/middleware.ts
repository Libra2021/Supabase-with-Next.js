import { type NextRequest } from "next/server";

import { createClient } from "@/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  const { supabase, supabaseResponse } = createClient(request);

  return supabaseResponse;
}
