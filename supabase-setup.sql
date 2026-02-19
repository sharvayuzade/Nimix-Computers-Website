-- Supabase Table Setup for Nimix Computers Website
-- Run this SQL in your Supabase SQL Editor to create the inquiries table

-- Create the inquiries table with comprehensive constraints
CREATE TABLE IF NOT EXISTS public.inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'in-progress', 'resolved', 'closed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  
  -- Add constraints for data validation
  CONSTRAINT name_not_empty CHECK (LENGTH(TRIM(name)) > 0),
  CONSTRAINT email_format CHECK (email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$'),
  CONSTRAINT phone_not_empty CHECK (LENGTH(TRIM(phone)) > 0),
  CONSTRAINT subject_not_empty CHECK (LENGTH(TRIM(subject)) > 0),
  CONSTRAINT message_not_empty CHECK (LENGTH(TRIM(message)) > 0),
  CONSTRAINT phone_min_length CHECK (LENGTH(REPLACE(REPLACE(REPLACE(REPLACE(phone, ' ', ''), '-', ''), '+', ''), '(', ''), ')', '')) >= 10),
  CONSTRAINT message_min_length CHECK (LENGTH(TRIM(message)) >= 10)
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

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS inquiries_created_at_idx ON public.inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS inquiries_status_idx ON public.inquiries(status);
CREATE INDEX IF NOT EXISTS inquiries_email_idx ON public.inquiries(email);

-- Optional: Create a view for recent inquiries
CREATE OR REPLACE VIEW recent_inquiries AS
SELECT * FROM public.inquiries
ORDER BY created_at DESC
LIMIT 100;
