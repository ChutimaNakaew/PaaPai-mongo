<template>
  <div class="container font">
    <section class="section" id="app">
      <div class="row">
        <div class="col-3">
          <div class="p-3 border bg-white h-100 rounded-2 shadow p-3 mb-5 bg-body rounded">
            <div class="text-center">
              <router-link to="/admin/home">
                <img src="../../assets/paapai-logo.png" class="rounded logo" alt="LOGO_PaaPai">
              </router-link>
              <hr>
              <p class="fw-bold text-primary text-start">ผู้ดูแลระบบ</p>
              <div class="row">
                <div class="col-6">
                  <p class=" text-start ms-2"><i class="bi bi-person-fill-gear"></i> Admin</p>
                </div>
                <div class="col-6 text-center">
                  <router-link to="/admin/login" class="text-decoration-none">
                    <div class="bg-danger text-white rounded-3">ออกจากระบบ</div>
                  </router-link>
                </div>
              </div>
              <div>
                <hr>
                <p class="fw-bold text-primary text-start">ทัวร์</p>
                <router-link to="/admin/allTour" class="text-decoration-none text-dark">
                  <p class=" text-start ms-2"> <i class="bi bi-geo-alt-fill"></i> ทัวร์ทั้งหมด</p>
                </router-link>
                <router-link to="/admin/manage" class="text-decoration-none text-dark">
                  <p class=" text-start ms-2"> <i class="bi bi-pen-fill"></i> จัดการทัวร์</p>
                </router-link>
                <hr>
                <p class="fw-bold text-primary text-start">รายการชำระเงิน</p>
                <router-link to="/admin/checkPayment" class="text-decoration-none text-dark">
                  <p class=" text-start ms-2"> <i class="bi bi-cash"></i> รายการชำระเงิน</p>
                </router-link>
                <router-link to="/admin/approve" class="text-decoration-none text-dark">
                  <p class=" text-start ms-2"> <i class="bi bi-check-circle-fill"></i> อนุมัติแล้ว</p>
                </router-link>
                <router-link to="/admin/reject" class="text-decoration-none text-dark">
                  <p class=" text-start ms-2"> <i class="bi bi-x-circle-fill"></i> ไม่อนุมัติ</p>
                </router-link>
                <hr>
                <p class="fw-bold text-primary text-start">การจอง</p>
                <router-link to="/admin/home" class="text-decoration-none text-dark">
                  <p class=" text-start ms-2"> <i class="bi bi-receipt-cutoff"></i> รายการจองทั้งหมด</p>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-9">
          <div class="card" style="width: 100%; height: 100%">
            <div class="card-content">
              <div class="content">
                <div class="fs-4	">
                  <span><i class="fas fa-times"></i></span>
                  รายการที่ไม่อนุมัติ
                </div>
                <hr />

                <table class="table ">
                  <thead>
                    <tr>
                      <th>ชื่อทัวร์</th>
                      <th>วันเดินทาง</th>
                      <th>รายชื่อผู้จอง</th>
                      <th>หลักฐาน</th>
                      <th>เปลี่ยนสถานะ</th>
                    </tr>
                  </thead>
                  <tbody class="mt-2" v-for="info in users" :key="info.id">
                    <tr v-if="info.status === 'false'">
                      <td>{{ info.tour_name }}</td>
                      <td>{{ info.date }}</td>
                      <td>{{ info.firstname }} {{ info.lastname }}</td>

                      <td>
                        <router-link class="btn btn-warning btn-sm"
                          :to="`/admin/allTour/${info.name}/detail`">ดูหลักฐาน</router-link>
                      </td>
                      <td>
                        <div class="text-center">

                          <button class="btn btn-success btn-sm " @click="changeStatus(info._id)">อนุมัติ</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
// @ is an alias to /src
export default {
  name: "NotPass",
  data() {
    return {
      users: []
      // like: this.$route.body.like,
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios
        .get("https://paapai-mongo-backend.vercel.app/admin/reject")
        .then(response => {
          this.users = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    changeStatus(userId) {
      axios.post(`https://paapai-mongo-backend.vercel.app/toApprove/${userId}`)
        .then(response => {
          this.$router.push({ path: "/admin/reject" });
          this.getUsers();
        })
        .catch(error => {
          this.error = error.response.data.message;
        });
    }
  }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap');

.font {
  font-family: "Kanit", sans-serif;
}

.logo {
  height: 150px;
  width: 150px;
}

.imgAdmin {
  height: 70px;
  width: 70px;
}
</style>
