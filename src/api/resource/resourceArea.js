import { request } from '@/utils/request.js'

/**
 * 资源地区 API JS
 */

export default {

  /**
   * 获取资源地区分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'resource/area/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加资源地区
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'resource/area/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新资源地区数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'resource/area/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取资源地区
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'resource/area/read',
      method: 'get',
      data
    })
  },

  /**
   * 将资源地区删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'resource/area/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 从回收站获取资源地区数据列表
   * @returns
   */
  getRecycleList (params = {}) {
    return request({
      url: 'resource/area/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复资源地区数据
   * @returns
   */
  recoverys (data) {
    return request({
      url: 'resource/area/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除资源地区
   * @returns
   */
  realDeletes (data) {
    return request({
      url: 'resource/area/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改资源地区数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'resource/area/changeStatus',
      method: 'put',
      data
    })
  },


}