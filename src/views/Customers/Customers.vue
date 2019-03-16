<template lang="pug">
  page(title="Clientes")
    btn-add.right(text="Novo cliente")
    data-table(:headers="headers")
      td {{ items.code }}
      td {{ items.name }}
      td {{ items.document }}
      td {{ items.phone }}
      td {{ items.location }}
      td
        v-btn
          v-icon delete
</template>

<script>

  import Page from "../../components/Page";
  import DataTable from "../../components/DataTable";
  import BtnAdd from "../../components/ButtonAdd";
  export default {
    components: {BtnAdd, DataTable, Page},
    data () {
      return {
        headers: [
          {text: 'Código', align: 'left', sortable: false, value: 'code', width: '10%'},
          {text: 'Nome/Razão Social', align: 'left', sortable: false, value: 'name', width: '40%'},
          {text: 'Cpf/Cnpj', align: 'left', sortable: false, value: 'document', width: '20%'},
          {text: 'Telefone', align: 'left', sortable: false, value: 'phone', width: '10%'},
          {text: 'Cidade/Estado', align: 'left', sortable: false, value: 'location', width: '10%'},
          {text: 'Ações', align: 'left', sortable: false, value: 'action', width: '10%'}
        ],
        items: [
          {
            code: 800123,
            name: 'Cliente 1',
            document: '11.279.307/0001-59',
            phone: '(44) 9 9898-9898',
            location: 'Maringá/PR',
          },
          {
            code: 800123,
            name: 'Cliente 1',
            document: '11.279.307/0001-59',
            phone: '(44) 9 9898-9898',
            location: 'Maringá/PR',
          },
          {
            code: 800123,
            name: 'Cliente 1',
            document: '11.279.307/0001-59',
            phone: '(44) 9 9898-9898',
            location: 'Maringá/PR',
          },
          {
            code: 800123,
            name: 'Cliente 1',
            document: '11.279.307/0001-59',
            phone: '(44) 9 9898-9898',
            location: 'Maringá/PR',
          },
          {
            code: 800123,
            name: 'Cliente 1',
            document: '11.279.307/0001-59',
            phone: '(44) 9 9898-9898',
            location: 'Maringá/PR',
          },
          {
            code: 800123,
            name: 'Cliente 1',
            document: '11.279.307/0001-59',
            phone: '(44) 9 9898-9898',
            location: 'Maringá/PR',
          },
          {
            code: 800123,
            name: 'Cliente 1',
            document: '11.279.307/0001-59',
            phone: '(44) 9 9898-9898',
            location: 'Maringá/PR',
          },
          {
            code: 800123,
            name: 'Cliente 1',
            document: '11.279.307/0001-59',
            phone: '(44) 9 9898-9898',
            location: 'Maringá/PR',
          },
          {
            code: 800123,
            name: 'Cliente 1',
            document: '11.279.307/0001-59',
            phone: '(44) 9 9898-9898',
            location: 'Maringá/PR',
          },
          {
            code: 800123,
            name: 'Cliente 1',
            document: '11.279.307/0001-59',
            phone: '(44) 9 9898-9898',
            location: 'Maringá/PR',
          },
          {
            code: 800123,
            name: 'Cliente 1',
            document: '11.279.307/0001-59',
            phone: '(44) 9 9898-9898',
            location: 'Maringá/PR',
          },
          {
            code: 800123,
            name: 'Cliente 1',
            document: '11.279.307/0001-59',
            phone: '(44) 9 9898-9898',
            location: 'Maringá/PR',
          },
          {
            code: 800123,
            name: 'Cliente 1',
            document: '11.279.307/0001-59',
            phone: '(44) 9 9898-9898',
            location: 'Maringá/PR',
          },
          {
            code: 800123,
            name: 'Cliente 1',
            document: '11.279.307/0001-59',
            phone: '(44) 9 9898-9898',
            location: 'Maringá/PR',
          },
          {
            code: 800123,
            name: 'Cliente 1',
            document: '11.279.307/0001-59',
            phone: '(44) 9 9898-9898',
            location: 'Maringá/PR',
          },
          {
            code: 800123,
            name: 'Cliente 1',
            document: '11.279.307/0001-59',
            phone: '(44) 9 9898-9898',
            location: 'Maringá/PR',
          },
          {
            code: 800123,
            name: 'Cliente 1',
            document: '11.279.307/0001-59',
            phone: '(44) 9 9898-9898',
            location: 'Maringá/PR',
          },
          {
            code: 800123,
            name: 'Cliente 1',
            document: '11.279.307/0001-59',
            phone: '(44) 9 9898-9898',
            location: 'Maringá/PR',
          },
          {
            code: 800123,
            name: 'Cliente 1',
            document: '11.279.307/0001-59',
            phone: '(44) 9 9898-9898',
            location: 'Maringá/PR',
          },
        ]
      }
    }
  }
</script>
