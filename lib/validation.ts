import { z } from 'zod'
import { chapters } from './questions'

const answerSchema = z.string().min(1, 'Esta respuesta es requerida.')

export const formSchema = z.object(
  Object.fromEntries(
    chapters.flatMap((ch) =>
      ch.questions
        .filter((q) => q.required)
        .map((q) => [q.id, answerSchema])
    )
  )
)

export type FormAnswers = z.infer<typeof formSchema>

export function validateAnswer(value: string, required: boolean): string | null {
  if (required && (!value || value.trim().length === 0)) {
    return 'Por favor completá esta respuesta antes de continuar.'
  }
  return null
}
