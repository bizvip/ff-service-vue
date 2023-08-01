import { request } from '@/utils/request.js'

/**
 * 渠道链接 API JS
 */

export default {

  /**
   * 获取渠道链接分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'static/channelUrl/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加渠道链接
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'static/channelUrl/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新渠道链接数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'static/channelUrl/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取渠道链接
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'static/channelUrl/read',
      method: 'get',
      data
    })
  },

  /**
   * 将渠道链接删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'static/channelUrl/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改渠道链接数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'static/channelUrl/changeStatus',
      method: 'put',
      data
    })
  },

  /**
    * 渠道链接导入
    * @returns
    */
  importExcel (data = {}) {
    return request({
      url: 'static/channelUrl/import',
      method: 'post',
      data
    })
  },

  /**
   * 渠道链接下载模板
   * @returns
   */
  downloadTemplate () {
    return request({
      url: 'static/channelUrl/downloadTemplate',
      method: 'post',
      responseType: 'blob'
    })
  },

  /**
   * 渠道链接导出
   * @returns
   */
  exportExcel (params = {}) {
    return request({
      url: 'static/channelUrl/export',
      method: 'post',
      responseType: 'blob',
      params
    })
  },


}