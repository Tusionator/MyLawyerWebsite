




var Realm = {
    props: {
    title: String,
    image: String,
    tmp: Array
    },
    template:
        `
      <button class="realm">
          <div class="realm-main">
              <h1>{{title}}</h1>
              <div class="realm-img">
                  <img style="width: auto; height: 100%;"
                  v-bind:src="image">
              </div>
          </div>
          <div class="realm-description">
          <ul>

              <li v-for="item in tmp">
                   {{ item }}<br>
              </li>
              </ul>

          </div>
      </button>
  `
};
new Vue({
    el: '#zakres_praktyki',
    components: {
        'realm': Realm,
    }
});



