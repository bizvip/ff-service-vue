import { request } from '@/utils/request.js'

/**
 * 视频记录 API JS
 */

export default {

  /**
   * 获取视频记录分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'resource/topicVideo/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加视频记录
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'resource/topicVideo/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新视频记录数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'resource/topicVideo/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取视频记录
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'resource/topicVideo/read',
      method: 'get',
      data
    })
  },

  /**
   * 将视频记录删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'resource/topicVideo/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 从回收站获取视频记录数据列表
   * @returns
   */
  getRecycleList (params = {}) {
    return request({
      url: 'resource/topicVideo/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复视频记录数据
   * @returns
   */
  recoverys (data) {
    return request({
      url: 'resource/topicVideo/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除视频记录
   * @returns
   */
  realDeletes (data) {
    return request({
      url: 'resource/topicVideo/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改视频记录数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'resource/topicVideo/changeStatus',
      method: 'put',
      data
    })
  },

  /**
    * 视频记录导入
    * @returns
    */
  importExcel (data = {}) {
    return request({
      url: 'resource/topicVideo/import',
      method: 'post',
      data
    })
  },

  /**
   * 视频记录下载模板
   * @returns
   */
  downloadTemplate () {
    return request({
      url: 'resource/topicVideo/downloadTemplate',
      method: 'post',
      responseType: 'blob'
    })
  },

  /**
   * 视频记录导出
   * @returns
   */
  exportExcel (params = {}) {
    return request({
      url: 'resource/topicVideo/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },


}