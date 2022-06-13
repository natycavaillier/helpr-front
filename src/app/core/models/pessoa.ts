export interface Pessoa {
  id?: number;
  nome: string;
  cpf: string;
  email: string;
  senha: string;
  perfis: Perfil[] | string[];
  dataCriacao: string;
}

export interface Cliente extends Pessoa {}

export interface Tecnico extends Pessoa {}

export enum Perfil {
  ADMIN,
  CLIENTE,
  TECNICO,
}
