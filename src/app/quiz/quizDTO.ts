class QuizDTO {
    id: number
    titulo: String
    opcoes: String[]
    selected: number

    constructor(id: number ,titulo: String, opcoes: String[], selected: number = null) {
        this.id = id
        this.titulo = titulo
        this.opcoes = [...opcoes]
    }
}

export default QuizDTO