import { createStore } from "vuex";
import { projectModule } from "@/store/projectModule";

export default createStore({
  modules: { project: projectModule },
});
