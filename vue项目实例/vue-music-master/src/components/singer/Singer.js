export default class Singer {
  constructor (value) {
    this.country = value.country
    this.singer_id = value.singer_id
    this.name = value.singer_name
    this.singer_pic = 'http://y.gtimg.cn/music/photo_new/T001R150x150M000' + value.singer_mid + '.jpg?max_age=2592000'
  }
}
