-- Insert sample tasks
INSERT INTO public.tasks (id, merchant_id, task_type, description, engagement_goal, quota, deadline, reward_type, reward_amount, created_at, updated_at, external_link)
VALUES
    ('a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8', 'merchant123', 'like', 'Like our latest post on Instagram to spread the word about our new product launch.', NULL, NULL, NULL, 'tokens', 10, '2024-10-05T12:00:00Z', '2024-10-05T12:00:00Z', 'https://example.com'),
    ('z9y8x7w6-v5u4-t3s2-r1p0-q9n8o7m6k5j4', 'merchant456', 'share', 'Share our latest YouTube video on Twitter. We need 100 shares by the end of the week!', 100, 50, '2024-10-12T23:59:59Z', 'cash', 5.00, '2024-10-05T12:30:00Z', '2024-10-05T12:30:00Z', 'https://example.com');