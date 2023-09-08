import { request } from '@/utils/request.js'

/**
 * 图片 API JS
 */

export default {

  /**
   * 获取图片分页列表
   * @returns
   */
  getList (params = {}) {
    return request({
      url: 'resource/topicPic/index',
      method: 'get',
      params
    })
  },

  /**
   * 添加图片
   * @returns
   */
  save (data = {}) {
    return request({
      url: 'resource/topicPic/save',
      method: 'post',
      data
    })
  },

  /**
   * 更新图片数据
   * @returns
   */
  update (id, data = {}) {
    return request({
      url: 'resource/topicPic/update/' + id,
      method: 'put',
      data
    })
  },

  /**
   * 读取图片
   * @returns
   */
  read (data = {}) {
    return request({
      url: 'resource/topicPic/read',
      method: 'get',
      data
    })
  },

  /**
   * 将图片删除，有软删除则移动到回收站
   * @returns
   */
  deletes (data) {
    return request({
      url: 'resource/topicPic/delete',
      method: 'delete',
      data
    })
  },

  /**
   * 从回收站获取图片数据列表
   * @returns
   */
  getRecycleList (params = {}) {
    return request({
      url: 'resource/topicPic/recycle',
      method: 'get',
      params
    })
  },

  /**
   * 恢复图片数据
   * @returns
   */
  recoverys (data) {
    return request({
      url: 'resource/topicPic/recovery',
      method: 'put',
      data
    })
  },

  /**
   * 真实删除图片
   * @returns
   */
  realDeletes (data) {
    return request({
      url: 'resource/topicPic/realDelete',
      method: 'delete',
      data
    })
  },

  /**
   * 更改图片数据
   * @returns
   */
  changeStatus (data = {}) {
    return request({
      url: 'resource/topicPic/changeStatus',
      method: 'put',
      data
    })
  },


}