-- Create jobs table
CREATE TABLE public.jobs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  location TEXT NOT NULL,
  description TEXT NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on jobs
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;

-- Public read access for active jobs
CREATE POLICY "Anyone can view active jobs"
ON public.jobs
FOR SELECT
USING (is_active = true);

-- Create site_settings table
CREATE TABLE public.site_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key_name TEXT NOT NULL UNIQUE,
  value TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on site_settings
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Public read access for site settings
CREATE POLICY "Anyone can view site settings"
ON public.site_settings
FOR SELECT
USING (true);

-- Admin write access for site settings (for authenticated users)
CREATE POLICY "Authenticated users can update site settings"
ON public.site_settings
FOR UPDATE
USING (true)
WITH CHECK (true);

CREATE POLICY "Authenticated users can insert site settings"
ON public.site_settings
FOR INSERT
WITH CHECK (true);

-- Insert default site settings
INSERT INTO public.site_settings (key_name, value) VALUES 
  ('hero_headline', 'Connecting Exceptional Talent with Leading Organizations'),
  ('hero_image', 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80');

-- Insert sample job
INSERT INTO public.jobs (title, location, description, is_active) VALUES 
  ('Senior HR Manager', 'London, UK', 'We are seeking an experienced HR Manager to lead our human resources initiatives and drive organizational excellence.', true),
  ('Talent Acquisition Specialist', 'Manchester, UK', 'Join our team to source and recruit top talent across multiple industries.', true),
  ('HR Business Partner', 'Birmingham, UK', 'Strategic role working closely with business leaders to align HR strategies with organizational goals.', true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for updated_at
CREATE TRIGGER update_jobs_updated_at
  BEFORE UPDATE ON public.jobs
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_site_settings_updated_at
  BEFORE UPDATE ON public.site_settings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage bucket for website assets
INSERT INTO storage.buckets (id, name, public) 
VALUES ('website-assets', 'website-assets', true);

-- Storage policies for website-assets bucket
CREATE POLICY "Anyone can view website assets"
ON storage.objects
FOR SELECT
USING (bucket_id = 'website-assets');

CREATE POLICY "Authenticated users can upload website assets"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'website-assets');

CREATE POLICY "Authenticated users can update website assets"
ON storage.objects
FOR UPDATE
USING (bucket_id = 'website-assets');

CREATE POLICY "Authenticated users can delete website assets"
ON storage.objects
FOR DELETE
USING (bucket_id = 'website-assets');