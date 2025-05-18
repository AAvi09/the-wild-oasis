import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://yeyzaxhytltmthzyfmth.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlleXpheGh5dGx0bXRoenlmbXRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0NTk4NjMsImV4cCI6MjA2MjAzNTg2M30.Fc75biKD9dFhDXZsiqt7_pwJE7vB5QLe__pI3w2cRwA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
