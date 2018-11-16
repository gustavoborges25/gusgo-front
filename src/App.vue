<template lang='pug'>
  v-app
    v-navigation-drawer(v-model='drawer' app temporary)
      v-list
        v-list-tile
          v-list-tile-content
            v-list-tile-title
            v-list-tile-title
              span Menu
        v-divider
        template(v-for='(item, index) in items')
          v-list-tile(:href='item.href', :to='{name: item.href}', :key='index')
            v-list-tile-action
              v-icon(light='', v-html='item.icon')
            v-list-tile-content
              v-list-tile-title(v-html='item.title')
    v-toolbar.indigo(dark='', app='')
      v-toolbar-side-icon(@click.stop='drawer = !drawer')
      v-toolbar-title Gusgo Backoffice
      v-spacer
      v-btn(icon='', @click.native.stop='toHome()')
        v-icon home
    v-content
      v-fade-transition(mode='out-in')
        router-view
    v-footer.indigo.pa-3(dark='', app='')
      span
        | &copy; 2018 - Gusgo
</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
        items: [
          { href: 'home', router: false, title: 'Início', icon: 'home'},
          { href: 'clientes', router: true, title: 'Clientes', icon: 'people'},
          { href: 'fornecedores', router: true, title: 'Fornecedores', icon: 'work'},
          { href: 'produtos', router: true, title: 'Produtos', icon: 'shopping_cart'},
          { href: 'financeiro', router: true, title: 'Financeiro', icon: 'payment'},
          { href: 'despesas', router: true, title: 'Despesas', icon: 'description'},
          { href: 'relatorios', router: true, title: 'Relatórios', icon: 'dashboard'},
          { href: 'agenda', router: true, title: 'Agenda', icon: 'view_agenda'},
          { href: 'configuracoes', router: true, title: 'Configurações', icon: 'build'},
        ],
      };
    },
    methods: {
      toHome() {
        this.$router.replace('/')
      },
    },
  };
</script>

<style lang="stylus">

</style>
