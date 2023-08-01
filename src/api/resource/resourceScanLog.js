import { request } from '@/utils/request.js'

/**
 * 扫描日志 API JS
 */

export default {

  /**
   * 获取扫描日志分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'resource/scanLog/index',
      method: 'get',
      params
    })
  },

  /**
   * 读取扫描日志
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'resource/scanLog/read',
      method: 'get',
      data
    })
  },

  /**
   * 更新扫描日志数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'resource/scanLog/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 将扫描日志删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'resource/scanLog/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 从回收站获取扫描日志数据列表
   * @returns
   */
  getRecycleList (params = {}) {
    return request({
      url: 'resource/scanLog/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复扫描日志数据
   * @returns
   */
  recoverys (data) {
    return request({
      url: 'resource/scanLog/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除扫描日志
   * @returns
   */
  realDeletes (data) {
    return request({
      url: 'resource/scanLog/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改扫描日志数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'resource/scanLog/changeStatus',
      method: 'put',
      data
    })
  },

  /**
    * 扫描日志导入
    * @returns
    */
  importExcel (data = {}) {
    return request({
      url: 'resource/scanLog/import',
      method: 'post',
      data
    })
  },

  /**
   * 扫描日志下载模板
   * @returns
   */
  downloadTemplate () {
    return request({
      url: 'resource/scanLog/downloadTemplate',
      method: 'post',
      responseType: 'blob'
    })
  },

  /**
   * 扫描日志导出
   * @returns
   */
  exportExcel (params = {}) {
    return request({
      url: 'resource/scanLog/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },


}