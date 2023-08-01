<template>
  <div>
    <a-alert type="info" :show-icon="false">
      <a-space>
        <a-typography-text bold underline>91导航</a-typography-text>
        >
        <a-typography-text bold underline>首页分类</a-typography-text>
        <a-typography-text>排序为0的将设置为激活状态（即打开首页默认展示的分类）</a-typography-text>
      </a-space>
    </a-alert>
    <div class="ma-content-block lg:flex justify-between p-4">
      <ma-crud :options="options" :columns="columns" ref="crudRef">
        <template #sort="{record}">
          <a-input-number
              mode="button"
              v-model="record.sort"
              @change="updateValue($event, record.id,'sort')"
              :min="0"
              :max="65534"
          />
        </template>
      </ma-crud>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import staticIndexCategory from '@/api/static/staticIndexCategory'
import { Message } from '@arco-design/web-vue'

const crudRef = ref()

const siteId = import.meta.env.VITE_APP_DH91_ID

const updateValue = (value, id, name) => {
  staticIndexCategory.changeStatus({
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
  id: 'n_dh91_index_category',
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
  api: staticIndexCategory.getList,
  recycleApi: staticIndexCategory.getRecycleList,
  add: {
    show: true,
    api: staticIndexCategory.save,
    auth: ['dh91:indexCategory:save']
  },
  edit: {
    show: true,
    api: staticIndexCategory.update,
    auth: ['dh91:indexCategory:update']
  },
  delete: {
    show: true,
    api: staticIndexCategory.deletes,
    auth: ['dh91:indexCategory:delete'],
    realApi: staticIndexCategory.realDeletes,
    realAuth: ['dh91:indexCategory:realDeletes']
  },
  recovery: {
    show: true,
    api: staticIndexCategory.recoverys,
    auth: ['dh91:indexCategory:recovery']
  },
  beforeRequest: (params) => {
    params.orderBy = 'sort'
    params.orderType = 'asc'
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
    hide: false,
    sortable: {
      sortDirections: [
        'ascend',
        'descend'
      ],
      sorter: true
    }
  },
  {
    title: '分类名字',
    dataIndex: 'name',
    formType: 'input',
    search: true,
    commonRules: {
      required: true,
      message: '请输入分类名字'
    }
  },
  {
    title: '分类标识',
    dataIndex: 'slug',
    formType: 'input',
    search: true,
    commonRules: {
      required: true,
      message: '请输入分类标识'
    }
  },
  {
    title: '分类排序',
    dataIndex: 'sort',
    formType: 'input-number',
    sortable: {
      sortDirections: [
        'ascend',
        'descend'
      ],
      sorter: true
    },
    min: 0,
    max: 65534,
    step: 1
  },
  {
    title: '点击统计',
    dataIndex: 'click_count',
    formType: 'input-number',
    sortable: {
      sortDirections: [
        'ascend',
        'descend'
      ],
      sorter: true
    },
    min: 0,
    max: 4200000000
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
  }
])
</script>
<script> export default { name: 'dh91:indexCategory' } </script>