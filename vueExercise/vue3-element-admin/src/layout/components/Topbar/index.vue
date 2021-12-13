<template>
  <div class="header" :class="{ 'no-border': isHorizontalMenu }">
    <div class="navigation">
      <logo
        v-if="isShowLogo"
        class="mobile"
        :class="{ 'show-title': isHorizontalMenu }"
      />
      <hamburger v-if="isShowHamburger" />
      <breadcrumbs v-if="isShowBreadcrumbs" />
    </div>
    <div class="action">
      <error-log />
      <userinfo />
    </div>
  </div>
</template>
<script>
import { defineComponent, computed } from 'vue'
import Logo from '@/layout/components/Sidebar/Logo.vue'
import Hamburger from './Hamburger.vue'
import Breadcrumbs from './Breadcrumbs.vue'
import Userinfo from './Userinfo.vue'
import ErrorLog from '@/components/ErrorLog/index.vue'
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    Logo,
    Hamburger,
    Breadcrumbs,
    Userinfo,
    ErrorLog,
  },
  setup() {
    const store = useStore()
    const defaultSettings = computed(() => store.state.layoutSettings)

    const device = computed(() => store.state.app.device)

    const isHorizontalMenu = computed(
      () => defaultSettings.value.menus.mode === 'horizontal'
    )

    const isShowLogo = computed(
      () => isHorizontalMenu.value || device.value === 'mobile'
    )

    const isShowHamburger = computed(() => !isHorizontalMenu.value)

    const isShowBreadcrumbs = computed(
      () => defaultSettings.value.breadcrumbs.isShow && !isHorizontalMenu.value
    )

    return {
      device,
      isHorizontalMenu,
      isShowLogo,
      isShowHamburger,
      isShowBreadcrumbs,
    }
  },
})
</script>
<style lang="scss" scoped>
.header {
  height: 48px;
  border-bottom: 1px solid #e0e4ef;
  display: flex;
  justify-content: space-between;
  &.no-border {
    border: none;
  }
  .navigation {
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  .action {
    display: flex;
    align-items: center;
  }
}
.mobile {
  padding-right: 0;
  ::v-deep(.logo) {
    max-width: 24px;
    max-height: 24px;
  }
  ::v-deep(.title) {
    display: none;
  }
}
.show-title {
  ::v-deep(.title) {
    display: block;
    color: #333;
  }
}
</style>
