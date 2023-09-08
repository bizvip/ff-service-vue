<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <ma-crud :options="options" :columns="columns" ref="crudRef"> </ma-crud>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import resourceTopic from "@/api/resource/resourceTopic";
import { Message } from "@arco-design/web-vue";

const crudRef = ref();

const switchStatus = (statusValue, id, statusName) => {
  resourceTopic
    .changeStatus({ id, statusName, statusValue })
    .then((res) => {
      res.success && Message.success(res.message);
      crudRef.value.refresh();
    })
    .catch((e) => {
      console.log(e);
    });
};

const options = reactive({
  id: "ffs_resource_topic",
  rowSelection: {
    showCheckedAll: true,
  },
  pk: "id",
  operationColumn: true,
  operationWidth: 160,
  formOption: {
    viewType: "modal",
    width: 600,
  },
  api: resourceTopic.getList,
  recycleApi: resourceTopic.getRecycleList,
  edit: {
    show: true,
    api: resourceTopic.update,
    auth: ["resource:topic:update"],
  },
  delete: {
    show: true,
    api: resourceTopic.deletes,
    auth: ["resource:topic:delete"],
    realApi: resourceTopic.realDeletes,
    realAuth: ["resource:topic:realDeletes"],
  },
  recovery: {
    show: true,
    api: resourceTopic.recoverys,
    auth: ["resource:topic:recovery"],
  },
  import: {
    show: true,
    url: "resource/topic/import",
    templateUrl: "resource/topic/downloadTemplate",
    auth: ["resource:topic:import"],
  },
  export: {
    show: true,
    url: "resource/topic/export",
    auth: ["resource:topic:export"],
  },
  beforeRequest: (params) => {
    params.orderBy = "id";
    params.orderType = "desc";
  },
});

const columns = reactive([
  {
    title: "ID",
    dataIndex: "id",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true,
  },
  {
    title: "文件类型",
    dataIndex: "type",
    formType: "select",
    search: true,
    commonRules: {
      required: true,
      message: "请输入文件类型",
    },
    multiple: false,
    dict: {
      name: "topic_type",
      props: {
        label: "title",
        value: "key",
      },
      translation: true,
    },
  },
  {
    title: "视频名字",
    dataIndex: "name",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入视频名字",
    },
    width: 300,
  },
  {
    title: "描述信息",
    dataIndex: "desc",
    formType: "input",
    search: false,
    hide: true,
  },
  {
    title: "番号",
    dataIndex: "code",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入番号",
    },
  },
  {
    title: "地区",
    dataIndex: "area_id",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入地区",
    },
  },
  {
    title: "分类",
    dataIndex: "category_id",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入分类",
    },
  },
  {
    title: "字幕类型",
    dataIndex: "sub_lang",
    formType: "select",
    search: true,
    multiple: false,
    dict: {
      name: "sub_type",
      props: {
        label: "title",
        value: "key",
      },
      translation: true,
    },
  },
  {
    title: "存储对象名",
    dataIndex: "obj_name",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入存储对象名",
    },
    hide: true,
  },
  {
    title: "播放地址",
    dataIndex: "play_src",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入播放地址",
    },
  },
  {
    title: "封面地址",
    dataIndex: "poster_src",
    formType: "input",
    search: true,
  },
  {
    title: "预览地址",
    dataIndex: "preview_src",
    formType: "input",
    search: true,
  },
  {
    title: "状态",
    dataIndex: "status",
    formType: "select",
    search: true,
    commonRules: {
      required: true,
      message: "请输入状态",
    },
    multiple: false,
    dict: {
      name: "topic_status",
      props: {
        label: "title",
        value: "key",
      },
      translation: true,
    },
  },
  {
    title: "是否有码",
    dataIndex: "is_censored",
    formType: "select",
    search: true,
    commonRules: {
      required: true,
      message: "请输入是否有码",
    },
    multiple: false,
    dict: {
      name: "yes_no",
      props: {
        label: "title",
        value: "key",
      },
      translation: true,
    },
  },
  {
    title: "是否敏感资源（人兽、幼女等）",
    dataIndex: "is_sensitive",
    formType: "select",
    search: true,
    commonRules: {
      required: true,
      message: "请输入是否敏感资源（人兽、幼女等）",
    },
    multiple: false,
    dict: {
      name: "yes_no",
      props: {
        label: "title",
        value: "key",
      },
      translation: true,
    },
  },
  {
    title: "创建时间",
    dataIndex: "created_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    showTime: true,
  },
  {
    title: "更新时间",
    dataIndex: "updated_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    showTime: true,
  },
  {
    title: "删除时间",
    dataIndex: "deleted_at",
    formType: "date",
    addDisplay: false,
    editDisplay: false,
    hide: true,
    showTime: true,
  },
  {
    title: "创建者",
    dataIndex: "created_by",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true,
  },
  {
    title: "更新者",
    dataIndex: "updated_by",
    formType: "input",
    addDisplay: false,
    editDisplay: false,
    hide: true,
  },
]);
</script>
<script>
export default { name: "resource:topic" };
</script>
