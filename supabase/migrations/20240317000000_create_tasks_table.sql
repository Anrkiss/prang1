-- Create tasks table
CREATE TABLE public.tasks (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    merchant_id UUID REFERENCES auth.users(id),
    task_type TEXT NOT NULL,
    description TEXT NOT NULL,
    engagement_goal INTEGER,
    quota INTEGER NOT NULL,
    deadline TIMESTAMP,
    reward_type TEXT NOT NULL,
    reward_amount NUMERIC NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all users to view tasks
CREATE POLICY "Allow all users to view tasks" ON public.tasks
    FOR SELECT USING (true);

-- Create policy to allow merchants to insert and update their own tasks
CREATE POLICY "Allow merchants to manage their tasks" ON public.tasks
    FOR ALL USING (auth.uid() = merchant_id);

-- Create index on merchant_id for faster queries
CREATE INDEX idx_tasks_merchant_id ON public.tasks(merchant_id);

-- Create function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to update the updated_at column
CREATE TRIGGER update_tasks_updated_at
    BEFORE UPDATE ON public.tasks
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();