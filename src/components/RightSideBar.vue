<template>
  <div class="right-sidebar-container">
  <q-drawer show-if-above side="right" behavior="default" bordered :width="300">
    <q-toolbar class="q-mt-lg">
      <q-space></q-space>
      <q-btn round icon="notifications">
        <q-badge floating color="green" rounded />
      </q-btn>
    </q-toolbar>
    <div class="flex flex-center column">
      <q-avatar size="120px">
        <img src="/dp1.jpg"  alt=""/>
      </q-avatar>
      <q-item-label caption class="q-my-md">Your Activity</q-item-label>
      <div class="text-h5"><strong>86%</strong></div>
    </div>
    <q-card class="q-mx-md" flat bordered>
      <q-toolbar class="">
        <div class="text-overline">All activity</div>
        <q-space></q-space>
        <q-btn round icon="fas fa-chevron-right" size="10px" color="green"></q-btn>
      </q-toolbar>
    </q-card>
    <q-card class="q-mx-md q-mt-lg" bordered>
      <q-toolbar>
        <div class="text-overline text-weight-bolder">Tikiri Sewana</div>
        <q-space></q-space>
        <q-avatar size="25px">
          <img src="/dp1.jpg"  alt=""/>
        </q-avatar>
        <div class="text-overline q-ml-sm">Madhushan</div>
      </q-toolbar>
      <q-separator />
      <div class="q-pa-md row justify-center">
        <div style="width:100%; max-width: 400px">
          <q-chat-message name="me" avatar="https://cdn.quasar.dev/img/avatar4.jpg" :text="['Can i know about your place']"
                          sent stamp="7 minutes ago">

          </q-chat-message>
          <q-chat-message name="JAne" avatar="https://cdn.quasar.dev/img/avatar3.jpg" :text="['Yes of course']"
                          stamp="4 minutes ago">

          </q-chat-message>
        </div>
      </div>
      <q-input bottom-slots v-model="text" label="Your message.." class="q-mx-sm">
        <template v-slot:after>
          <q-btn round dense flat icon="fas fa-paper-plane" color="green" size="10px" class="q-mt-md" />
        </template>
      </q-input>
    </q-card>
    <!--meassage-->
    <div class="q-mt-lg"></div><!--space between cards-->
    <q-separator />
    <div class="q-mt-lg"></div>
    <q-card class="q-mx-md" flat bordered>
      <q-toolbar class="">
        <div class="text-overline">Jinananda Children Home </div>
        <q-space></q-space>
        <font-awesome-icon icon="fa-solid fa-arrow-right" size="10px" color="green" />
      </q-toolbar>
    </q-card>

    <div class="q-mt-lg"></div><!--space between cards-->
    <q-separator />
    <div class="q-mt-lg"></div>
    <q-card class="q-mx-md" flat bordered>
      <q-toolbar class="">
        <div class="text-overline">Thudawa Girl’s Home </div>
        <q-space></q-space>
        <font-awesome-icon icon="fa-solid fa-arrow-right" size="10px" color="green" />
      </q-toolbar>
    </q-card>

    <div class="q-mt-lg"></div><!--space between cards-->
    <q-separator />
    <div class="q-mt-lg"></div>
    <q-card class="q-mx-md" flat bordered>
      <q-toolbar class="">
        <div class="text-overline">Amarapura Elder’s Home </div>
        <q-space></q-space>
        <font-awesome-icon icon="fa-solid fa-arrow-right" size="10px" color="green" />
      </q-toolbar>
    </q-card>

    <div class="q-mt-lg"></div><!--space between cards-->
    <q-separator />
    <div class="q-mt-lg"></div>
    <q-card class="q-mx-md" flat bordered>
      <q-toolbar class="">
        <div class="text-overline">Contact More</div>
        <q-space></q-space>
        <font-awesome-icon icon="fa-solid fa-arrow-right" size="10px" color="green" />
      </q-toolbar>
    </q-card>
    <div class="q-mt-lg"></div>

  </q-drawer>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default {
  name: "RightSideBar",
  components: {
    FontAwesomeIcon
  },
  data () {
    return {
      text: ''
    }
  },
  mounted () {
    // Registering the icon globally so that it can be used in other components as well
    this.$fontawesome.library.add(faArrowRight)
  }
}
</script>

<style scoped>
.right-sidebar-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
}
</style>
