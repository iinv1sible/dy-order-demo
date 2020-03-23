<template>
  <div class="acd-container">
    <div class="acd-top">
      <div class="acd-title">预订安心卡</div>
      <div>演示使用</div>
      <div class="acd-order-info">订单： 2020-03-04 午餐 柳浪闻莺</div>
      <div class="acd-persons">
        <div class="acd-persons-header">
          <div style="margin-left: 170rpx">岗位</div>
          <div style="margin-left: 160rpx;">姓名</div>
          <div style="margin-left: 100rpx;">体温</div>
        </div>
        <div class="acd-persons-list">
          <div v-for="person in persons" :key="id">
            <div>
              <image
                style="width: 110rpx; height: 110rpx;"
                :src="person.icon"
              />
            </div>
            <div
              style="width: 174rpx;display: flex; flex-direction: column; justify-content: space-around;margin-left: 28rpx;"
            >
              <div style="font-size: 28rpx;">{{ person.jobDesc }}</div>
              <div
                style="display: flex; margin-top: 20rpx; background-color: #D4F3E0;padding: 6rpx 12rpx; align-items: center;border-radius: 8rpx;"
              >
                <image
                  src="/static/icon/search.png"
                  style="width: 20rpx; height: 20rpx;"
                />
                <div
                  @click="showHealthCard(person)"
                  style="margin-left: 10rpx;"
                >
                  查看健康证
                </div>
              </div>
            </div>
            <div
              style="width: 100rpx;margin-left: 10rpx;display:flex;align-items:center;justify-content:center"
            >
              {{ person.name }}
            </div>
            <div style="margin-left: 56rpx;">{{ person.tempDesc }}</div>
          </div>
        </div>
      </div>
      <div class="acd-record-time">记录时间：2020年3月5日</div>
      <div class="acd-qualification-button">
        <image
          src="/static/icon/certificate.png"
          style="width: 30rpx;height: 30rpx;"
        />
        <div @click="showQualificationImgs()" style=";margin-left: 20rpx;">
          门店资质展示
        </div>
      </div>
      <div class="acd-logo">
        <image
          mode="widthFix"
          style="height: auto; width: 120rpx;"
          src="/static/images/logo.png"
        />
      </div>
      <div class="acd-doctor">
        <image
          mode="widthFix"
          style="width: 340rpx;height: auto; display: block;"
          src="https://qiniuyun8.zhidianfan.com/987c48825cad4f9cbeb5722c0a089041.png?e=3161488530&token=7Qtn8gb2H4Jrup0BKvT781jKUxQDUrib7jqZVV2A:7KMTNmF2X13Jpxf1WNTxYsZnYsc="
        />
      </div>
    </div>
    <div class="acd-bottom">
      <div>预订全程可跟踪，请您安心享用美食，感谢您的支持！</div>
      <image
        mode="widthFix"
        style="width: 80%;height: auto;display: block;padding: 60rpx 0 ;display: block;"
        src="/static/images/menubar.png"
      />
    </div>
  </div>
</template>

<script>
import nativeMgr from "@/native/NativeMgr";
let native = nativeMgr.getNative();
export default {
  data() {
    return {
      persons: [
        {
          id: 1,
          name: "张三",
          icon: "/static/heads/head-1.png",
          jobDesc: "菜品负责人",
          tempDesc: "<37℃",
          healthCardImg: "/static/icon/dy-logo.png"
        },
        {
          id: 2,
          name: "李四",
          icon: "/static/heads/head-2.png",
          jobDesc: "传菜负责人",
          tempDesc: "<37℃",
          healthCardImg: "/static/icon/dy-logo.png"
        },
        {
          id: 3,
          name: "王五",
          icon: "/static/heads/head-3.png",
          jobDesc: "服务员",
          tempDesc: "<37℃",
          healthCardImg: "/static/icon/dy-logo.png"
        }
      ]
    };
  },
  methods: {
    showHealthCard(person) {
      native.previewImage(["https://qiniuyun8.zhidianfan.com/health.png"]);
    },
    showQualificationImgs() {
      native.previewImage([
        "https://qiniuyun8.zhidianfan.com/qua-1.png",
        "https://qiniuyun8.zhidianfan.com/qua-2.png"
      ]);
    }
  }
};
</script>

<style scoped>
.acd-container {
  display: flex;
  flex-direction: column;
}

.acd-top {
  height: 1000rpx;
  background-color: #b9f1cf;
  display: flex;
  flex-direction: column;
  padding: 60rpx 60rpx 0 60rpx;
  position: relative;
}

.acd-title {
  font-size: 48rpx;
  font-weight: bold;
  color: #3e9565;
}

.acd-order-info {
  margin-top: 40rpx;
  background-color: #cef5dd;
  padding: 16rpx 0 20rpx 20rpx;
  border-radius: 12rpx;
  font-size: 24rpx;
  font-weight: bold;
  color: #2f8555;
}

.acd-persons {
  width: 100%;
}

.acd-persons-header,
.acd-persons-list {
  background-color: #f1fcf5;
}

.acd-persons-header {
  display: flex;
  margin-bottom: 10rpx;
  padding: 20rpx 0 20rpx 0;
  font-weight: bold;
  color: #2f8555;
  font-size: 24rpx;
  border-radius: 12rpx;
  margin-top: 20rpx;
}

.acd-persons-list {
  display: flex;
  flex-direction: column;
  border-radius: 12rpx;
  align-items: center;
}

.acd-persons-list > div {
  display: flex;
  align-items: flex-start;
  padding: 32rpx 0;
  width: 90%;
  border-bottom: 1rpx solid #ddf5e6;
  color: #2f8555;
  font-weight: bold;
  font-size: 24rpx;
}

.acd-persons-list > div:last-of-type {
  border-bottom: none;
}

.acd-record-time {
  color: #2f8555;
  font-size: 24rpx;
  font-weight: bold;
  margin-top: 20rpx;
  margin-left: 10rpx;
}

.acd-qualification-button {
  background-color: #d5f7e2;
  display: flex;
  align-items: center;
  color: #2f8555;
  font-size: 28rpx;
  font-weight: bold;
  padding: 4rpx 28rpx;
  margin-top: 20rpx;
  width: 220rpx;
  border-radius: 12rpx;
}

.acd-doctor {
  position: absolute;
  right: 0;
  bottom: 0;
}

.acd-bottom {
  color: #2f8555;
  font-size: 28rpx;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50rpx;
}

.acd-logo {
  position: absolute;
  right: 60rpx;
  top: 0;
  background-color: #fff;
  padding: 20rpx 30rpx;
  border-radius: 0 0 12rpx 12rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
