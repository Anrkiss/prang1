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

-- Create pending_rewards table
CREATE TABLE IF NOT EXISTS public.pending_rewards (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    type VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    value VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
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
ALTER TABLE public.wallets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pending_rewards ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own wallet" ON public.wallets
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own pending rewards" ON public.pending_rewards
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can view their own transactions" ON public.transactions
    FOR SELECT USING (auth.uid() = user_id);

-- Insert sample data (optional, remove if not needed)
INSERT INTO public.wallets (user_id, tokens, cash, points)
VALUES 
    ('00000000-0000-0000-0000-000000000000', 100, 50.00, 200);

INSERT INTO public.pending_rewards (user_id, type, name, value)
VALUES 
    ('00000000-0000-0000-0000-000000000000', 'Cash', '$10 Reward', '$10.00'),
    ('00000000-0000-0000-0000-000000000000', 'Product', 'Free T-Shirt', 'T-Shirt');

INSERT INTO public.transactions (user_id, type, amount, currency, description)
VALUES 
    ('00000000-0000-0000-0000-000000000000', 'Earned', 50.00, 'USD', 'Completed task: Share on Twitter'),
    ('00000000-0000-0000-0000-000000000000', 'Redeemed', 25.00, 'USD', 'Redeemed cash reward');