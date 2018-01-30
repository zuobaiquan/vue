import Cookies from 'js-cookie';

const app = {
  state: {
    // 侧边栏伸缩
    sidebar: {
      opened: !+Cookies.get('sidebarStatus')
    },
    // 顶栏侧栏切换
    // vertical-侧栏  horizontal-顶栏
    menuType: 'vertical'
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1);
      } else {
        Cookies.set('sidebarStatus', 0);
      }
      state.sidebar.opened = !state.sidebar.opened;
    },
    TOGGLE_MENU: state => {
      if(state.menuType == 'vertical'){
        state.menuType = 'horizontal';
      } else {
        state.menuType = 'vertical';
      }
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    },
    ToggleMenu: ({ commit }) => {
      commit('TOGGLE_MENU');
    }
  }
};

export default app;
