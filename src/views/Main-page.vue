<template>
  <layout-wrapper>
    <header class="header">
      <div class="title-name">
        <h1 class="title">
          I'm Fuad Gulmammedov <br />
          <span class="span-yellow">Front-end</span> Developer
        </h1>

        <div class="subtitle">
          At the moment I am a student. I study at the faculty of computer
          networks. At the same time, I have been studying programming, in
          particular, front-end development for more than 1.5 years. I have
          little commercial experience in development, but there is an
          irresistible desire to develop in this direction. I'm ready to hard
          work to reach all my goals.
        </div>
      </div>

      <div class="header_foto">
        <img src="@/assets/images/man.jpg" alt="foto man" class="foto-man" />
      </div>
    </header>

    <section class="my-services">
      <h3 class="title-services">My project</h3>

      <div class="items-services">
        <div class="item-service" v-for="item in projects" :key="item.name">
          <!--          <img-->
          <!--            src="@/assets/images/icons8-chromebook-100.png"-->
          <!--            alt="icon-comp"-->
          <!--            class="item-service-icon"-->
          <!--          />-->
          <div class="item-service-title">
            <router-link :to="'/detail/' + item.id">
              {{ item.name }}
            </router-link>
          </div>

          <div class="item-service-description">
            {{ item.description.short_description }}
          </div>
        </div>
      </div>
    </section>

    <div v-if="isLoading" class="center">
      <spinner-ui></spinner-ui>
    </div>
  </layout-wrapper>
</template>

<script>
import LayoutWrapper from "@/component/layout/Layout";
import { mapActions, mapState } from "vuex";
import SpinnerUi from "@/component/UI/SpinnerUi";

export default {
  components: {
    SpinnerUi,
    LayoutWrapper,
  },

  computed: {
    ...mapState({
      projects: (state) => state.project.projects,
      isLoading: (state) => state.project.isLoading,
    }),
  },

  mounted() {
    this.fetchProject();
  },

  methods: {
    ...mapActions({
      fetchProject: "fetchProject",
    }),
  },
};
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
}

.header {
  display: flex;
  background-color: #fffafa;
  max-height: 380px;
  overflow: hidden;
}

.title-name {
  width: 70%;
  margin: 30px;
}
.title,
.subtitle {
  margin-bottom: 25px;
}

.title {
  margin-top: 25px;
}

.subtitle {
  font-size: 18px;
}
.header_foto {
  width: 40%;
}
.foto-man {
  width: 300px;
}

.my-services {
  display: flex;
  flex-direction: column;
  padding: 15px;
  text-align: center;
  margin-top: 50px;
}
.span-yellow {
  color: #ffb433;
}
.title-services {
  margin-bottom: 35px;
  margin-top: 40px;
  font-size: 36px;
}

.items-services {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.item-service {
  background-color: #fffafa;
  width: 200px;
  padding: 20px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
}
.item-service-title {
  font-weight: bold;
}
.item-service-title,
.item-service-description {
  margin-bottom: 10px;
}
</style>
