export const useContest = () => useState('contest', () => ({
  pending: false as boolean,
  error: null as Error | null,
  info: null as any | null, // any's will be replaced in the *future*
  problems: null as any | null,
  type: {
    has_penalty: false,
    has_score: false,
  },
}))

export const fetchContest = async (id: number, force: boolean = false) => {
  const contest = useContest().value
  if (contest.info && id == contest.info.id && !force) {
    return
  }
  contest.info = null
  contest.problems = null

  contest.pending = true
  contest.error = null
  try {
    const data = await Promise.all([
      $get<any>(`/contests/${id}`),
      $get<any>(`/contests/${id}/problems`),
    ])
    contest.info = data[0]
    contest.problems = data[1]
    contest.type.has_penalty = ['ACM20M', 'ACM2H'].includes(contest.info.type)
    contest.type.has_score = ['Ball525', 'Ball550', 'LessCode', 'LessLine'].includes(contest.info.type)
  } catch (e: any) {
    contest.error = e
  } finally {
    contest.pending = false
  }
}

export const refreshContest = async () => {
  if (useContest().value.info) {
    await fetchContest(useContest().value.info.id, true)
  }
}
