<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import resourceScanLog from '@/api/resource/resourceScanLog'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()

const switchStatus = (statusValue, id, statusName) => {
  resourceScanLog.changeStatus({
    id,
    statusName,
    statusValue
  }).then(res => {
    res.success && Message.success(res.message)
    crudRef.value.refresh()
  }).catch(e => { console.log(e) })
}

const options = reactive({
  id: 'ffs_resource_scan_log',
  rowSelection: {
    showCheckedAll: true
  },
  pk: 'id',
  operationColumn: true,
  operationWidth: 160,
  formOption: {
    viewType: 'modal',
    width: 600
  },
  api: resourceScanLog.getList,
  recycleApi: resourceScanLog.getRecycleList,
  edit: {
    show: true,
    api: resourceScanLog.update,
    auth: ['resource:scanLog:update']
  },
  delete: {
    show: true,
    api: resourceScanLog.deletes,
    auth: ['resource:scanLog:delete'],
    realApi: resourceScanLog.realDeletes,
    realAuth: ['resource:scanLog:realDeletes']
  },
  recovery: {
    show: true,
    api: resourceScanLog.recoverys,
    auth: ['resource:scanLog:recovery']
  },
  import: {
    show: true,
    url: 'resource/scanLog/import',
    templateUrl: 'resource/scanLog/downloadTemplate',
    auth: ['resource:scanLog:import']
  },
  export: {
    show: true,
    url: 'resource/scanLog/export',
    auth: ['resource:scanLog:export']
  },
  beforeRequest: (params) => {
    params.orderBy = 'id'
    params.orderType = 'desc'
  },
})

const columns = reactive([
  {
    title: 'ID',
    dataIndex: 'id',
    formType: 'input',
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: '最后修改时间',
    dataIndex: 'm_time',
    formType: 'input',
    commonRules: {
      required: true,
      message: '请输入最后修改时间'
    },
  },
  {
    title: '硬盘创建时间',
    dataIndex: 'c_time',
    formType: 'range',
    commonRules: {
      required: true,
      message: '请输入硬盘创建时间'
    },
    showTime: true,
    width: 110
  },
  {
    title: '初始文件名',
    dataIndex: 'file_name',
    formType: 'input',
    search: true,
    commonRules: {
      required: true,
      message: '请输入初始文件名'
    },
    type: 'file',
    multiple: false,
    width: 300
  },
  {
    title: '文件扩展名',
    dataIndex: 'file_ext',
    formType: 'input',
    search: true,
    commonRules: {
      required: true,
      message: '请输入文件扩展名'
    },
    type: 'file',
    multiple: false,
  },
  {
    title: '文件大小',
    dataIndex: 'file_size',
    formType: 'input-number',
    search: true,
    commonRules: {
      required: true,
      message: '请输入文件大小'
    },
    type: 'file',
    multiple: false,
    min: 1,
    max: 4200000000,
    step: 1
  },
  {
    title: '原始真实存储路径',
    dataIndex: 'real_path',
    formType: 'input',
    commonRules: {
      required: true,
      message: '请输入原始真实存储路径'
    }
  },
  {
    title: '文件是否合法',
    dataIndex: 'is_legal',
    formType: 'radio',
    search: true,
    commonRules: {
      required: true,
      message: '请输入文件是否合法'
    },
    dict: {
      name: 'yes_no',
      props: {
        label: 'title',
        value: 'key'
      },
      translation: true
    }
  },
  {
    title: '不合法的原因',
    dataIndex: 'illegal_reason',
    formType: 'input',
    commonRules: {
      required: true,
      message: '请输入不合法的原因'
    },
    width: 150
  },
  {
    title: '状态',
    dataIndex: 'status',
    formType: 'radio',
    search: true,
    commonRules: {
      required: true,
      message: '请输入状态'
    },
    dict: {
      name: 'resource_status',
      props: {
        label: 'title',
        value: 'key'
      },
      translation: true
    }
  },
  {
    title: '创建者',
    dataIndex: 'created_by',
    formType: 'input',
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: '更新者',
    dataIndex: 'updated_by',
    formType: 'input',
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    formType: 'date',
    addDisplay: false,
    editDisplay: false,
    hide: true,
    showTime: true
  },
  {
    title: '更新时间',
    dataIndex: 'updated_at',
    formType: 'date',
    addDisplay: false,
    editDisplay: false,
    hide: true,
    showTime: true
  },
  {
    title: '删除时间',
    dataIndex: 'deleted_at',
    formType: 'date',
    addDisplay: false,
    editDisplay: false,
    hide: true,
    showTime: true
  }
])
</script>
<script> export default { name: 'resource:scanLog' } </script>