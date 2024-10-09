-- Sample Users (using auth.users table)
INSERT INTO auth.users (id, email, encrypted_password, email_confirmed_at, raw_app_meta_data)
VALUES
  ('11111111-1111-1111-1111-111111111111', 'influencer1@example.com', '$2a$10$abcdefghijklmnopqrstuvwxyz', NOW(), '{"provider": "email", "providers": ["email"]}'),
  ('22222222-2222-2222-2222-222222222222', 'influencer2@example.com', '$2a$10$abcdefghijklmnopqrstuvwxyz', NOW(), '{"provider": "email", "providers": ["email"]}'),
  ('33333333-3333-3333-3333-333333333333', 'merchant1@example.com', '$2a$10$abcdefghijklmnopqrstuvwxyz', NOW(), '{"provider": "email", "providers": ["email"]}'),
  ('44444444-4444-4444-4444-444444444444', 'merchant2@example.com', '$2a$10$abcdefghijklmnopqrstuvwxyz', NOW(), '{"provider": "email", "providers": ["email"]}');

-- Sample Profiles
INSERT INTO public.profiles (id, type, socials, interests, country, city, birthday)
VALUES 
    ('11111111-1111-1111-1111-111111111111', 'influencer', '{"instagram": "user1_insta", "twitter": "user1_twitter"}', ARRAY['fashion', 'technology'], 'USA', 'New York', '1990-01-01'),
    ('22222222-2222-2222-2222-222222222222', 'content_creator', '{"youtube": "user2_youtube", "tiktok": "user2_tiktok"}', ARRAY['gaming', 'lifestyle'], 'Canada', 'Toronto', '1995-05-15');

-- Sample Tasks
INSERT INTO public.tasks (title, description, reward, brand, type, is_premium)
VALUES
    ('Like our new post', 'Like our latest Instagram post about summer fashion', 10, 'FashionBrand', 'like', false),
    ('Share product review', 'Share your honest review of our new smartphone', 50, 'TechBrand', 'review', true);

-- Sample Notifications
INSERT INTO public.notifications (user_id, type, message)
VALUES
    ('11111111-1111-1111-1111-111111111111', 'task_available', 'New task available: Like our new post'),
    ('22222222-2222-2222-2222-222222222222', 'reward_earned', 'You earned 50 tokens for completing a task!');