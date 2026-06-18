export type QuestionType = 'textarea' | 'radio' | 'color' | 'text' | 'word'

export interface QuestionOption {
  value: string
  label: string
  icon?: string
}

export interface Question {
  id: string
  type: QuestionType
  question: string
  placeholder?: string
  options?: QuestionOption[]
  maxLength?: number
  required?: boolean
  hint?: string
}

export interface Chapter {
  id: string
  number: string
  title: string
  subtitle: string
  accent: string
  accentRgb: string
  questions: Question[]
}

export const chapters: Chapter[] = [
  {
    id: 'infancia',
    number: '01',
    title: 'Infancia',
    subtitle: 'Los primeros años que nos formaron',
    accent: '#e34b03',
    accentRgb: '227, 75, 3',
    questions: [
      {
        id: 'inf_01',
        type: 'textarea',
        question: '¿Qué objeto pequeño o juguete era tu compañero inseparable a los 7 años?',
        placeholder: 'Describilo con detalle. Su textura, su color, qué significaba para vos...',
        maxLength: 400,
        required: true,
      },
      {
        id: 'inf_02',
        type: 'radio',
        question: 'Si volvieras a tu casa de la infancia, ¿qué sonido ambiente recordarías más?',
        hint: 'Cerrá los ojos un segundo antes de responder.',
        required: true,
        options: [
          { value: 'reloj', label: 'Un reloj', icon: '🕐' },
          { value: 'radio', label: 'Una radio', icon: '📻' },
          { value: 'viento', label: 'El viento', icon: '🌬️' },
          { value: 'otro', label: 'Otro sonido', icon: '◎' },
        ],
      },
      {
        id: 'inf_03',
        type: 'textarea',
        question: '¿Qué secreto o talento tuyo sigue guardado hoy en un "cuaderno", físico o mental?',
        placeholder: 'Ese algo que nunca mostraste del todo. Que quizás nadie sabe...',
        maxLength: 400,
        required: true,
      },
      {
        id: 'inf_04',
        type: 'textarea',
        question: '¿Hacia dónde se escapaba tu mente cuando querías salir de tu casa de la infancia?',
        placeholder: 'Un lugar real, imaginario, o una sensación. Adónde ibas sin moverte...',
        maxLength: 400,
        required: true,
      },
      {
        id: 'inf_05',
        type: 'radio',
        question: 'Si estuvieras frente a algo que te duele pero que amás, ¿cuál es tu respuesta natural?',
        required: true,
        options: [
          { value: 'arreglar', label: 'Intentar arreglarlo', icon: '🔧' },
          { value: 'explotar', label: 'Explotar', icon: '⚡' },
          { value: 'silencio', label: 'Preferir el silencio', icon: '◯' },
        ],
      },
    ],
  },
  {
    id: 'adolescencia',
    number: '02',
    title: 'Adolescencia',
    subtitle: 'Las tensiones que nos definieron',
    accent: '#533ca7',
    accentRgb: '83, 60, 167',
    questions: [
      {
        id: 'ado_01',
        type: 'textarea',
        question: 'Escribí una frase breve que te decías a vos mismo cuando sentías que no encajabas.',
        placeholder: 'Esa voz interna. Lo que te repetías en los momentos difíciles...',
        maxLength: 300,
        required: true,
      },
      {
        id: 'ado_02',
        type: 'color',
        question: '¿Qué color asociás con tus momentos de mayor soledad o tensión en la secundaria?',
        hint: 'No hay respuesta correcta. Elegí instintivamente.',
        required: true,
      },
      {
        id: 'ado_03',
        type: 'textarea',
        question: '¿Cuál fue la etiqueta más injusta que te pusieron en la secundaria y que te costó quitarte?',
        placeholder: 'Esa palabra o frase que no te representaba pero que cargaste igual...',
        maxLength: 400,
        required: true,
      },
      {
        id: 'ado_04',
        type: 'textarea',
        question: '¿Qué aspecto de tu apariencia o personalidad de adolescente te costaba más aceptar?',
        placeholder: 'Algo que hoy quizás ves diferente. O que todavía duele un poco...',
        maxLength: 400,
        required: true,
      },
      {
        id: 'ado_05',
        type: 'textarea',
        question: '¿Hubo alguien que presenció un momento difícil tuyo y no dijo nada? ¿Qué necesitabas que dijera?',
        placeholder: 'Las palabras que necesitabas escuchar y nunca llegaron...',
        maxLength: 500,
        required: true,
      },
    ],
  },
  {
    id: 'adultez',
    number: '03',
    title: 'Adultez Joven',
    subtitle: 'Los ciclos que decidimos romper',
    accent: '#3443a7',
    accentRgb: '52, 67, 167',
    questions: [
      {
        id: 'adu_01',
        type: 'textarea',
        question: '¿Qué frase de un jefe o cliente te hacía sentir que estabas en un ciclo sin fin?',
        placeholder: 'Esa frase que escuchabas y algo en vos se cerraba un poco más...',
        maxLength: 400,
        required: true,
      },
      {
        id: 'adu_02',
        type: 'radio',
        question: 'Ante la duda, ¿cuál es tu modo natural de decidir?',
        required: true,
        options: [
          { value: 'rapido', label: 'Actúo rápido', icon: '⚡' },
          { value: 'analizo', label: 'Analizo todas las opciones', icon: '◎' },
        ],
      },
      {
        id: 'adu_03',
        type: 'textarea',
        question: '¿En qué momento de tu vida sentiste que te estabas acomodando en un lugar que no te hacía feliz?',
        placeholder: 'Ese instante en que supiste que algo no cerraba pero seguiste igual...',
        maxLength: 500,
        required: true,
      },
      {
        id: 'adu_04',
        type: 'textarea',
        question: '¿Cuál fue el momento exacto — una palabra o un gesto — en el que decidiste que ya era suficiente?',
        placeholder: 'El punto de quiebre. Puede ser grande o pequeño, pero fue real...',
        maxLength: 500,
        required: true,
      },
    ],
  },
  {
    id: 'final',
    number: '04',
    title: 'Final',
    subtitle: 'El horizonte que todavía imaginamos',
    accent: '#6f7bbf',
    accentRgb: '111, 123, 191',
    questions: [
      {
        id: 'fin_01',
        type: 'textarea',
        question: 'Describí un sueño profesional o personal que nunca cumpliste pero que todavía imaginás.',
        placeholder: 'No el que creés que deberías tener. El que realmente imaginás en silencio...',
        maxLength: 500,
        required: true,
      },
      {
        id: 'fin_02',
        type: 'textarea',
        question: 'Describí un lugar físico que para vos represente la paz absoluta.',
        placeholder: 'Real o imaginado. Sus colores, su temperatura, su silencio o su sonido...',
        maxLength: 400,
        required: true,
      },
      {
        id: 'fin_03',
        type: 'textarea',
        question: 'Si pudieras perdonarte hoy una sola decisión del pasado, ¿cuál sería?',
        placeholder: 'La que todavía aparece. La que llevas con más peso...',
        maxLength: 400,
        required: true,
      },
      {
        id: 'fin_04',
        type: 'textarea',
        question: '¿Hubo alguna vez en tu vida una voz, una sensación o una persona que te guió sin que en el momento te dieras cuenta?',
        placeholder: 'Algo que solo pudiste ver en retrospectiva. Que fue tuyo aunque parecía externo...',
        maxLength: 500,
        required: true,
      },
      {
        id: 'fin_05',
        type: 'word',
        question: 'Si pudieras decirle una sola palabra de aliento a tu versión de hace 20 años, ¿cuál sería?',
        placeholder: 'Una sola palabra.',
        maxLength: 40,
        required: true,
      },
    ],
  },
]

export const totalQuestions = chapters.reduce((acc, ch) => acc + ch.questions.length, 0)

export function getGlobalQuestionIndex(chapterIdx: number, questionIdx: number): number {
  let count = 0
  for (let i = 0; i < chapterIdx; i++) {
    count += chapters[i].questions.length
  }
  return count + questionIdx
}
