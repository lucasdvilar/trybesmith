import { JwtPayload } from 'jsonwebtoken';

interface IUserInfoJwtPayload extends JwtPayload {
  userInfo: {
    id: number,
    username: string,
    password: string,
  }
}

export default IUserInfoJwtPayload;
