import { request } from '@/utils/request.js'

/**
 * 主题 API JS
 */

export default {

  /**
   * 获取主题分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'resource/topic/index',
      method: 'get',
      params
    })
  },

  /**
   * 更新主题数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'resource/topic/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取主题
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'resource/topic/read',
      method: 'get',
      data
    })
  },

  /**
   * 将主题删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'resource/topic/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 从回收站获取主题数据列表
   * @returns
   */
  getRecycleList (params = {}) {
    return request({
      url: 'resource/topic/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复主题数据
   * @returns
   */
  recoverys (data) {
    return request({
      url: 'resource/topic/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除主题
   * @returns
   */
  realDeletes (data) {
    return request({
      url: 'resource/topic/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改主题数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'resource/topic/changeStatus',
      method: 'put',
      data
    })
  },

  /**
    * 主题导入
    * @returns
    */
  importExcel (data = {}) {
    return request({
      url: 'resource/topic/import',
      method: 'post',
      data
    })
  },

  /**
   * 主题下载模板
   * @returns
   */
  downloadTemplate () {
    return request({
      url: 'resource/topic/downloadTemplate',
      method: 'post',
      responseType: 'blob'
    })
  },

  /**
   * 主题导出
   * @returns
   */
  exportExcel (params = {}) {
    return request({
      url: 'resource/topic/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },


}