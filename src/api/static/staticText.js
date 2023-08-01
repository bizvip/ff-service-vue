import { request } from '@/utils/request.js'

/**
 * 公告管理 API JS
 */

export default {

  /**
   * 获取公告管理分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'static/text/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加公告管理
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'static/text/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新公告管理数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'static/text/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取公告管理
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'static/text/read',
      method: 'get',
      data
    })
  },

  /**
   * 将公告管理删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'static/text/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 从回收站获取公告管理数据列表
   * @returns
   */
  getRecycleList (params = {}) {
    return request({
      url: 'static/text/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复公告管理数据
   * @returns
   */
  recoverys (data) {
    return request({
      url: 'static/text/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除公告管理
   * @returns
   */
  realDeletes (data) {
    return request({
      url: 'static/text/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改公告管理数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'static/text/changeStatus',
      method: 'put',
      data
    })
  },


}