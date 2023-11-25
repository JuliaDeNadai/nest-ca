// interface independente de tecnologia, se precisar colocar outra coisa no lugar do typeorm futuramente, é só criar outro adapter etc

export interface UserEntityInterface {
  id: number;
  login: string;
  email: string;
}