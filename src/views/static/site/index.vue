<template>
  <div>
    <a-alert type="warning">
      <template #title>警告！Warning!</template>
      不熟悉本功能请勿操作！
      <a-typography-text bold>慎重禁用站点</a-typography-text>
    </a-alert>
    <div class="ma-content-block lg:flex justify-between p-4">
      <ma-crud :options="options" :columns="columns" ref="crudRef">
        <template #is_enabled="{ record }">
          <a-switch
            :default-checked="parseInt(record.is_enabled) === 1"
            checked-text="开"
            unchecked-text="关" checked-value="1"
            unchecked-value="0"
            @change="updateValue($event, record.id,'is_enabled')"/>
        </template>
        <template #operationBeforeExtend="{ record }">
          <a-link>
            <icon-link/>
            <a :href="record.url" target="_blank">访问</a>
          </a-link>
        </template>
      </ma-crud>
    </div>
  </div>
</template>

<script setup>
import {reactive, ref} from 'vue'
import staticSite from '@/api/static/staticSite'
import {Message} from '@arco-design/web-vue'

const crudRef = ref()

const switchStatus = (statusValue, id, statusName) => {
  staticSite.changeStatus({
    id,
    statusName,
    statusValue
  }).then(res => {
    res.success && Message.success(res.message)
  }).catch(e => {
    console.log(e)
  })
}


const options = reactive({
  id: 'n_static_site',
  rowSelection: {
    showCheckedAll: true
  },
  pk: 'id',
  operationColumn: true,
  operationWidth: 160,
  formOption: {
    viewType: 'modal',
    width: 800,
    tagId: 'n_static_site',
    tagName: '站点',
    titleDataIndex: 'name'
  },
  api: staticSite.getList,
  recycleApi: staticSite.getRecycleList,
  add: {
    show: true,
    api: staticSite.save,
    auth: ['static:site:save']
  },
  edit: {
    show: true,
    api: staticSite.update,
    auth: ['static:site:update']
  },
  delete: {
    show: true,
    api: staticSite.deletes,
    auth: ['static:site:delete'],
    realApi: staticSite.realDeletes,
    realAuth: ['static:site:realDeletes']
  },
  recovery: {
    show: true,
    api: staticSite.recoverys,
    auth: ['static:site:recovery']
  },
  import: {
    show: true,
    url: 'static/site/import',
    templateUrl: 'static/site/downloadTemplate',
    auth: ['static:site:import']
  },
  export: {
    show: true,
    url: 'static/site/export',
    auth: ['static:site:export']
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
    title: '分类',
    dataIndex: 'category_id',
    formType: 'radio',
    search: true,
    commonRules: {
      required: true,
      message: '请输入所属分类ID'
    },
    dict: {
      url: 'static/category/index',
      method: 'get',
      props: {
        label: 'name',
        value: 'id'
      },
      translation: true,
      openPage: true,
      pageSize: 100,
    },
  },
  {
    title: '站点名字',
    dataIndex: 'name',
    formType: 'input',
    search: true,
    commonRules: {
      required: true,
      message: '请输入站点名字'
    }
  },
  {
    title: '站点标识',
    dataIndex: 'slug',
    formType: 'input',
    search: false,
    hide: true,
  },
  {
    title: '模板名字',
    dataIndex: 'template_name',
    formType: 'select',
    multiple: false,
    hide: true,
    dict: {
      name: 'site-template',
      props: {
        label: 'title',
        value: 'key'
      },
      translation: true
    }
  },
  {
    title: 'API_IP_PORT',
    dataIndex: 'remote_api',
    formType: 'input',
    hide: true,
  },
  {
    title: 'API_KEY',
    dataIndex: 'remote_key',
    formType: 'input',
    hide: true,
  },
  {
    title: '基准网址',
    dataIndex: 'url',
    formType: 'input',
    hide: false,
    commonRules: {
      required: true,
      message: '请输入源站地址'
    },
  },
  {
    title: '是否开启',
    dataIndex: 'is_enabled',
    formType: 'radio',
    search: true,
    commonRules: {
      required: true,
      message: '请输入是否开启'
    },
    dict: {
      name: 'is_enabled',
      props: {
        label: 'title',
        value: 'key'
      },
      translation: true
    }
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
    title: '处理状态',
    dataIndex: 'status',
    formType: 'radio',
    search: true,
    dict: {
      data: [
        {
          label: '正常',
          value: '0'
        },
        {
          label: '下线',
          value: '1'
        },
        {
          label: '维护中',
          value: '2'
        }
      ],
      translation: true
    }
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
    title: '数据权限',
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
  }
])
</script>
<script> export default {name: 'static:site'} </script>