-- Supabase Table Setup for Nimix Computers Website
-- Run this SQL in your Supabase SQL Editor to create the inquiries table

-- Create the inquiries table
CREATE TABLE IF NOT EXISTS public.inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow INSERT for all users (for the contact form)
CREATE POLICY "Allow public insert access" ON public.inquiries
  FOR INSERT
  WITH CHECK (true);

-- Create a policy to allow SELECT for authenticated users only (for admin panel)
CREATE POLICY "Allow authenticated select access" ON public.inquiries
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Create an index on created_at for faster queries
CREATE INDEX IF NOT EXISTS inquiries_created_at_idx ON public.inquiries(created_at DESC);

-- Create an index on status for filtering
CREATE INDEX IF NOT EXISTS inquiries_status_idx ON public.inquiries(status);

-- Optional: Create a view for recent inquiries
CREATE OR REPLACE VIEW recent_inquiries AS
SELECT * FROM public.inquiries
ORDER BY created_at DESC
LIMIT 100;
