import { supabase } from "@/lib/supabase";
import { Sandpack } from "@codesandbox/sandpack-react";

export default async function SharedPlayground({ params }: { params: { id: string } }) {
  const { data, error } = await supabase
    .from("snippets")
    .select("files, template")
    .eq("id", params.id)
    .single();

 if (error || !data) {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <p>Snippet not found. It may have been removed or the link is incorrect.</p>
    </div>
  );
}
  return (
    <Sandpack
      template="react"
      theme="dark"
      files={data.files}
      options={{ editorHeight: "100vh" }}
    />
  );
}