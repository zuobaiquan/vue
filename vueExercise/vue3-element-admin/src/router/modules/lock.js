const Lock = () => import('@/views/lock/index.vue')

export default [
  {
    path: '/lock',
    name: 'lock',
    component: Lock,
    meta: {
      title: '屏幕已锁定',
    },
  },
]
