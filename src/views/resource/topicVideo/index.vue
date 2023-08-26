<template>
  <div class="ma-content-block lg:flex justify-between p-4">
    <ma-crud :options="options" :columns="columns" ref="crudRef"></ma-crud>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import resourceTopicVideo from "@/api/resource/resourceTopicVideo";
import { Message } from "@arco-design/web-vue";

const crudRef = ref();

const switchStatus = (statusValue, id, statusName) => {
  resourceTopicVideo
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
  id: "ffs_resource_topic_video",
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
  api: resourceTopicVideo.getList,
  recycleApi: resourceTopicVideo.getRecycleList,
  add: {
    show: true,
    api: resourceTopicVideo.save,
    auth: ["resource:topicVideo:save"],
  },
  edit: {
    show: true,
    api: resourceTopicVideo.update,
    auth: ["resource:topicVideo:update"],
  },
  delete: {
    show: true,
    api: resourceTopicVideo.deletes,
    auth: ["resource:topicVideo:delete"],
    realApi: resourceTopicVideo.realDeletes,
    realAuth: ["resource:topicVideo:realDeletes"],
  },
  recovery: {
    show: true,
    api: resourceTopicVideo.recoverys,
    auth: ["resource:topicVideo:recovery"],
  },
  import: {
    show: true,
    url: "resource/topicVideo/import",
    templateUrl: "resource/topicVideo/downloadTemplate",
    auth: ["resource:topicVideo:import"],
  },
  export: {
    show: true,
    url: "resource/topicVideo/export",
    auth: ["resource:topicVideo:export"],
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
    title: "主题ID",
    dataIndex: "topic_id",
    formType: "input-number",
    search: true,
    commonRules: {
      required: true,
      message: "请输入主题ID",
    },
    min: 1,
    step: 1,
  },
  {
    title: "原始文件名",
    dataIndex: "origin_name",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入原始文件名",
    },
  },
  {
    title: "原始文件扩展名",
    dataIndex: "origin_ext",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入原始文件扩展名",
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
  },
  {
    title: "存储对象路径",
    dataIndex: "obj_path",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入存储对象路径",
    },
  },
  {
    title: "存储扩展名",
    dataIndex: "obj_ext",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入存储扩展名",
    },
  },
  {
    title: "宽度",
    dataIndex: "width",
    formType: "input-number",
    search: true,
    commonRules: {
      required: true,
      message: "请输入宽度",
    },
  },
  {
    title: "高度",
    dataIndex: "height",
    formType: "input-number",
    search: true,
    commonRules: {
      required: true,
      message: "请输入高度",
    },
  },
  {
    title: "文件大小",
    dataIndex: "size",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入文件大小",
    },
  },
  {
    title: "视频时长",
    dataIndex: "druation",
    formType: "slider",
    search: true,
    commonRules: {
      required: true,
      message: "请输入视频时长",
    },
    min: 1,
    max: 172800,
    step: 5,
    showTicks: true,
  },
  {
    title: "比特率",
    dataIndex: "bitrates",
    formType: "slider",
    search: true,
    commonRules: {
      required: true,
      message: "请输入比特率",
    },
    min: 10,
    max: 1000000,
    step: 100,
    showTicks: true,
  },
  {
    title: "分辨率(宽,高)",
    dataIndex: "resolution",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入分辨率(宽,高)",
    },
  },
  {
    title: "编码格式  视频|音频",
    dataIndex: "codec_name",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入编码格式  视频|音频",
    },
  },
  {
    title: "原始扫描资源ID",
    dataIndex: "resource_id",
    formType: "input",
    search: true,
    commonRules: {
      required: true,
      message: "请输入原始扫描资源ID",
    },
  },
  {
    title: "topic层排序",
    dataIndex: "topic_sort",
    formType: "input-number",
    search: true,
    commonRules: {
      required: true,
      message: "请输入topic层排序",
    },
  },
  {
    title: "集合层排序",
    dataIndex: "set_sort",
    formType: "input-number",
    search: true,
    commonRules: {
      required: true,
      message: "请输入集合层排序",
    },
  },
  {
    title: "状态码",
    dataIndex: "status",
    formType: "select",
    search: true,
    commonRules: {
      required: true,
      message: "请输入状态码",
    },
    multiple: false,
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
export default { name: "resource:topicVideo" };
</script>
