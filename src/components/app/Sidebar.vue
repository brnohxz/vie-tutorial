<template>
  <ul class="sidenav app-sidenav" :class="{ open: value }">
    <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      exact=""
    >
      <a href="#" class="waves-effect waves-orange pointer">{{ link.title }}</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  data: () => ({
    links: [
      { title: "Счет", url: "/" },
      { title: "История", url: "/History" },
      { title: "Планирование", url: "/Planning" },
      { title: "Новая запись", url: "/Record" },
      { title: "Категории", url: "/Categories" },
    ],
  }),
  props: ["value"],
};
</script>
