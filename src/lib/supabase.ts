import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://shlfpopbqhgakrbumuys.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY

if (!supabaseKey) {
  throw new Error('Missing Supabase key. Please add NEXT_PUBLIC_SUPABASE_KEY to your environment variables.')
}

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseKey)

// Type definitions for the inquiries table
export interface Inquiry {
  id?: string
  name: string
  email: string
  phone: string
  subject: string
  message: string
  created_at?: string
  status?: string
}
