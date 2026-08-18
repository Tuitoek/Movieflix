import { createClient } from "@supabase/supabase-js";

const DATABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// 1. This is the only line you need to create the client
const supaBase = createClient(DATABASE_URL, ANON_KEY);

export const updateSearchCount = async (searchTerm, movie) => {
  try {
try {
    const { error } = await supaBase.rpc('increment_movie_search', {
      t_search_term: searchTerm,
      t_movie_id: String(movie.id)
    });

    if (error) throw error;
    console.log("Success! Database handled the increment.");
  } catch (error) {
    console.error('Error updating search count:', error.message);
  }

  } catch (error) {
    console.error("Error updating search count:", error.message);
  }
};

export default supaBase;
