<template>
  <div class="grid">
    <aside class="aside">
      <div>
        <img src="@/assets/images/man.jpg" alt="foto-man" class="foto-aside" />
      </div>

      <div>
        <p class="aside-title">Fuad Gulmammedov</p>

        <p class="aside-subtitle">Front-end Developer</p>
      </div>

      <div class="messenger">
        <ul class="items-messenger">
          <li class="item-messenger">
            <span class="icons icon-linkedIn"></span>
          </li>
          <li class="item-messenger">
            <span class="icons icon-github"></span>
          </li>
          <li class="item-messenger">
            <span class="icons icon-telegram"></span>
          </li>
        </ul>
      </div>

      <line-item />

      <div class="about-my">
        <info-item :skill="'Age: '" :level="'21'" />

        <info-item :skill="'Country: '" :level="'Azerbaijan / Baku'" />
      </div>

      <line-item />

      <div class="languages">
        <h3>Languages</h3>

        <info-item :skill="'Russian'" :level="'Native'" />
        <line-item :type="'orange'" />

        <info-item :skill="'English'" :level="'B1-B2'" />
        <line-item :type="'orange'" />

        <info-item :skill="'Azerbaijan'" :level="'A2-B1'" />
        <line-item :type="'orange'" />
      </div>

      <line-item />

      <div class="skills">
        <h3>Skills</h3>

        <info-item :skill="'HTML'" />
        <line-item :type="'orange'" />

        <info-item :skill="'CSS'" />
        <line-item :type="'orange'" />

        <info-item :skill="'JavaScript'" />
        <line-item :type="'orange'" />
      </div>

      <line-item />

      <div class="button_wrapper">
        <button-ui :text="'Watch and download CV'" />
      </div>
    </aside>

    <div class="wrapper">
      <slot></slot>
    </div>

    <div class="wrapper-nav">
      <div class="theme">
        <span class="icon-theme"></span>
      </div>

      <nav class="nav">
        <div class="item-nav active">
          <span class="icon-home"></span>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import InfoItem from "./parts/InfoItem.vue";
import LineItem from "./parts/LineItem.vue";
import ButtonUi from "@/component/UI/ButtonUi.vue";

export default {
  name: "layout-wrapper",

  components: {
    InfoItem,
    LineItem,
    ButtonUi,
  },
};
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-columns: 0.35fr 1fr 70px;
  grid-column-gap: 20px;
  background-color: #eae5e5;
  border-radius: 20px;
  overflow: hidden;
}
.aside-title {
  font-size: 23px;
  font-weight: 600;
  margin-bottom: 14px;
}

.aside-subtitle {
  font-size: 17px;
  margin-bottom: 4px;
  text-align: center;
}

h3 {
  margin-bottom: 20px;
}

.button_wrapper {
  margin-top: 20px;
}
.icons {
  width: 25px;
  height: 25px;
  background-color: #ffb433;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.aside,
.wrapper-nav {
  display: flex;
  background-color: #fffafa;
  align-items: center;
  flex-direction: column;
}
.wrapper {
  margin-left: 20px;
  margin-right: 20px;
}

.wrapper-nav {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.theme {
  margin-bottom: 150px;
  margin-top: 20px;
  width: 24px;
  height: 24px;
  background-color: #ffb433;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;

  span {
    font-size: 16px;
    position: relative;
    top: 2px;
    transform: rotate(-45deg);
  }
}
.item-nav {
  margin-bottom: 15px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 25px;
    width: 25px;
  }
}

.active {
  width: 36px;
  height: 36px;
  background-color: #ffb433;
}
.aside {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.foto-aside {
  width: 160px;
  margin-bottom: 32px;
}
.item-messenger {
  list-style-type: none;
  margin-left: 4px;
  margin-right: 4px;
}
.items-messenger {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.about-my {
  width: 100%;
  padding: 20px;
}

.languages,
.skills {
  width: 100%;
  padding: 20px;
}
</style>
