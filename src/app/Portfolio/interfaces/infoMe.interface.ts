export interface RESTAboutMe {
    Habilidades: Habilidade[];
    Formacion:   Formacion[];
}

export interface Formacion {
    Titulo:         string;
    Institucion:    string;
    AnioGraduacion: string;
    Ubicacion:      string;
}

export interface Habilidade {
    id:    string;
    title: string;
    image: string;
}
