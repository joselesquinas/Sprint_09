export interface Forms {
   nombre   : string;
   email    : string;
   username : string;
   password : string;
   confirmar: string;

}

export interface FormLogin {
   email    : string;
   password : string;
}

export interface Users {
   nombre   : string;
   email    : string;
   fechaIso : Date;
   password : string;

}