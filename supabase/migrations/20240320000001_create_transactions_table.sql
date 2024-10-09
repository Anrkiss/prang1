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

-- Enable Row Level Security (RLS) on the table
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow users to view their own transactions
CREATE POLICY "Users can view their own transactions" ON public.transactions
    FOR SELECT USING (auth.uid() = user_id);

-- Insert sample data
INSERT INTO public.transactions (user_id, type, amount, currency, description)
VALUES 
    ('11111111-1111-1111-1111-111111111111', 'Earned', 50.00, 'USD', 'Completed task: Share on Twitter'),
    ('11111111-1111-1111-1111-111111111111', 'Redeemed', 25.00, 'USD', 'Redeemed cash reward'),
    ('22222222-2222-2222-2222-222222222222', 'Earned', 30.00, 'USD', 'Completed task: Instagram post'),
    ('22222222-2222-2222-2222-222222222222', 'Earned', 15.00, 'USD', 'Completed task: Facebook like');