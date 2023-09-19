export class Evaluation {
    dataRegistro!: Date
    email!: string
    nomeEmpresa!: string
    ramoAtividade!: string
    outroRamo?: string | undefined | null
    modeloContratacao!: string
    modeloTrabalho!: string
    cargo!: string
    stacksEmpresa!: string
    stacksOutros?: string | undefined | null
    avaliacaoGeral!: string
    ambienteTrabalho!: string
    apoioAssistenciaRh!: string
    diversidade!: string
    planoCarreira!: string
    remuneracao!: string
    treinamento!: string
    beneficios!: string
    outrosBeneficios?: string | undefined | null
    salario!: number
    comentarios?: string | undefined | null

    constructor(props:Evaluation){
        Object.assign(this, props)
    }
}