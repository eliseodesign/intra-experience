import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type ResponseRow = {
  id?: string
  created_at?: string
  nombre: string
  inf_01?: string
  inf_02?: string
  inf_03?: string
  inf_04?: string
  inf_05?: string
  ado_01?: string
  ado_02?: string
  ado_03?: string
  ado_04?: string
  ado_05?: string
  adu_01?: string
  adu_02?: string
  adu_03?: string
  adu_04?: string
  fin_01?: string
  fin_02?: string
  fin_03?: string
  fin_04?: string
  fin_05?: string
}

export async function submitResponse(
  nombre: string,
  answers: Record<string, string>
): Promise<{ success: boolean; error?: string }> {
  const row: ResponseRow = {
    nombre: nombre.trim(),
    ...Object.fromEntries(
      Object.entries(answers).map(([k, v]) => [k, v.trim()])
    ),
  }

  const { error } = await supabase.from('responses').insert(row)

  if (error) {
    console.error('Supabase insert error:', error)
    return { success: false, error: error.message }
  }

  return { success: true }
}
