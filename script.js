import http from 'k6/http';
import { sleep, check, group } from 'k6';

export const options = {
  scenarios: {
    shared_iter_scenario: {
      executor: 'shared-iterations',
      vus: 100,
      iterations: 1000,
      startTime: '0s',
    },
    per_vu_scenario: {
      executor: 'per-vu-iterations',
      vus: 100,
      iterations: 10,
      startTime: '10s',
    },
  },
};

export default function() {
  group('homepage tests', () => {
    for (let i = 0; i < 100; i++) { 
      let res = http.get('http://localhost:8080', {
        tags: {
          name: 'test-local',
          endpoint: 'local',
          method: 'get',
          env: 'local',
          team: 'platform',
          version: 'v1.0',
          expected_response: 'true'
        }
      });
      check(res, { "status is 200": (res) => res.status === 200 });
    }
    sleep(1);
  });
}

export function teardown() {
  sleep(5);
}
