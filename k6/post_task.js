import http from 'k6/http'
import { check, sleep } from 'k6'

export default function () {
  const task = {
    title: 'k6 benchmark data',
    description: `this is description ${new Date()}`,
    category_id: 2,
  }
  const res = http.post(
    'https://mysite-qt1p.onrender.com/tasks.json',
    JSON.stringify(task),
    {
      headers: { 'Content-Type': 'application/json' },
    }
  )
  check(res, {
    'is status 201': (r) => r.status === 201,
  })
  sleep(1)
}
