<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import staticDomain from '@/api/static/staticDomain'
import { Message } from '@arco-design/web-vue'
import staticStaff from '@/api/static/staticStaff'

const crudRef = ref()

const switchStatus = (statusValue, id, statusName) => {
  staticDomain.changeStatus({
    id,
    statusName,
    statusValue
  }).then(res => {
    res.success && Message.success(res.message)
    crudRef.value.refresh()
  }).catch(e => {
    console.log(e)
  })
}

const options = reactive({
  id: 'n_static_domain',
  pageSize: 20,
  pageSizeOption: [
    20,
    500
  ],
  rowSelection: {
    showCheckedAll: true
  },
  pk: 'id',
  operationColumn: true,
  operationWidth: 120,
  operationColumnWidth: 120,
  formOption: {
    viewType: 'modal',
    isFull: true,
  },
  api: staticDomain.getList,
  recycleApi: staticDomain.getRecycleList,
  add: {
    show: true,
    api: staticDomain.save,
    auth: ['static:domain:save']
  },
  edit: {
    show: true,
    api: staticDomain.update,
    auth: ['static:domain:update']
  },
  delete: {
    show: true,
    api: staticDomain.deletes,
    auth: ['static:domain:delete'],
    realApi: staticDomain.realDeletes,
    realAuth: ['static:domain:realDeletes']
  },
  recovery: {
    show: true,
    api: staticDomain.recoverys,
    auth: ['static:domain:recovery']
  },
  import: {
    show: true,
    url: 'static/domain/import',
    templateUrl: 'static/domain/downloadTemplate',
    auth: ['static:domain:import']
  },
  export: {
    show: true,
    url: 'static/domain/export',
    auth: ['static:domain:export']
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
    hide: false,
    commonRules: {
      required: true,
      message: '请输入ID'
    },
    sortable: {
      sortDirections: [
        'ascend',
        'descend'
      ],
      sorter: true
    },
    width: 70
  },
  {
    title: '站点',
    dataIndex: 'site_id',
    formType: 'select',
    hide: false,
    search: true,
    commonRules: {
      required: true,
      message: '请选择站点'
    },
    dict: {
      url: 'static/site/dict',
      props: {
        label: 'name',
        value: 'id'
      },
      translation: true
    },
    min: 1,
    width: 100,
  },
  {
    title: '域名',
    dataIndex: 'domain',
    formType: 'input',
    addDisplay: false,
    editDisplay: false,
    hide: false,
    commonRules: {
      required: true,
      message: '请输入域名'
    },
    sortable: {
      sortDirections: [
        'ascend',
        'descend'
      ],
      sorter: true
    },
    width: 100,
    search: true
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
      name: 'domain_state',
      props: {
        label: 'title',
        value: 'key'
      },
      translation: true
    },
    sortable: {
      sortDirections: [
        'ascend',
        'descend'
      ],
      sorter: true
    },
    width: 100,
  },
  {
    title: '上线时间',
    dataIndex: 'up_time',
    formType: 'date',
    addDisplay: false,
    editDisplay: false,
    hide: false,
    commonRules: {
      required: false,
      message: '请输入创建时间'
    },
    showTime: true
  },
  {
    title: '换掉时间',
    dataIndex: 'down_time',
    formType: 'date',
    addDisplay: false,
    editDisplay: false,
    hide: false,
    commonRules: {
      required: false,
      message: '请输入创建时间'
    },
    showTime: true
  },
  {
    title: '跳转目标',
    dataIndex: 'redirect',
    formType: 'input',
    search: true,
    commonRules: {
      required: false,
      message: '请输入跳转目标'
    },
    addDefaultValue: ''
  },
  {
    title: '运营名字',
    dataIndex: 'belongs',
    formType: 'select',
    search: true,
    commonRules: {
      required: true,
      message: '请输入运营名字'
    },
    sortable: {
      sortDirections: [
        'ascend',
        'descend'
      ],
      sorter: true
    },
    dict: {
      url: 'static/staff/index',
      method: 'get',
      props: {
        label: 'name',
        value: 'name'
      },
      translation: false,
      openPage: true,
      pageSize: 50,
    },
  },
  {
    title: 'CDN服务',
    dataIndex: 'cdn',
    formType: 'radio',
    search: true,
    commonRules: {
      required: true,
      message: '请输入cdn服务商'
    },
    dict: {
      name: 'cdn_provider',
      props: {
        label: 'title',
        value: 'key'
      },
      translation: true
    },
    sortable: {
      sortDirections: [
        'ascend',
        'descend'
      ],
      sorter: true
    },
    addDefaultValue: 'ud'
  },
  {
    title: 'CDN数据',
    dataIndex: 'cdn_json',
    formType: 'code-editor',
    hide: true,
    isBind: false,
    height: 120,
    readonly: true,
    disabled: true,
  },
  {
    title: 'DNS服务',
    dataIndex: 'dns',
    formType: 'radio',
    search: true,
    commonRules: {
      required: true,
      message: '请选择dns解析服务商'
    },
    dict: {
      name: 'dns_provider',
      props: {
        label: 'title',
        value: 'key'
      },
      translation: true
    },
    sortable: {
      sortDirections: [
        'ascend',
        'descend'
      ],
      sorter: true
    },
    addDefaultValue: 'dns_la'
  },
  {
    title: 'DNS数据',
    dataIndex: 'dns_json',
    formType: 'code-editor',
    isBind: false,
    height: 120,
    hide: true,
    readonly: true,
    disabled: true,
  },
  {
    title: '域名注册信息',
    dataIndex: 'register_json',
    formType: 'code-editor',
    hide: true,
    height: 120,
    isBind: false,
  },
  {
    title: '创建者',
    dataIndex: 'created_by',
    formType: 'input',
    addDisplay: false,
    editDisplay: false,
    hide: true,
    commonRules: {
      required: true,
      message: '请输入创建者'
    }
  },
  {
    title: '更新者',
    dataIndex: 'updated_by',
    formType: 'input',
    addDisplay: false,
    editDisplay: false,
    hide: true,
    commonRules: {
      required: true,
      message: '请输入更新者'
    }
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    formType: 'date',
    addDisplay: false,
    editDisplay: false,
    hide: true,
    commonRules: {
      required: true,
      message: '请输入创建时间'
    },
    showTime: true
  },
  {
    title: '更新时间',
    dataIndex: 'updated_at',
    formType: 'date',
    addDisplay: false,
    editDisplay: true,
    readonly: true,
    disabled: true,
    hide: true,
    commonRules: {
      required: true,
      message: '请输入更新时间'
    },
    showTime: true,
    sortable: {
      sortDirections: [
        'ascend',
        'descend'
      ],
      sorter: true
    },
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
<script> export default { name: 'static:domain' } </script>