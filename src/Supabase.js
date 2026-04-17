import { createClient } from '@supabase/supabase-js';
const DATABASE_ID = import.meta.env.VITE_SUPABASE_URL;
const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a Supabase client instance
const supaBase = createClient(DATABASE_ID, ANON_KEY);

export const updateSearchCount = async (searchTerm, movie) => {
    try {
        // 1. Check if the term already exists
        const { data: existingEntry, error: fetchError } = await supaBase
            .from('movies')
            .select('id, count')
            .eq('searchTerm', searchTerm)
            .maybeSingle(); // maybeSingle returns null instead of an error if not found

        if (fetchError) throw fetchError;

        if (existingEntry) {
            // 2. If it exists, increment the count
            const { error: updateError } = await supaBase
                .from('movies')
                .update({ count: existingEntry.count + 1 })
                .eq('id', existingEntry.id);

            if (updateError) throw updateError;
        } else {
            // 3. If it doesn't exist, create it with count 1
            const { error: insertError } = await supaBase
                .from('movies')
                .insert({
                    searchTerm: searchTerm,
                    count: 1,
                    movie_id: movie.id // Assuming you want to link it to the movie
                });

            if (insertError) throw insertError;
        }
    } catch (error) {
        console.error('Error updating search count:', error.message);
    }
}



export default supaBase;

