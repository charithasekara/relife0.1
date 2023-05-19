<template>
  <q-drawer show-if-above side="left" behavior="desktop" :width="90" class="colorBackground">
    <div class="flex flex-center column q-mt-lg q-mb-lg">
      <img src="/relife3.ico" alt="Relife icon" style="width: 70%; height: 70%;"  />
    </div>
    <div class="flex flex-center q-mt-sm q-mb--md">
      <q-list>
        <q-item clickable :active="link=== 'home'" @click="link='home'" active-class="">
          <q-item-section avatar class="flex flex-center column">
            <font-awesome-icon :icon="['fas', 'calendar-plus']" :size="{ width: '70%', height: '70%' }" style="color: floralwhite; width: 70%; height: 70%;" />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <div class="flex flex-center q-mt-sm q-mb--md">
      <q-list>
        <q-item clickable :active="link=== 'home'" @click="link='home'" active-class="">
          <q-item-section avatar class="flex flex-center column">
            <font-awesome-icon :icon="['fas', 'fa-message']" :size="{ width: '70%', height: '70%' }" style="color: floralwhite; width: 70%; height: 70%;" />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <div class="flex flex-center q-mt-sm q-mb--md">
      <q-list>
        <q-item clickable :active="link=== 'home'" @click="link='home'" active-class="">
          <q-item-section avatar class="flex flex-center column">
            <font-awesome-icon :icon="['fas', 'fa-gear']" :size="{ width: '70%', height: '70%' }" style="color: floralwhite; width: 70%; height: 70%;" />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <div class="flex flex-center q-mt-sm q-mb--md">
      <q-list>
        <q-item clickable :active="link=== 'home'" @click="link='home'" active-class="">
          <q-item-section avatar class="flex flex-center column">
            <q-btn to="/rightsidebar">
            <font-awesome-icon :icon="['fas', 'fa-user-plus']" :size="{ width: '70%', height: '70%' }" style="color: floralwhite; width: 70%; height: 70%;" />
            </q-btn>
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <div style="position:absolute; bottom: 20px; margin-left: auto; margin-right: auto; left:0; right:0; text-align:center">
      <q-item-section avatar class="flex flex-center column">
        <q-btn to="/signin">
      <font-awesome-icon :icon="['fas', 'fa-arrow-left']" :size="{ width: '50%', height: '50%' }" style="color: floralwhite; width: 50%; height: 50%;" />
        </q-btn>

      </q-item-section>
    </div>
  </q-drawer>
</template>

<script>
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import RightSideBar from "@/components/RightSideBar.vue";

library.add(fas);

export default {
  name:"SideBar",
  components: {
    FontAwesomeIcon,
    // eslint-disable-next-line vue/no-unused-components
    RightSideBar

  },
  setup() {
    return {
      link: ref("parentdash"),
    };
  },
};
</script>

<style>
.colorBackground {
  background: #284b36;
}
.q-item_section--side {
  padding-right: 0px !important;
}
.q-item_section--avatar {
  color: white !important;
}
.q-item {
  padding: 20px 0px !important;
}

</style>
