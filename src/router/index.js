import VueRouter from "vue-router";
import Vue from "vue";
import AuthHandler from "../components/AuthHandler";
import ImageList from "../components/ImageList";
import UploadForm from "../components/UploadForm";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/oauth2/callback",
      component: AuthHandler
    },
    {
      path: "/",
      component: ImageList
    },
    {
      path: "/upload",
      component: UploadForm
    }
  ]
});
