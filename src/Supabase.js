const DATABASE_ID = import.meta.env.VITE_SUPABASE_URL;
const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const updateSearchCount = async (searchTerm, movie) => {
    // Use supabase API to check if the search term already exists in the database

    //If it does update the count, if not create a new entry with count 1
    
    // If it doesn't, create a new entry with count 1
}