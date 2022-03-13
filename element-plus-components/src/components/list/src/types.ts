
// 列表的每一项
interface ListItem {
  avatar: string // 头像
  title: string // 标题
  desc: string // 描述
  time: string // 时间
  tag: string // 标签内容
  tagType: '' | 'success' | 'info' | 'warning' | 'danger'
}

export type IListItem = Partial<ListItem>

// 列表
export interface ListOptions {
  title: string
  content: IListItem[]
}

// 操作选项
export interface ActionOptions {
  text: string
  icon?: string
}