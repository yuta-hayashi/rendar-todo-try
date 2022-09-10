import http from 'k6/http'
import { check, sleep } from 'k6'

export default function () {
  const res = http.get('https://mysite-qt1p.onrender.com/tasks.json')
  check(res, {
    'is status 200': (r) => r.status === 200,
  })
  sleep(1)
}
