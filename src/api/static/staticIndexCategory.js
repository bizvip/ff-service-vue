import { request } from '@/utils/request.js'

/**
 * 首页分类 API JS
 */

export default {

  /**
   * 获取首页分类分页列表
   * @returns
   */
  getList(params = {}) {
    return request({
      url: 'static/indexCategory/index',
      method: 'get',
      params
    })
  },

  getDict() {
    return request({
      url: 'static/indexCategory/dict',
      method: 'get',
    })
  },

  /**
   * 添加首页分类
   * @returns
   */
  save(data = {}) {
    return request({
      url: 'static/indexCategory/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新首页分类数据
   * @returns
   */
  update(id, data = {}) {
    return request({
      url: 'static/indexCategory/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取首页分类
   * @returns
   */
  read(data = {}) {
    return request({
      url: 'static/indexCategory/read',
      method: 'get',
      data
    })
  },

  /**
   * 将首页分类删除，有软删除则移动到回收站
   * @returns
   */
  deletes(data) {
    return request({
      url: 'static/indexCategory/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 从回收站获取首页分类数据列表
   * @returns
   */
  getRecycleList(params = {}) {
    return request({
      url: 'static/indexCategory/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复首页分类数据
   * @returns
   */
  recoverys(data) {
    return request({
      url: 'static/indexCategory/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除首页分类
   * @returns
   */
  realDeletes(data) {
    return request({
      url: 'static/indexCategory/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改首页分类数据
   * @returns
   */
  changeStatus(data = {}) {
    return request({
      url: 'static/indexCategory/changeStatus',
      method: 'put',
      data
    })
  },


}