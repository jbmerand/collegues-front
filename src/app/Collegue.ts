/**
 * Classe représentant un collègue de l'entreprise.
 */
class Collegue {

    constructor(public _matricule: string, public _nom: string, public _prenoms: string, public _email: string,
                public _dateDeNaissance: Date, public _photoUrl: string) {

    }

    get matricule(): string {
        return this._matricule;
    }

    set matricule(value: string) {
        this._matricule = value;
    }

    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    get prenoms(): string {
        return this._prenoms;
    }

    set prenoms(value: string) {
        this._prenoms = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get dateDeNaissance(): Date {
        return this._dateDeNaissance;
    }

    set dateDeNaissance(value: Date) {
        this._dateDeNaissance = value;
    }

    get photoUrl(): string {
        return this._photoUrl;
    }

    set photoUrl(value: string) {
        this._photoUrl = value;
    }

}

export default Collegue;
