<template>
  <div>
    <div class="page-title">
      <h3>Новая запись</h3>
    </div>

    <Loader v-if="loading"/>

    <p class="center" v-else-if="!categories.length">В базе данных не найдено доступных категорий для создания новой записи.<router-link to="/categories"> Добавить новую категорию ?</router-link> </p>

    <form class="form" v-else>
      <div class="input-field">
        <select ref="select" v-model="category" >
          <option
          v-for="c in categories"
          :key="c.id"
          :value="c.id"
          >{{c.title}}</option>
        </select>
        <label>Выберите категорию</label>
      </div>

      <p>
        <label>
          <input class="with-gap" name="type" type="radio" value="income" />
          <span>Доход</span>
        </label>
      </p>

      <p>
        <label>
          <input class="with-gap" name="type" type="radio" value="outcome" />
          <span>Расход</span>
        </label>
      </p>

      <div class="input-field">
        <input id="amount" type="number" />
        <label for="amount">Сумма</label>
        <span class="helper-text invalid">amount пароль</span>
      </div>

      <div class="input-field">
        <input id="description" type="text" />
        <label for="description">Описание</label>
        <span class="helper-text invalid">description пароль</span>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Создать
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>


<script>
export default {
  name: 'record',
  data: ()=>({
    loading: true,
    select: null,
    categories: [],
    category: null
  }),
  async mounted(){
    this.categories = await this.$store.dispatch('fetchCategories')
    this.loading = false
    setTimeout(() => {
      this.select = M.FormSelect.init(this.$refs.select)
    },0)
    if(this.categories.length){
      this.category = this.categories[0].id
    }
    
    
  },
  destroyed(){
    if (this.select && this.select.destroyed){
      this.select.destroyed()
    }
  }
}
</script>