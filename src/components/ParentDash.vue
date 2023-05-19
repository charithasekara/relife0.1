<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <SideBar />

      <DashBoard/>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import SideBar from "@/components/SideBar.vue";

import DashBoard from "@/components/DashBoard.vue";

export default {
  components: {
    DashBoard,
    SideBar,

  },
  setup () {
    return {

    }
  }
}
</script>
