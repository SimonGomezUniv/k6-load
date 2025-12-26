import http from 'k6/http';
import { sleep, check, group } from 'k6';

export const options = {
  vus: 10,
  duration: '300s'
};

export default function() {
  group('homepage tests', () => {
    let res = http.get('https://localhost:8080', {
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
    sleep(1);
  });
}
