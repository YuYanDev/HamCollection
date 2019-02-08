<template>
  <div id="app">
    <v-app light>
      <v-navigation-drawer
        fixed
        :mini-variant="miniVariant"
        :clipped="clipped"
        v-model="drawer"
        app
      >
        <v-list>
          <v-list-tile 
            router
            :to="item.to"
            :key="i"
            v-for="(item, i) in items"
            exact
          >
            <v-list-tile-action>
              <v-icon v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar 
        fixed 
        app 
        dark
        color="blue darken-3"
        :clipped-left="clipped"
      >
        <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-content>
        <v-container fluid fill-height>
          <v-slide-y-transition mode="out-in">
            <router-view></router-view>
          </v-slide-y-transition>
        </v-container>
      </v-content>
      <v-footer :fixed="fixed" app>
        <span>&nbsp;&nbsp;Build By YuYan ({{ authorCallsign }})</span>
        <v-spacer></v-spacer>
        <span>&copy; 2018 - present &nbsp;&nbsp;</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: 'qsldesktopmaterial',
    data: () => ({
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        { icon: 'home', title: '首页', to: '/' },
        { icon: 'bubble_chart', title: 'On Air!', to: '/onair' },
        { icon: 'search', title: '呼号地区查询', to: '/csquery'},
        { icon: 'info', title: '关于/隐私', to:'/about'}
      ],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: 'HamCollection',
      authorCallsign:''
    }),
    created() {
      this.authorCallsign = 'BG6TTI / K6TTI'
    },
    
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');
  /* Global CSS */
</style>
