import { request } from '@/utils/request.js'

/**
 * 演员 API JS
 */

export default {

  /**
   * 获取演员分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'resource/actor/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加演员
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'resource/actor/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新演员数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'resource/actor/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取演员
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'resource/actor/read',
      method: 'get',
      data
    })
  },

  /**
   * 将演员删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'resource/actor/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 从回收站获取演员数据列表
   * @returns
   */
  getRecycleList (params = {}) {
    return request({
      url: 'resource/actor/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复演员数据
   * @returns
   */
  recoverys (data) {
    return request({
      url: 'resource/actor/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除演员
   * @returns
   */
  realDeletes (data) {
    return request({
      url: 'resource/actor/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改演员数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'resource/actor/changeStatus',
      method: 'put',
      data
    })
  },

  /**
    * 演员导入
    * @returns
    */
  importExcel (data = {}) {
    return request({
      url: 'resource/actor/import',
      method: 'post',
      data
    })
  },

  /**
   * 演员下载模板
   * @returns
   */
  downloadTemplate () {
    return request({
      url: 'resource/actor/downloadTemplate',
      method: 'post',
      responseType: 'blob'
    })
  },

  /**
   * 演员导出
   * @returns
   */
  exportExcel (params = {}) {
    return request({
      url: 'resource/actor/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },


}