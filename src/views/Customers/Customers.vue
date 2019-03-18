<template lang="pug">
  page(title="Clientes")
    data-table(:headers="headers" :items="items")
      template(slot="table-rows" slot-scope="props")
        td {{ props.item.code }}
        td {{ props.item.name }}
        td {{ props.item.document }}
        td {{ props.item.phone }}
        td {{ props.item.location }}
        td
          v-tooltip(top)
            v-btn(
            fab
            flat
            dark
            small
            color="primary"
            @click.stop.prevent="edit(props.item)"
            slot="activator"
            )
              v-icon edit
            span Editar
          v-tooltip(top)
            v-btn(
            fab
            flat
            dark
            small
            color="red"
            @click.stop.prevent="delete(props.item)"
            slot="activator"
            )
              v-icon delete
            span Excluir

</template>

<script>

  import Page from "../../components/Page";
  import DataTable from "../../components/DataTable";

  export default {
    components: {
      DataTable,
      Page
    },
    data () {
      return {
        headers: [
          {text: 'Código', align: 'left', sortable: false, value: 'code', width: '10%'},
          {text: 'Nome/Razão Social', align: 'left', sortable: false, value: 'name', width: '40%'},
          {text: 'Cpf/Cnpj', align: 'left', sortable: false, value: 'document', width: '15%'},
          {text: 'Telefone', align: 'left', sortable: false, value: 'phone', width: '15%'},
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
