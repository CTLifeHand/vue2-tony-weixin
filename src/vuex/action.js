// 处理数据

import { userInfo, dialog } from '../service/getData' // userWord
import { GET_USERINFO, SAVE_BEGINDIALOGUE } from './mutation-types.js'

export default {
  // 获取用户信息
  async getUserInfo ({
    commit,
    state
  }) {
    let res = await userInfo(localStorage.getItem('user_id'))
    commit(GET_USERINFO, res.user_info)
  },
  async getDialog ({
    commit,
    state
  }) {
    if (state.contactList.length > 0) return
    let res = await dialog()
    commit(SAVE_BEGINDIALOGUE, res)
  }
}
