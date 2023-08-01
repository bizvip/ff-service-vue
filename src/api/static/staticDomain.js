import { request } from '@/utils/request.js'

/**
 * 站点域名管理 API JS
 */

export default {

  /**
   * 获取站点域名管理分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'static/domain/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加站点域名管理
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'static/domain/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新站点域名管理数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'static/domain/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取站点域名管理
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'static/domain/read',
      method: 'get',
      data
    })
  },

  /**
   * 将站点域名管理删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'static/domain/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 从回收站获取站点域名管理数据列表
   * @returns
   */
  getRecycleList (params = {}) {
    return request({
      url: 'static/domain/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复站点域名管理数据
   * @returns
   */
  recoverys (data) {
    return request({
      url: 'static/domain/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除站点域名管理
   * @returns
   */
  realDeletes (data) {
    return request({
      url: 'static/domain/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改站点域名管理数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'static/domain/changeStatus',
      method: 'put',
      data
    })
  },

  /**
    * 站点域名管理导入
    * @returns
    */
  importExcel (data = {}) {
    return request({
      url: 'static/domain/import',
      method: 'post',
      data
    })
  },

  /**
   * 站点域名管理下载模板
   * @returns
   */
  downloadTemplate () {
    return request({
      url: 'static/domain/downloadTemplate',
      method: 'post',
      responseType: 'blob'
    })
  },

  /**
   * 站点域名管理导出
   * @returns
   */
  exportExcel (params = {}) {
    return request({
      url: 'static/domain/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },


}