
import { defineComponent, PropType, useAttrs } from "vue"
import { MenuItem } from "./types"
import * as Icons from '@element-plus/icons'
import './styles/index.scss'
export default defineComponent({
  props: {
    // 导航菜单的数据
    data: {
      type: Array as PropType<MenuItem[]>,
      required: true,
    },
    // 默认选中的菜单
    defaultActive: {
      type: String,
      default: "",
    },
    // 是否是路由模式
    router: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    // 封装一个渲染无限层级菜单的方法
    // 函数会返回一段 jsx 的代码
    let renderMenu = (data:MenuItem[]) => {
      return data.map((item: MenuItem) => {
        // 每个菜单的图标
        item.i = (Icons as any)[item.icon!]
        // 处理sub-menu的插槽
        let slots = {
          title: () => {
            return <>
              <item.i />
              <span>{item.name}</span>
            </>
          }
        }
        // 递归渲染 children
        if(item.children && item.children.length) {
          return (
            <el-sub-menu index={item.index} v-slots={slots}>
              {renderMenu(item.children)}
            </el-sub-menu>
          )
        }
        // 正常渲染普通的菜单
        return (
          <el-menu-item index={item.index}>
            <item.i />
            <span>{item.name}</span>
          </el-menu-item>
        )
      })
    }
    let attrs = useAttrs()
    return () => {
      return (
        <el-menu default-active={props.defaultActive} router={props.router} {...attrs}>
          {renderMenu(props.data)}
        </el-menu>
      )
    }
  },
})
