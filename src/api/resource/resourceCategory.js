import { request } from '@/utils/request.js'

/**
 * 资源分类 API JS
 */

export default {

  /**
   * 获取资源分类分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'resource/category/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加资源分类
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'resource/category/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新资源分类数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'resource/category/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取资源分类
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'resource/category/read',
      method: 'get',
      data
    })
  },

  /**
   * 将资源分类删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'resource/category/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 从回收站获取资源分类数据列表
   * @returns
   */
  getRecycleList (params = {}) {
    return request({
      url: 'resource/category/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复资源分类数据
   * @returns
   */
  recoverys (data) {
    return request({
      url: 'resource/category/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除资源分类
   * @returns
   */
  realDeletes (data) {
    return request({
      url: 'resource/category/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改资源分类数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'resource/category/changeStatus',
      method: 'put',
      data
    })
  },


}