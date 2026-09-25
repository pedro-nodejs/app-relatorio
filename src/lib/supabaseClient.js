import { createClient } from '@supabase/supabase-js'

// Em desenvolvimento (local), usa a URL direta.
// Em produção (Vercel), usa o caminho relativo '/supabase' para o proxy.
const supabaseUrl = import.meta.env.DEV 
  ? import.meta.env.VITE_SUPABASE_URL 
  : `${window.location.origin}/supabase`

const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

export const supabase = createClient(supabaseUrl, supabasePublishableKey)