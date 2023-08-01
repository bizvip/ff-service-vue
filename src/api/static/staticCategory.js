import {request} from '@/utils/request.js'

/**
 * 分类管理 API JS
 */

export default {

  /**
   * 获取分类管理分页列表
   * @returns
   */
  getList(params = {}) {
    return request({
      url: 'static/category/index',
      method: 'get',
      params
    })
  },

  getDict() {
    return request({url: 'static/category/dict', method: 'get',})
  },

  /**
   * 添加分类管理
   * @returns
   */
  save(data = {}) {
    return request({
      url: 'static/category/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新分类管理数据
   * @returns
   */
  update(id, data = {}) {
    return request({
      url: 'static/category/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取分类管理
   * @returns
   */
  read(data = {}) {
    return request({
      url: 'static/category/read',
      method: 'get',
      data
    })
  },

  /**
   * 将分类管理删除，有软删除则移动到回收站
   * @returns
   */
  deletes(data) {
    return request({
      url: 'static/category/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 从回收站获取分类管理数据列表
   * @returns
   */
  getRecycleList(params = {}) {
    return request({
      url: 'static/category/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复分类管理数据
   * @returns
   */
  recoverys(data) {
    return request({
      url: 'static/category/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除分类管理
   * @returns
   */
  realDeletes(data) {
    return request({
      url: 'static/category/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改分类管理数据
   * @returns
   */
  changeStatus(data = {}) {
    return request({
      url: 'static/category/changeStatus',
      method: 'put',
      data
    })
  },


}