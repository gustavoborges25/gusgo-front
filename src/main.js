import Vue from 'vue';
import '@/support/plugins/vuetify';
import '@/support/plugins/notifications';
import { formataData, parseData } from '@/support/commons/filters/date';
import { formataCpf } from '@/support/commons/filters/cpf';
import { formataTelefone } from '@/support/commons/filters/phone';
import '@/support/plugins/vue';

Vue.config.productionTip = false;

Vue.filter('formataData', formataData);
Vue.filter('parseData', parseData);
Vue.filter('formataCpf', formataCpf);
Vue.filter('formataTelefone', formataTelefone);
