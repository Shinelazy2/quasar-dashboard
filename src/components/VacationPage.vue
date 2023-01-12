<script setup lang="ts">
import { ref } from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
dayjs.locale('ko')

//
type Day = {
  from?: string
  to?: string
}
const tab = ref()
const rightDrawer = ref(false)
const today = dayjs().format('YYYY/MM/DD')
const days = ref<Day>({ from: today, to: today })
const isInputFocus = ref(false)
const vacationMessage = ref('')
const text = ref('')

// const dimScreen = () => {
//   document.body.style.overflow = 'hidden'
//   document.body.style.position = 'fixed'
//   document.body.style.width = '100%'
//   console.log('작동중')
// }
// const undimScreen = () => {
//   document.body.style.overflow = ''
//   document.body.style.position = ''
//   document.body.style.width = ''
// }
</script>
<template>
  <div class="q-pa-md">
    <q-drawer
      :breakpoint="3186"
      v-model="rightDrawer"
      side="right"
      bordered
      :width="500"
    >
      <div class="q-pa-md">
        <div class="row items-center">
          <q-icon size="30px" name="check" />
          <h5>휴가</h5>
        </div>
        <div class="row items-center q-gutter-sm">
          <q-icon size="30px" name="check" />
          <div>
            <h5>휴가 정보</h5>
          </div>
          <hr class="col" />
          <q-btn color="primary">13일 사용 가능</q-btn>
          <q-btn color="secondary">유급</q-btn>
          <q-btn color="warning">만료</q-btn>
        </div>
        <div>
          <h6>휴가 일정·필요 정보 입력</h6>
          <div class="row items-center q-gutter-sm">
            <q-input
              @focus="isInputFocus = true"
              @focusout="isInputFocus = false"
              v-model="days.from"
              label="시작일"
              outlined
            />
            <q-icon name="―"></q-icon>
            <q-input
              @focus="isInputFocus = true"
              @focusout="isInputFocus = false"
              v-model="days.to"
              label="종료일"
              outlined
            />
          </div>
          <div v-if="isInputFocus" class="q-pa-md">
            {{ days }}
            <q-date v-model="days.from" range />
          </div>
        </div>

        <div>
          <q-input
            class="q-mt-sm"
            outlined
            v-model="vacationMessage"
            type="textarea"
            label="휴가 사유 및 메시지 입력"
          />
        </div>
        <div class="q-mt-sm row justify-end">
          <q-btn label="취소" />
          <q-btn color="primary" icon="check" label="승인요청하기" />
        </div>
      </div>
    </q-drawer>

    <header>
      <h5>내 휴가</h5>
      <q-tabs align="left" v-model="tab" class="text-teal">
        <q-tab name="mails" icon="mail" label="Mails" />
        <q-tab name="alarms" icon="alarm" label="Alarms" />
        <q-tab name="movies" icon="movie" label="Movies" />
      </q-tabs>
    </header>

    <h5>휴가 등록</h5>
    <q-card class="my-card" flat bordered @click="rightDrawer = !rightDrawer">
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <!-- <div class="text-overline">Overline</div> -->
          <q-icon name="check" />
          <div class="text-h5 q-mt-sm q-mb-xs">연차</div>
          <div class="text-caption text-grey">13일 4시간</div>
        </q-card-section>
      </q-card-section>
      <q-separator />
    </q-card>

    <h5>예정휴가</h5>
  </div>
</template>
<style scpoe>
.my-card {
  width: 300px;
}
.q-input {
  width: 150px;
}

hr {
  width: 100%;
  border: solid 1px gainsboro;
}
</style>
