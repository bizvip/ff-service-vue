import { request } from '@/utils/request.js'

/**
 * 横幅广告 API JS
 */

export default {

  /**
   * 获取横幅广告分页列表
   * @returns
   */
  getList(params = {}) {
    return request({
      url: 'static/banner/index',
      method: 'get',
      params
    })
  },

  getDict() {
    return request({
      url: 'static/site/dict',
      method: 'get',
    })
  },

  /**
   * 读取横幅广告
   * @returns
   */
  read(data = {}) {
    return request({
      url: 'static/banner/read',
      method: 'get',
      data
    })
  },

  /**
   * 将横幅广告删除，有软删除则移动到回收站
   * @returns
   */
  deletes(data) {
    return request({
      url: 'static/banner/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 更新横幅广告数据
   * @returns
   */
  update(id, data = {}) {
    return request({
      url: 'static/banner/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 添加横幅广告
   * @returns
   */
  save(data = {}) {
    return request({
      url: 'static/banner/save',
      method: 'post',
      data
    })
  },

  /**
   * 从回收站获取横幅广告数据列表
   * @returns
   */
  getRecycleList(params = {}) {
    return request({
      url: 'static/banner/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复横幅广告数据
   * @returns
   */
  recoverys(data) {
    return request({
      url: 'static/banner/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除横幅广告
   * @returns
   */
  realDeletes(data) {
    return request({
      url: 'static/banner/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改横幅广告数据
   * @returns
   */
  changeStatus(data = {}) {
    return request({
      url: 'static/banner/changeStatus',
      method: 'put',
      data
    })
  },


}