import dataSources from "../datasources";

export interface User {
  email: string;
}

export interface Context {
  user?: User;
  dataSources?: typeof dataSources;
}
