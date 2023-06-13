<template>
  <main class="main-content mt-0">
    <div class="mt-2 position-relative text-center">
        <h2>New Task</h2>
    </div>
    <div class="container">
          <div class="card z-index-0">
            <div class="card-body">
                    <form @submit.prevent="submitAdd">
                        <argon-input v-model="input.title" type="text" placeholder="Title" aria-label="Title" />
                        <argon-input v-model="input.description" type="text" placeholder="Description" aria-label="Description" />
                        <argon-input v-model="input.category" type="text" placeholder="Category" aria-label="Category" />
                        <div class="text-center">
                        <argon-button fullWidth color="dark" variant="gradient" class="my-4 mb-2">Add</argon-button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  </main>
  <app-footer />
</template>

<script>
import { mapActions } from 'pinia';
import d$todo from '../../stores/dashboard/todo';

import Navbar from "@/examples/PageLayout/Navbar.vue";
import AppFooter from "@/examples/PageLayout/Footer.vue";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonCheckbox from "@/components/ArgonCheckbox.vue";
import ArgonButton from "@/components/ArgonButton.vue";
const body = document.getElementsByTagName("body")[0];

export default {
  name: "tambah",
  components: {
    Navbar,
    AppFooter,
    ArgonInput,
    ArgonCheckbox,
    ArgonButton,
  },

  data: () => ({
    //input
    input: {
      title: '',
      description: '',
      category: '',
    }
  }),
  methods: {
    ...mapActions(d$todo, ['a$add']),
    async submitAdd() {
      try {
        await this.a$add({ ...this.input });
        this.$router.replace({name: 'Tables'});
      } catch (e) {
        console.error(e);
      }
    }
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
};
</script>
