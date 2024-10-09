-- Add external_link column to tasks table
ALTER TABLE public.tasks ADD COLUMN external_link TEXT;

-- Update the existing tasks to have a default value for external_link
UPDATE public.tasks SET external_link = 'https://example.com' WHERE external_link IS NULL;

-- Make external_link NOT NULL
ALTER TABLE public.tasks ALTER COLUMN external_link SET NOT NULL;