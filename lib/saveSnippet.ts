// Save snippet logic — add implementation here
import { supabase } from "./supabase";

export async function saveSnippet(files: Record<string, string>, template: string) {
  const { data, error } = await supabase
    .from("snippets")
    .insert({ files, template })
    .select("id")
    .single();

  if (error) throw error;
  return data.id as string;
}