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

-- Create tasks table
CREATE TABLE IF NOT EXISTS public.tasks (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    merchant_id UUID REFERENCES auth.users(id),
    task_type TEXT NOT NULL,
    description TEXT NOT NULL,
    engagement_goal INTEGER,
    quota INTEGER NOT NULL,
    deadline TIMESTAMP,
    reward_type TEXT NOT NULL,
    reward_amount NUMERIC NOT NULL,
    external_link TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create notifications table
CREATE TABLE IF NOT EXISTS public.notifications (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES auth.users ON DELETE CASCADE,
    type VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    read BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create wallets table
CREATE TABLE IF NOT EXISTS public.wallets (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    tokens INTEGER DEFAULT 0,
    cash DECIMAL(10, 2) DEFAULT 0,
    points INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create transactions table
CREATE TABLE IF NOT EXISTS public.transactions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    type VARCHAR(50) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    currency VARCHAR(10) NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable Row Level Security (RLS) on the tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wallets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own profile" ON public.profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can view all tasks" ON public.tasks
    FOR SELECT USING (true);

CREATE POLICY "Users can view their own notifications" ON public.notifications
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own wallet" ON public.wallets
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own transactions" ON public.transactions
    FOR SELECT USING (auth.uid() = user_id);

-- Insert sample data
INSERT INTO public.tasks (merchant_id, task_type, description, engagement_goal, quota, deadline, reward_type, reward_amount, external_link)
VALUES
    ('merchant123', 'like', 'Like our latest post on Instagram to spread the word about our new product launch.', NULL, NULL, NULL, 'tokens', 10, 'https://example.com'),
    ('merchant456', 'share', 'Share our latest YouTube video on Twitter. We need 100 shares by the end of the week!', 100, 50, '2024-10-12T23:59:59Z', 'cash', 5.00, 'https://example.com');

-- Insert sample notifications
INSERT INTO public.notifications (user_id, type, message)
VALUES
    ('11111111-1111-1111-1111-111111111111', 'task_available', 'New task available: Like our new post'),
    ('22222222-2222-2222-2222-222222222222', 'reward_earned', 'You earned 50 tokens for completing a task!');

-- Insert sample wallet data
INSERT INTO public.wallets (user_id, tokens, cash, points)
VALUES 
    ('11111111-1111-1111-1111-111111111111', 100, 50.00, 200);

-- Insert sample transactions
INSERT INTO public.transactions (user_id, type, amount, currency, description)
VALUES 
    ('11111111-1111-1111-1111-111111111111', 'Earned', 50.00, 'USD', 'Completed task: Share on Twitter'),
    ('11111111-1111-1111-1111-111111111111', 'Redeemed', 25.00, 'USD', 'Redeemed cash reward');