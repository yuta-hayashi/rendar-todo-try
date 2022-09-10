# k6 のベンチマーク結果

## render の PostgreSQL の時

```bash
$ k6 run post_task.js --vus 100 --duration 1s

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: post_task.js
     output: -

  scenarios: (100.00%) 1 scenario, 100 max VUs, 31s max duration (incl. graceful stop):
           * default: 100 looping VUs for 1s (gracefulStop: 30s)


running (09.9s), 000/100 VUs, 100 complete and 0 interrupted iterations
default ✓ [======================================] 100 VUs  1s

     ✓ is status 201

     checks.........................: 100.00% ✓ 100       ✗ 0
     data_received..................: 380 kB  38 kB/s
     data_sent......................: 72 kB   7.3 kB/s
     http_req_blocked...............: avg=112.71ms min=59.25ms  med=113.63ms max=164.57ms p(90)=154.11ms p(95)=158.43ms
     http_req_connecting............: avg=18.71ms  min=17.68ms  med=18.7ms   max=19.71ms  p(90)=19.47ms  p(95)=19.61ms
     http_req_duration..............: avg=5.3s     min=891.18ms med=5.53s    max=8.8s     p(90)=8.5s     p(95)=8.64s
       { expected_response:true }...: avg=5.3s     min=891.18ms med=5.53s    max=8.8s     p(90)=8.5s     p(95)=8.64s
     http_req_failed................: 0.00%   ✓ 0         ✗ 100
     http_req_receiving.............: avg=111.39µs min=36µs     med=94µs     max=1.34ms   p(90)=137.6µs  p(95)=211µs
     http_req_sending...............: avg=35.67µs  min=19µs     med=27µs     max=379µs    p(90)=46.2µs   p(95)=62.19µs
     http_req_tls_handshaking.......: avg=88.98ms  min=35.17ms  med=89.88ms  max=140.71ms p(90)=131.28ms p(95)=135.59ms
     http_req_waiting...............: avg=5.3s     min=890.94ms med=5.53s    max=8.8s     p(90)=8.5s     p(95)=8.64s
     http_reqs......................: 100     10.096891/s
     iteration_duration.............: avg=6.42s    min=1.97s    med=6.69s    max=9.9s     p(90)=9.6s     p(95)=9.8s
     iterations.....................: 100     10.096891/s
     vus............................: 17      min=17      max=100
     vus_max........................: 100     min=100     max=100
```

```bash
$ k6 run get_task.js --vus 100 --duration 1s

          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: get_task.js
     output: -

  scenarios: (100.00%) 1 scenario, 100 max VUs, 31s max duration (incl. graceful stop):
           * default: 100 looping VUs for 1s (gracefulStop: 30s)


running (31.0s), 000/100 VUs, 62 complete and 38 interrupted iterations
default ✓ [======================================] 100 VUs  1s

     ✓ is status 200

     checks.........................: 100.00% ✓ 66       ✗ 0
     data_received..................: 2.3 MB  76 kB/s
     data_sent......................: 64 kB   2.1 kB/s
     http_req_blocked...............: avg=116.57ms min=73.69ms med=113.64ms max=170.44ms p(90)=152.97ms p(95)=156.49ms
     http_req_connecting............: avg=17.58ms  min=15.4ms  med=17.87ms  max=18.63ms  p(90)=18.46ms  p(95)=18.51ms
     http_req_duration..............: avg=17.16s   min=1.97s   med=18.03s   max=30.77s   p(90)=27.66s   p(95)=30.07s
       { expected_response:true }...: avg=17.16s   min=1.97s   med=18.03s   max=30.77s   p(90)=27.66s   p(95)=30.07s
     http_req_failed................: 0.00%   ✓ 0        ✗ 66
     http_req_receiving.............: avg=783.51µs min=227µs   med=521µs    max=7.05ms   p(90)=1.75ms   p(95)=2.28ms
     http_req_sending...............: avg=38.92µs  min=18µs    med=28.5µs   max=600µs    p(90)=43µs     p(95)=47µs
     http_req_tls_handshaking.......: avg=78.71ms  min=37.92ms med=76.09ms  max=131.96ms p(90)=116.69ms p(95)=118.16ms
     http_req_waiting...............: avg=17.16s   min=1.97s   med=18.03s   max=30.77s   p(90)=27.66s   p(95)=30.07s
     http_reqs......................: 66      2.128826/s
     iteration_duration.............: avg=17.41s   min=3.05s   med=17.18s   max=29.93s   p(90)=27.82s   p(95)=28.61s
     iterations.....................: 62      1.999807/s
     vus............................: 38      min=38     max=100
     vus_max........................: 100     min=100    max=100
```
