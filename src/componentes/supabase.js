//Esta es la conexion a la base de datos
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vkpfvofefnzdrcxoibdi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrcGZ2b2ZlZm56ZHJjeG9pYmRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ4NTY4ODQsImV4cCI6MjAwMDQzMjg4NH0.girUJ6dv8M3RpZEeZQhWwi7sUQxe9JUw_NRz8awnA-U'
export const supabase = createClient(supabaseUrl, supabaseKey)