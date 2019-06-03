













var Realm = {
    props: ['title', 'image', 'tmp'],
    template:
        `
<div>
      <div class="realm">
        <h1>{{title}}</h1>
        <div class="realm-img">
          <img style="width: auto; height: 100%;" v-bind:src="image">
        </div>
      </div>
      <div class="realm-description">{{tmp}}</div>
     </div> 
  `
};
new Vue({
    el: '#zakres_praktyki',
    components: {
        'realm': Realm,
    }
});