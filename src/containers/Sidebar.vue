<template lang='pug'>
  #sidebar
    v-navigation-drawer(v-model='drawer' app temporary)
      v-list
        v-list-tile
          v-list-tile-content
            v-list-tile-title
              span Menu
        v-divider
        template(v-for='(item, index) in items')
          v-list-tile(:to='{path: item.href}', :key='index')
            v-list-tile-action
              v-icon(v-html='item.icon')
            v-list-tile-content
              v-list-tile-title(v-html='item.title')
    v-toolbar.indigo(dark app color='primary')
      v-toolbar-side-icon(@click.stop='drawer = !drawer')
      v-toolbar-title Gusgo Backoffice
      v-spacer
      v-list-tile(@click="logout()")
        v-list-tile-action
          v-icon exit_to_app
        v-list-tile-title Sair
</template>

<script>
  import EventBus from '@/plugins/event-bus'

  export default {
    name: 'Sidebar',
    data() {
      return {
        drawer: false,
        items: [
          { href: 'home', router: false, title: 'Início', icon: 'home'},
          { href: 'pedidos', router: true, title: 'Pedidos', icon: 'store'},
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
    beforeMount () {
      this.getUser()

      EventBus.$on('toggleDrawer', () => {
        this.toggleDrawer()
      })
    },
    beforeDestroy () {
      EventBus.$off('toggleDrawer')
    },
    methods: {
      logout () {
        localStorage.removeItem('authorization')
        this.$router.go('/login')
      },
      getUser () {
        this.$http.get('api/get-logged-user').then(response => {
          this.user = response.data.user
        })
      },
      toggleDrawer () {
        this.drawer = !this.drawer
      },
    }
  }

</script>

<style scoped>

</style>
