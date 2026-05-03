export type Machine = {
  id: string
  status: string
  paper: string
}

export type Job = {
  id: string
  machine: string
  pages: number
  status: string
}