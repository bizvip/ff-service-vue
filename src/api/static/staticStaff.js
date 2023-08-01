import {request} from '@/utils/request.js'

/**
 * 运营人员 API JS
 */

export default {

  /**
   * 获取运营人员分页列表
   * @returns
   */
  getList(params = {}) {
    return request({
      url: 'static/staff/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加运营人员
   * @returns
   */
  save(data = {}) {
    return request({
      url: 'static/staff/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新运营人员数据
   * @returns
   */
  update(id, data = {}) {
    return request({
      url: 'static/staff/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取运营人员
   * @returns
   */
  read(data = {}) {
    return request({
      url: 'static/staff/read',
      method: 'get',
      data
    })
  },

  /**
   * 将运营人员删除，有软删除则移动到回收站
   * @returns
   */
  deletes(data) {
    return request({
      url: 'static/staff/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 从回收站获取运营人员数据列表
   * @returns
   */
  getRecycleList(params = {}) {
    return request({
      url: 'static/staff/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复运营人员数据
   * @returns
   */
  recoverys(data) {
    return request({
      url: 'static/staff/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除运营人员
   * @returns
   */
  realDeletes(data) {
    return request({
      url: 'static/staff/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改运营人员数据
   * @returns
   */
  changeStatus(data = {}) {
    return request({
      url: 'static/staff/changeStatus',
      method: 'put',
      data
    })
  },

  //
  changeDomain(data = {}) {
    return request({
      url: 'static/staff/changeDomain',
      method: 'put',
      data
    })
  },

}