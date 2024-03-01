<template>
  <div class="login">
    <div class="background-image-div">
      <img class="background-image" src="../assets/background-image.png" />
      <div class="image-div">
        <img src="../assets/logo-white.png" class="logo" />
        <p class="image-exp">
          Exceptional experience! Delicious dishes, chic ambiance, and
          impeccable service. Highly recommend!
        </p>
        <div class="image-name-div">
          <div class="line"></div>
          <img class="profile-image" src="../assets/profile.png" />
          <p class="name-exp">Sukran from Ankara</p>
        </div>
      </div>
    </div>
    <div class="form-div">
      <div class="title-div">
        <p class="title">Login to Velvity Admin</p>
        <p class="exp">Please enter your details to login</p>
      </div>
      <InputComponent v-model="username" :label="'Your username'" />
      <InputComponent
        v-model="password"
        :label="'Your password'"
        type="password"
      />
      <div class="login-button-div">
        <div class="login-button" @click="login">
          <img class="login-icon" src="../assets/login-icon.png" />
          <p class="login-text">Login to admin</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputComponent from "@/components/InputComponent.vue";
import { mapMutations } from "vuex";
export default {
  name: "Login",
  components: {
    InputComponent,
  },
  methods: {
    ...mapMutations(["setUsername", "setPassword"]),
    login() {
      fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.username, //mor_2314
          password: this.password, //83r5^_
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
        })
        .catch((error) => {
          console.error("Login error:", error);
        });
    },
  },
};
</script>

<style scoped>
.login {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
}

.background-image-div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.background-image {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}

.image-div {
  width: 300px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 32px;
}

.logo {
  width: 124px;
}

.image-exp {
  color: white;
  font-size: 20px;
  font-weight: 500;
}

.image-name-div {
  display: flex;
  align-items: center;
  gap: 16px;
}

.line {
  width: 24px;
  height: 5px;
  background-color: white;
  border-radius: 50px;
}

.profile-image {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}

.name-exp {
  color: white;
  font-size: 14px;
  font-weight: 500;
}

.form-div {
  box-sizing: border-box;
  padding: 128px;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  align-items: start;
  justify-content: center;
}

.title-div {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}

.title {
  font-size: 32px;
  font-weight: 400;
  color: #111122;
}

.exp {
  font-size: 13px;
  color: #6e6e6e;
  font-weight: 400;
}

.login-button-div {
  align-items: end;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.login-button {
  align-items: center;
  background-color: #4545ee;
  border-radius: 4px;
  column-gap: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  height: 40px;
  padding-left: 16px;
  padding-right: 16px;
  transition: all 0.15s;
}

.login-button:hover {
  opacity: 0.9;
}

.login-button:active {
  opacity: 0.8;
}

.login-icon {
  width: 16px;
  height: 16px;
}

.login-text {
  font-size: 13px;
  color: white;
  font-weight: 500;
}

@media (max-width: 1000px) {
  .login {
    grid-template-columns: 1fr;
  }
  .background-image-div {
    height: 50vh;
  }
  .background-image {
    height: 50vh;
  }
  .image-div {
    width: 266px;
    gap: 16px;
  }
  .image-exp {
    font-size: 16px;
  }
  .form-div {
    padding: 24px;
    row-gap: 24px;
  }
  .title {
    font-size: 24px;
  }

  .exp {
    font-size: 12px;
  }
}
</style>
