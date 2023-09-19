export class EvaluationDTO {
    dataRegistro!: Date
    email!: string
    nomeEmpresa!: string
    ramoAtividade!: string
    outroRamo?: string
    modeloContratacao!: string
    modeloTrabalho!: string
    cargo!: string
    stacksEmpresa!: string
    stacksOutros?: string
    avaliacaoGeral!: string
    ambienteTrabalho!: string
    apoioAssistenciaRh!: string
    diversidade!: string
    planoCarreira!: string
    remuneracao!: string
    treinamento!: string
    beneficios!: string
    outrosBeneficios?: string
    salario!: number
    comentarios?: string
}