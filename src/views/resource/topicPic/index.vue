<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <ma-crud :options="options" :columns="columns" ref="crudRef">
    </ma-crud>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import resourceTopicPic from '@/api/resource/resourceTopicPic'
import { Message } from '@arco-design/web-vue'
import tool from '@/utils/tool'
import * as common from '@/utils/common'

const crudRef = ref()



const switchStatus = (statusValue, id, statusName) => {
  resourceTopicPic.changeStatus({ id, statusName, statusValue }).then( res => {
    res.success && Message.success(res.message)
    crudRef.value.refresh()
  }).catch( e => { console.log(e) } )
}


const options = reactive({
  id: 'ffs_resource_topic_pic',
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
  api: resourceTopicPic.getList,
  recycleApi: resourceTopicPic.getRecycleList,
  add: {
    show: true,
    api: resourceTopicPic.save,
    auth: ['resource:topicPic:save']
  },
  edit: {
    show: true,
    api: resourceTopicPic.update,
    auth: ['resource:topicPic:update']
  },
  delete: {
    show: true,
    api: resourceTopicPic.deletes,
    auth: ['resource:topicPic:delete'],
    realApi: resourceTopicPic.realDeletes,
    realAuth: ['resource:topicPic:realDeletes']
  },
  recovery: {
    show: true,
    api: resourceTopicPic.recoverys,
    auth: ['resource:topicPic:recovery']
  }
})

const columns = reactive([
  {
    title: "ID",
    dataIndex: "id",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    commonRules: {
      required: true,
      message: "请输入ID"
    }
  },
  {
    title: "主题ID",
    dataIndex: "topic_id",
    formType: "input-number",
    search: true,
    hide: true,
    commonRules: {
      required: true,
      message: "请输入主题ID"
    }
  },
  {
    title: "原始文件名",
    dataIndex: "origin_name",
    formType: "input",
    search: true,
    addDisplay: false,
    editDisplay: false,
    commonRules: {
      required: true,
      message: "请输入原始文件名"
    }
  },
  {
    title: "原始文件扩展名",
    dataIndex: "origin_ext",
    formType: "input",
    hide: true,
    commonRules: {
      required: true,
      message: "请输入原始文件扩展名"
    }
  },
  {
    title: "存储对象名",
    dataIndex: "obj_name",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    commonRules: {
      required: true,
      message: "请输入存储对象名"
    }
  },
  {
    title: "存储对象路径",
    dataIndex: "obj_path",
    formType: "input",
    search: true,
    hide: true,
    commonRules: {
      required: true,
      message: "请输入存储对象路径"
    }
  },
  {
    title: "存储扩展名",
    dataIndex: "obj_ext",
    formType: "input",
    hide: true,
    commonRules: {
      required: true,
      message: "请输入存储扩展名"
    }
  },
  {
    title: "宽度",
    dataIndex: "width",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入宽度"
    }
  },
  {
    title: "高度",
    dataIndex: "height",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入高度"
    }
  },
  {
    title: "文件大小",
    dataIndex: "size",
    formType: "input",
    commonRules: {
      required: true,
      message: "请输入文件大小"
    }
  },
  {
    title: "分辨率(宽,高)",
    dataIndex: "resolution",
    formType: "input",
    hide: true,
    commonRules: {
      required: true,
      message: "请输入分辨率(宽,高)"
    }
  },
  {
    title: "原始资源ID",
    dataIndex: "resource_id",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入原始资源ID"
    }
  },
  {
    title: "主题排序",
    dataIndex: "topic_sort",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入主题排序"
    }
  },
  {
    title: "集合排序",
    dataIndex: "set_sort",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入集合排序"
    }
  },
  {
    title: "创建时间",
    dataIndex: "created_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: "更新时间",
    dataIndex: "updated_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: "删除时间",
    dataIndex: "deleted_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: "创建者",
    dataIndex: "created_by",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true
  },
  {
    title: "更新者",
    dataIndex: "updated_by",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true
  }
])
</script>
<script> export default { name: 'resource:topicPic' } </script>