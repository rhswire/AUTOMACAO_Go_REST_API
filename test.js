import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  vus: 50, // Número de usuários virtuais
  duration: '30s', // Duração do teste
};

export default function () {
  let res = http.get('https://gorest.co.in/public/v2/users');
  
  // Verifique se a resposta tem o status correto
  check(res, { 'status was 200': (r) => r.status === 200 });

  // Aguarde um pouco antes da próxima solicitação
  sleep(1);
}
