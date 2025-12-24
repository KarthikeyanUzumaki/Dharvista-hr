import { createClient } from '@supabase/supabase-js';

// YOUR PERSONAL SUPABASE KEYS
const supabaseUrl = 'https://aleurrhzawnywxnmzvfs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsZXVycmh6YXdueXd4bm16dmZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYzMDY0NDEsImV4cCI6MjA4MTg4MjQ0MX0.EoX0B-vwsVAu1Z1MZVFFeysG-t2w9DcFfQ-3EWQhoK4';

export const supabase = createClient(supabaseUrl, supabaseKey);