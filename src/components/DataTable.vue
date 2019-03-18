<template lang="pug">
  #datatable
    btn-add.right(text="Novo cliente")
    v-data-table.pt-4(
      hide-actions
      :headers="headers"
      :items="items"
      class="elevation-1"
      pagination.sync="pagination"
      no-data-text="Nenhum registro"
      no-results-text="Nenhum registro encontrado"
    )
      template(slot="items" slot-scope="props")
        tr
          slot(
            name="table-rows"
            :item="props.item"
          )
    v-layout(
      row
      align-center
    )
      v-flex(xs1)
      v-flex.text-xs-center(xs10)
        v-pagination(
          v-model="page"
          :length="lenghtPage"
          circle
          color="primary"
          :total-visible="7"
        )
      v-flex(xs1 align-center)
        select-page(v-model="rowsPerPage")
</template>

<script>
  import SelectPage from "./SelectPage";
  import BtnAdd from "./ButtonAdd";

  export default {
    name: 'data-table',
    components: {
      SelectPage,
      BtnAdd
    },
    props: {
      headers: {
        type: Array,
        default: []
      },
      items: {
        type: Array,
        default: []
      }
    },
    data () {
      return {
        page: 1,
        lenghtPage: 1
      }
    },
  }
</script>
