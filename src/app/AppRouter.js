import RegistrationRouter from '@/app/Registration/RegistrationRouter';
import CommercialRouter from '@/app/Commercial/CommercialRouter';
import FinancialRouter from '@/app/Financial/FinancialRouter';

export default [
    {
      path: '/',
      component: () => import('@/app/Layout/Layout.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/app/Home/Home.vue'),
          meta: {
            sidebar: {
              icon: 'person',
              text: 'Início',
            },
            disableDivider: true,
            previewPage: '/',
          },
        },
        {
          path: '/registration',
          name: 'Registration',
          children: RegistrationRouter,
          meta: {
            sidebar: {
              icon: 'person',
              text: 'Cadastros',
            },
            disableDivider: true,
            previewPage: '/',
          },
        },
        {
          path: '/commercial',
          name: 'Commercial',
          children: CommercialRouter,
          meta: {
            sidebar: {
              icon: 'person',
              text: 'Comercial',
            },
            disableDivider: true,
            previewPage: '/',
          },
        },
        {
          path: '/financial',
          name: 'Financial',
          children: FinancialRouter,
          meta: {
            sidebar: {
              icon: 'person',
              text: 'Financeiro',
            },
            disableDivider: true,
            previewPage: '/',
          },
        },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/app/Login/Login.vue'),
    },
]
