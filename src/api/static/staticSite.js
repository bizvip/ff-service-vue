import { request } from '@/utils/request.js'

/**
 * 站点管理 API JS
 */

export default {

  /**
   * 获取站点管理分页列表
   * @returns
   */
  getList(params = {}) {
    return request({
      url: 'static/site/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加站点管理
   * @returns
   */
  save(data = {}) {
    return request({
      url: 'static/site/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新站点管理数据
   * @returns
   */
  update(id, data = {}) {
    return request({
      url: 'static/site/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取站点管理
   * @returns
   */
  read(data = {}) {
    return request({
      url: 'static/site/read',
      method: 'get',
      data
    })
  },

  /**
   * 将站点管理删除，有软删除则移动到回收站
   * @returns
   */
  deletes(data) {
    return request({
      url: 'static/site/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 从回收站获取站点管理数据列表
   * @returns
   */
  getRecycleList(params = {}) {
    return request({
      url: 'static/site/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复站点管理数据
   * @returns
   */
  recoverys(data) {
    return request({
      url: 'static/site/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除站点管理
   * @returns
   */
  realDeletes(data) {
    return request({
      url: 'static/site/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改站点管理数据
   * @returns
   */
  changeStatus(data = {}) {
    return request({
      url: 'static/site/changeStatus',
      method: 'put',
      data
    })
  },

  /**
   * 站点管理导入
   * @returns
   */
  importExcel(data = {}) {
    return request({
      url: 'static/site/import',
      method: 'post',
      data
    })
  },

  /**
   * 站点管理下载模板
   * @returns
   */
  downloadTemplate() {
    return request({
      url: 'static/site/downloadTemplate',
      method: 'post',
      responseType: 'blob'
    })
  },

  /**
   * 站点管理导出
   * @returns
   */
  exportExcel(params = {}) {
    return request({
      url: 'static/site/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },
}
