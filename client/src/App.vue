<template>
  <div id="app">
    <h1 style="margin-bottom:30px;text-align:center;">BookList App</h1>
    <div class="field has-addons">
  <div class="control is-expanded ">
    <input class="input " type="text" placeholder="Add New Book" v-model="description">
  </div>
  <div class="control">
  <a class="button is-info" @click="addItem()">Add</a>
</div>
</div>


    <div style="margin-top:20px;" class="notification" v-for="(item, i) in items" :key="item._id">

      <div class="columns">
       <input type="text" class="column input" v-if="isSelected(item)" >
<p  v-else  class="column" >
<span class="tag is-primary">{{i + 1}}</span>
{{item.description}}

</p>

<div class="column is-narrow">
  <span class="icon has-text-info" @click=" isSelected(item)? unselect(): select(item)">
    <i class="material-icons">{{isSelected(item)? 'close':'edit'}}</i>
  </span>
</div>

<div class="column is-narrow">
  <span class="icon has-text-info" @click="isSelected(item)? updateItem(item,i): removeItem(item,i)">
    <i class="material-icons">{{isSelected(item)? 'save':'delete' }}</i>
  </span>
</div>



      </div>

    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      items:[],
      description:'',
      editedDescription:'',
      selected:{}
    }
  },
  async mounted() {
    const response= await axios.get('/api/bucketListItems')
    this.items=response.data
    
  },

  methods:{
    async addItem() {
      const response= await axios.post('/api/bucketListItems', {
        description:this.description
      });
      this.items.push(response.data);
      this.description=''
    },

    //ends

    async removeItem(item,i){
await axios.delete('/api/bucketListItems/'+ item._id);
this.items.splice(i,1);
    },

    //ends

    select(item){
      this.selected=item
      this.editedDescription=item.description
    },

    isSelected(item){
      return this.selected._id == item._id
    },

    unselect(){
      this.selected={};
    },

    async updateItem(item,i) {
const response= await axios.put('/api/bucketListItems/' + item._id,{
  description:this.editedDescription
});
this.items[i]=response.data;
this.unselect();
    }


  }
  


 
}
</script>

<style>
#app{
  margin:auto;
  margin-top: 3rem;
  max-width:700px;
}

.icon{
cursor: pointer;
}
</style>
