import { ActionContext } from "vuex";
import axios from "axios";
import { useRoute } from "vue-router";

export const projectModule = {
  state: () => ({
    projects: [],
    isLoading: false,
    projectDetail: null,
  }),

  mutations: {
    isLoadingChange: (state: any, flag: boolean) => {
      state.isLoading = flag;
    },

    setProject: (state: any, project: any) => {
      state.projects = project;
    },

    setProjectDetail: (state: any, projectDetail: any) => {
      console.log(projectDetail);
      state.projectDetail = projectDetail;
    },

    removeProjectDetail: (state: any) => {
      state.projectDetail = null;
    },
  },

  actions: {
    fetchProject: ({ commit }: ActionContext<any, any>) => {
      commit("isLoadingChange", true);

      setTimeout(async () => {
        const project = await axios.get("http://localhost:3000/project");

        commit("setProject", project.data);

        commit("isLoadingChange", false);
      }, 1000);
    },

    fetchProjectById: ({ commit }: ActionContext<any, any>) => {
      commit("isLoadingChange", true);

      const route = useRoute();

      setTimeout(async () => {
        const project = await axios.get(
          `http://localhost:3000/project?id=${route.params.id}`
        );

        commit("setProjectDetail", project.data[0]);

        commit("isLoadingChange", false);
      }, 1000);
    },
  },
};
