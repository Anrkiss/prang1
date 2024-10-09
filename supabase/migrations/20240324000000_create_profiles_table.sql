-- Create profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID REFERENCES auth.users ON DELETE CASCADE,
    type VARCHAR(255),
    socials JSONB,
    interests TEXT[],
    country VARCHAR(255),
    city VARCHAR(255),
    birthday DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own profile" ON public.profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);

-- Insert sample data
INSERT INTO public.profiles (id, type, socials, interests, country, city, birthday)
VALUES 
    ('11111111-1111-1111-1111-111111111111', 'influencer', '{"instagram": "user1_insta", "twitter": "user1_twitter"}', ARRAY['fashion', 'technology'], 'USA', 'New York', '1990-01-01'),
    ('22222222-2222-2222-2222-222222222222', 'content_creator', '{"youtube": "user2_youtube", "tiktok": "user2_tiktok"}', ARRAY['gaming', 'lifestyle'], 'Canada', 'Toronto', '1995-05-15');