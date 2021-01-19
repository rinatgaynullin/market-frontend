import Vue from 'vue';

import '../styles/quasar.sass';
import lang from 'quasar/lang/ru';
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css';
import '@quasar/extras/material-icons/material-icons.css';
import { Quasar } from 'quasar';

Vue.use(Quasar, {
  config: {},
  plugins: {},
  lang,
});
