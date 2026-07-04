import { supabase } from "@/lib/supabase";
import { Sandpack } from "@codesandbox/sandpack-react";

export default async function SharedPlayground({ params }: { params: { id: string } }) {
  const { data, error } = await supabase
    .from("snippets")
    .select("files, template")
    .eq("id", params.id)
    .single();

  if (error || !data) {
    return <p>Snippet not found.</p>;
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