<template>
  <div id="app">
    <el-form ref="form" label-position="left" :model="form" :rules="rules" @submit.native.prevent="handleSubmit">

      <el-form-item label="电话号码：" prop="tel">
        <el-input v-model="form.tel" placeholder="手机座机混合验证" style="width: 140px;" />
      </el-form-item>

      <el-form-item label="数字验证：" prop="number">
        <el-input v-model="form.number" placeholder="大于0小于100的两位小数" style="width: 140px;" />
      </el-form-item>

      <el-form-item label="首尾空格：" prop="space">
        <el-input v-model="form.space" placeholder="首尾不能含有空格" style="width: 140px;" />
      </el-form-item>

      <el-form-item label="有效链接：" prop="website">
        <el-input v-model="form.website" placeholder="有效的链接地址" style="width: 140px;" />
      </el-form-item>

      <el-form-item label="" label-width="0">
        <el-button plain native-type="submit">提交</el-button>
      </el-form-item>

      直接使用function验证：<br><br>
      上方输入的电话号码是否手机号码：{{ isPhoneNumber(form.tel) }}<br><br>
      上方输入的数字验证是否数字：{{ isNumber(form.number) }}

    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import validing, { isPhoneNumber, isNumber } from '../src/index'
import { ElForm } from 'element-ui/types/form'

// import validing, { isPhoneNumber } from 'validing'

@Component({
  name: 'Dev'
})

export default class extends Vue {
  /** 表单 */
  private form = {
    tel: '',
    number: '',
    space: '',
    website: ''
  }
  /** 规则 */
  private rules = {
    tel: [
      { validator: validing.rules.validatePhone(
        {
          required: true,
          name: undefined
        }
      ), trigger: 'blur' }
    ],
    number: [
      { validator: validing.rules.validateNumber(
        {
          required: false,
          range: '[-2,100)',
          decimal: 2,
          strict: false,
          name: '金额'
        }
      ), trigger: 'blur' }
    ],
    space: [
      { validator: validing.rules.validateSpace(
        {
          required: false
        }
      ), trigger: 'blur' }
    ],
    website: [
      { validator: validing.rules.validateWebsite(
        {
          required: false,
          protocols: ['http', 'https']
        }
      ), trigger: 'blur' }
    ]
  }
  isPhoneNumber = isPhoneNumber
  isNumber = validing.isNumber

  /**
   * 提交表单
   */
  private handleSubmit() {
    (this.$refs.form as ElForm).validate(async valid => {
      if (valid) {
        console.log('submit')
      }
    })
  }
}
</script>

<style lang="css">
  .el-form {
    padding: 2em;
    font-size: 13px;
  }

  .el-form-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1em;
  }

  .el-form-item__content {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  input {
    width: 100%;
    font-size: 12px !important;
  }

  .el-form-item__error {
    color: red;
    font-size: 13px;
    margin-left: 1em;
  }
</style>
