import {request} from '@/utils/request.js'

/**
 * 广告图比例 API JS
 */

export default {

  /**
   * 获取广告图比例分页列表
   * @returns
   */
  getList(params = {}) {
    return request({
      url: 'static/imageSize/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加广告图比例
   * @returns
   */
  save(data = {}) {
    return request({
      url: 'static/imageSize/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新广告图比例数据
   * @returns
   */
  update(id, data = {}) {
    return request({
      url: 'static/imageSize/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取广告图比例
   * @returns
   */
  read(data = {}) {
    return request({
      url: 'static/imageSize/read',
      method: 'get',
      data
    })
  },

  /**
   * 将广告图比例删除，有软删除则移动到回收站
   * @returns
   */
  deletes(data) {
    return request({
      url: 'static/imageSize/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 从回收站获取广告图比例数据列表
   * @returns
   */
  getRecycleList(params = {}) {
    return request({
      url: 'static/imageSize/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复广告图比例数据
   * @returns
   */
  recoverys(data) {
    return request({
      url: 'static/imageSize/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除广告图比例
   * @returns
   */
  realDeletes(data) {
    return request({
      url: 'static/imageSize/realDelete',
      method: 'delete',
      data
    })
  },

  syncImages() {
    return request({url: 'static/imageSize/sync', method: 'post'})
  },

}