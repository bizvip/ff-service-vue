<template>
  <div>
    <a-alert type="info" :show-icon="false">
      <a-space>
        <a-typography-text bold underline>91导航</a-typography-text>
        >
        <a-typography-text bold underline>文本管理</a-typography-text>
        <icon-notification/>
        <a-typography-text> 排序 ：文本排序只有在启用滚动公告等功能时候才有用。</a-typography-text>
        <icon-notification/>
        <a-typography-text>
          重复添加的相同类型文本，如果支持展示多条的，则会按排序展示多条；不支持的，则只会展示最后添加的一条
        </a-typography-text>
      </a-space>
    </a-alert>
    <div class="ma-content-block lg:flex justify-between p-4">
      <ma-crud :options="options" :columns="columns" ref="crudRef">
        <template #is_enabled="{ record }">
          <a-switch :default-checked="parseInt(record.is_enabled) === 1"
                    checked-text="开"
                    unchecked-text="关" checked-value="1"
                    unchecked-value="0"
                    @change="updateValue($event, record.id,'is_enabled')"/>
        </template>
      </ma-crud>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import staticText from '@/api/static/staticText'
import { Message } from '@arco-design/web-vue'

const crudRef = ref()

const siteId = import.meta.env.VITE_APP_DH91_ID

const updateValue = (value, id, name) => {
  staticText.changeStatus({
    id,
    name,
    value,
    siteId
  }).then(res => {
    res.success && Message.success(res.message)
    crudRef.value.refresh()
  }).catch(e => {
    console.log(e)
  })
}


const options = reactive({
  expandSearch: false,
  id: 'n_dh91_text',
  rowSelection: {
    showCheckedAll: true
  },
  pk: 'id',
  operationColumn: true,
  operationWidth: 160,
  formOption: {
    viewType: 'modal',
    width: 900
  },
  api: staticText.getList,
  recycleApi: staticText.getRecycleList,
  add: {
    show: true,
    api: staticText.save,
    auth: ['dh91:text:save']
  },
  edit: {
    show: true,
    api: staticText.update,
    auth: ['dh91:text:update']
  },
  delete: {
    show: true,
    api: staticText.deletes,
    auth: ['dh91:text:delete'],
    realApi: staticText.realDeletes,
    realAuth: ['dh91:text:realDeletes']
  },
  recovery: {
    show: true,
    api: staticText.recoverys,
    auth: ['dh91:text:recovery']
  },
  beforeRequest: (params) => {
    params.orderBy = 'id'
    params.orderType = 'desc'
    params.site_id = siteId
  },
  beforeAdd: (formData) => {
    formData.site_id = siteId
  },
  beforeEdit: (formData) => {
    formData.site_id = siteId
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
    title: '站点',
    dataIndex: 'site_id',
    formType: 'select',
    search: false,
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
    addDefaultValue: siteId,
    editDefaultValue: siteId,
    disabled: true,
    width: 80,
  },
  {
    title: '类型',
    dataIndex: 'type',
    formType: 'radio',
    search: true,
    commonRules: {
      required: true,
      message: '请选择 文本 类型'
    },
    multiple: false,
    dict: {
      name: 'site_text_type',
      props: {
        label: 'title',
        value: 'key'
      },
      translation: true
    },
    extra: '站点名字只能纯文本；所有的统计类代码OpenInstall等，请使用{;}按钮，选择Javascript，插入代码的方式添加'
  },
  {
    title: '所属域名',
    dataIndex: 'domain_id',
    formType: 'select',
    search: true,
    commonRules: {
      required: false,
      message: '请选择 所属域名 (需要先添加可选择的域名到域名管理里面)'
    },
    multiple: true,
    dict: {
      url: 'static/domain/dict?is_enabled=1&site_id=' + siteId,
      props: {
        label: 'domain',
        value: 'id'
      },
      translation: true
    },
    extra: '不选则为*全部生效。选择则只会在对应域名访问的时候生效。可多选可单选',
    addDefaultValue: [],
    width: 200
  },
  {
    title: '内容',
    dataIndex: 'content',
    formType: 'editor',
    commonRules: {
      required: true,
      message: '请输入内容'
    },
    height: 300,
    width: 200
  },
  {
    title: '图片',
    dataIndex: 'img_src',
    formType: 'upload',
    multiple: false,
    onlyData: false,
    onlyUrl: false,
    chunk: false,
    type: 'image',
    hide: true,
    display: false,
  },
  {
    title: '开始时间',
    dataIndex: 'begin_time',
    formType: 'date',
    search: true,
    showTime: true,
    range: false
  },
  {
    title: '结束时间',
    dataIndex: 'end_time',
    formType: 'date',
    search: true,
    showTime: true,
    range: false
  },
  {
    title: '链接',
    dataIndex: 'link',
    formType: 'input',
    hide: false,
    addDefaultValue: '',
    commonRules: {
      required: false,
      message: '链接不可以有空格，必须以http或者https开头',
      match: /^(http|https):\/\/[^\s$.?#].[^\s]*$/
    },
  },
  {
    title: '排序(小->大)',
    dataIndex: 'sort',
    formType: 'input-number',
    min: 0,
    max: 65534,
    step: 1,
    addDefaultValue: 65534,
    hide: true,
    display: true,
    width: 70
  },
  {
    title: '开关',
    dataIndex: 'is_enabled',
    formType: 'radio',
    search: true,
    commonRules: {
      required: true,
      message: '请选择是否启用'
    },
    dict: {
      name: 'is_enabled',
      props: {
        label: 'title',
        value: 'key'
      },
      translation: true
    },
    width: 70,
    addDefaultValue: 1
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
<script> export default { name: 'dh91:text' } </script>
