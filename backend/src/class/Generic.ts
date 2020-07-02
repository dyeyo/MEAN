//ESTA CLASE LO QUE HACE ES PARA QUE EN FRONT SEPA COMO RECIBIR LA INFO Y ESTRECTURAR UNA RESPUESTA CON SU SINTAXIS
export class GenericResponse {
  code: number;
  message?: string;
  data?: any;
}
