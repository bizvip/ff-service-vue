<template>
    <div class="ma-content-block lg:flex justify-between p-4">
        <ma-crud :options="options" :columns="columns" ref="crudRef">
        </ma-crud>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import staticCategory from '@/api/static/staticCategory'
import { Message } from '@arco-design/web-vue'

const crudRef = ref()

const switchStatus = (statusValue, id, statusName) => {
  staticCategory.changeStatus({
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
  expandSearch: false,
  id: 'n_static_category',
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
  api: staticCategory.getList,
  recycleApi: staticCategory.getRecycleList,
  add: {
    show: true,
    api: staticCategory.save,
    auth: ['static:category:save']
  },
  edit: {
    show: true,
    api: staticCategory.update,
    auth: ['static:category:update']
  },
  delete: {
    show: true,
    api: staticCategory.deletes,
    auth: ['static:category:delete'],
    realApi: staticCategory.realDeletes,
    realAuth: ['static:category:realDeletes']
  },
  recovery: {
    show: true,
    api: staticCategory.recoverys,
    auth: ['static:category:recovery']
  }
})

const columns = reactive([
  {
    title: 'ID',
    dataIndex: 'id',
    formType: 'input-number',
    search: true,
    addDisplay: false,
    editDisplay: false,
    hide: false
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
    title: '数据权限',
    dataIndex: 'created_by',
    formType: 'input',
    addDisplay: false,
    editDisplay: false,
    hide: true
  }
])
</script>
<script> export default { name: 'static:category' } </script>