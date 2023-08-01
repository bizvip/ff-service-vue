<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import staticChannelUrl from '@/api/static/staticChannelUrl'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()

const switchStatus = (statusValue, id, statusName) => {
  staticChannelUrl.changeStatus({
    id,
    statusName,
    statusValue
  }).then(res => {
    res.success && Message.success(res.message)
    crudRef.value.refresh()
  }).catch(e => { console.log(e) })
}

const options = reactive({
  id: 'n_static_channel_url',
  rowSelection: {
    showCheckedAll: true
  },
  pk: 'id',
  operationColumn: true,
  operationWidth: 160,
  formOption: {
    viewType: 'drawer',
    width: 600
  },
  api: staticChannelUrl.getList,
  add: {
    show: true,
    api: staticChannelUrl.save,
    auth: ['static:channelUrl:save']
  },
  edit: {
    show: true,
    api: staticChannelUrl.update,
    auth: ['static:channelUrl:update']
  },
  delete: {
    show: true,
    api: staticChannelUrl.deletes,
    auth: ['static:channelUrl:delete']
  },
  import: {
    show: true,
    url: 'static/channelUrl/import',
    templateUrl: 'static/channelUrl/downloadTemplate',
    auth: ['static:channelUrl:import']
  },
  export: {
    show: true,
    url: 'static/channelUrl/export',
    auth: ['static:channelUrl:export']
  }
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
    title: '上线日期',
    dataIndex: 'date',
    formType: 'date',
    search: true,
    commonRules: {
      required: true,
      message: '请输入域名上线日期'
    },
    showTime: false,
    range: false
  },
  {
    title: '站点',
    dataIndex: 'site_id',
    formType: 'select',
    search: true,
    dict: {
      url: 'static/site/dict',
      props: {
        label: 'name',
        value: 'id'
      },
      translation: true
    },
    multiple: false,
    hide: true,
    addDisplay: false,
    editDisplay: false,
    disabled: true,
    width: 90,
  },
  {
    title: '运营名字',
    dataIndex: 'staff_name',
    formType: 'select',
    search: true,
    commonRules: {
      required: true,
      message: '请输入运营名字（与统计站点名字一致）'
    },
    multiple: false
  },
  {
    title: '渠道链接',
    dataIndex: 'channel_url',
    formType: 'input',
    search: true,
    commonRules: {
      required: true,
      message: '请输入渠道链接'
    },
    width: 250
  },
  {
    title: '统计元数据',
    dataIndex: 'analysis_meta',
    formType: 'input',
    search: false,
    width: 200
  },
  {
    title: '创建时间(远程)',
    dataIndex: 'created_at',
    formType: 'date',
    addDisplay: false,
    editDisplay: false,
    hide: false,
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
  }
])
</script>
<script> export default { name: 'static:channelUrl' } </script>