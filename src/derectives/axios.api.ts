import { api } from 'src/boot/axios';

interface LoginResponse {
  data?: string | string[] | any;
  status: number;
  response: any;
}

export interface LoginInfo {
  loginId: string;
  password: string;
}

class AuthService {
  login(loginId: string, password: string): Promise<LoginResponse> {
    return api.post('auth/login', {
      loginId,
      password,
    });
  }
  join(loginId: string, password: string): Promise<LoginResponse> {
    return api.post('/auth/join', {
      loginId,
      password,
    });
  }
}
export default new AuthService();
