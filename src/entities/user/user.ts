export interface UserProps {
    nome: string;
    email: string;
    senha: string;
}

export class User {
    private props: UserProps;

    get nome() {
        return this.props.nome;
    }

    get email() {
        return this.props.email;
    }

    constructor(props: UserProps) {
        this.props = props;
    }
};
