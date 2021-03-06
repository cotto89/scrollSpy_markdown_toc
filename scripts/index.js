import Vue from "vue";
// require a *.vue component
import App from "./components/App.vue";

// mount a root Vue instance
new Vue({
  el: "body",
  components: {
    app: App
  }
});
