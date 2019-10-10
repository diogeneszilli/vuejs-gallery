import ImgurService from "../../services/imgur-service";
import router from "../../router";

const state = {
  images: []
};

const getters = {
  allImages: state => state.images
};

const actions = {
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth;
    const response = await ImgurService.fetchImages(token);
    commit("setImages", response.data.data);
  },
  async uploadImages({ rootState }, images) {
    const { token } = rootState.auth;
    await ImgurService.uploadImages(images, token);
    router.push("/");
  }
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
