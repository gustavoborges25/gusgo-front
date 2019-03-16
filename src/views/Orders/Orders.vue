<template lang="pug">
  page(title="Pedidos")
    btn-add.right(text="Novo pedido")
    data-table
</template>

<script>

  import Page from "../../components/Page";
  import DataTable from "../../components/DataTable";
  import BtnAdd from "../../components/ButtonAdd";
  export default {
    components: {BtnAdd, DataTable, Page}
  }
</script>
