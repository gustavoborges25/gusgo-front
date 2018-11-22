export default {
  methods: {
    messageSuccess (message, title = 'Sucesso') {
      this
        .$iziToast
        .success({ message, title })
    },
    messageWarning (message, title = 'Aviso') {
      this
        .$iziToast
        .warning({ message, title })
    },
    messageInfo (message, title = 'Informacao') {
      this
        .$iziToast
        .info({ message, title })
    },
    messageError (message, title = 'Erro') {
      this
        .$iziToast
        .error({ message, title })
    },
    messageHandlerError (objectError, title = 'Erro') {
      const keys = Object.keys(objectError)

      keys.map((key, index) => {
        const message = objectError[key][index]
        this
          .$iziToast
          .error({ title, message })
      })
    }
  }
}
