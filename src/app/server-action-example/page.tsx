import { createClient } from "@/utils/supabase/server";

// force-dynamic is not needed when dynamic functions like cookies()
// are called. But i kept it for clarity.
export const dynamic = "force-dynamic";

export default function PageWithServerAction() {
  async function serverActionWithSupabase() {
    "use server";

    const supabase = await createClient();
    const buckets = await supabase.storage.listBuckets();

    console.log("@server", buckets);
  }

  return (
    <>
      <h2>Supabase with Server Action</h2>
      <form action={serverActionWithSupabase}>
        <button type="submit">Run Server Action</button>
      </form>
    </>
  );
}
