export interface User {
  type: 'admin' | 'normal';
  [key: string]: string;
}
