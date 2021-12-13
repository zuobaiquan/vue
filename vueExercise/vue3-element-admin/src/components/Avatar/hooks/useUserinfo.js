import { computed } from 'vue'
import { useStore } from 'vuex'

export const useUserinfo = () => {
  const store = useStore()
  const userinfo = computed(() => store.state.account.userinfo)

  return { userinfo }
}
