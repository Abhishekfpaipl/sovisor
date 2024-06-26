import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/pages/HomePage.vue"),
  },
  {
    path: "/privacy-policy",
    name: "privacy-policy",
    component: () => import("@/pages/PrivacyPolicy.vue"),
  },
  {
    path: "/contact-us",
    name: "ContactPage",
    component: () => import("@/pages/ContactPage.vue"),
  },
  {
    path: "/term-of-use",
    name: "Term Of Use",
    component: () => import("@/pages/TermOfUse.vue"),
  },
  {
    path: "/legal-warning",
    name: "Leagal Warning",
    component: () => import("@/pages/LegalWarning.vue"),
  },
  {
    path: "/thank-you",
    name: "ThankYou",
    component: () => import("@/pages/ThankYou.vue"),
  },
  {
    path: "/login-page",
    name: "LoginPage",
    component: () => import('@/pages/auths/LoginPage.vue')
  },
  {
    path: "/registration-page",
    name: "RegistrationPage",
    component: () => import('@/pages/auths/RegistrationPage.vue')
  },
  {
    path: "/forgot-password-page",
    name: "ForgotPasswordPage",
    component: () => import('@/pages/auths/ForgotPasswordPage.vue')
  },
  {
    path: "/reset-password-page",
    name: "ResetPasswordPage",
    component: () => import('@/pages/auths/ResetPasswordPage.vue')
  },
  {
    path: "/email-verification-page",
    name: "EmailVerificationPage",
    component: () => import('@/pages/auths/EmailVerificationPage.vue')
  },
  {
    path: "/career",
    name: "CareerPage",
    component: () => import('@/pages/CareerPage.vue')
  },
  {
    path: "/pricing/:title",
    name: "StarterPricing",
    component: () => import('@/pages/StarterPricing.vue')
  },
  {
    path: "/website-development/:title",
    name: "WebsiteDevelopmentPage",
    component: () => import('@/pages/WebsiteDevelopmentPage.vue')
  },
  {
    path: "/b2b-ecommerce-development/:title",
    name: "B2BEcommerceDevelopment",
    component: () => import('@/pages/B2BEcommerceDevelopment.vue')
  },
  {
    path: "/b2c-ecommerce-development/:title",
    name: "B2CEcommerceDevelopment",
    component: () => import('@/pages/B2CEcommerceDevelopment.vue')
  },
  {
    path: "/software-development/:title",
    name: "SoftwareDevelopment",
    component: () => import('@/pages/SoftwareDevelopment.vue')
  },
  {
    path: "/graphic-designing/:title",
    name: "GraphicDesigning",
    component: () => import('@/pages/GraphicDesigning.vue')
  },
  {
    path: "/digital-marketing/:title",
    name: "DigitalMarketingPage",
    component: () => import('@/pages/DigitalMarketingPage.vue')
  },

  {
    path: "/template-one",
    name: "TemplateOne",
    component: () => import('@/pages/TemplateOne.vue')
  },
  {
    path: "/template-two",
    name: "TemplateTwo",
    component: () => import('@/pages/TemplateTwo.vue')
  },
  {
    path: "/template-three",
    name: "TemplateThree",
    component: () => import('@/pages/TemplateThree.vue')
  },
  {
    path: "/sales-category/:category",
    name: "SaleCategoryPage",
    component: () => import('@/pages/SaleCategoryPage.vue')
  },
  {
    path: "/sales-place/:place",
    name: "SalePlacePage",
    component: () => import('@/pages/SalePlacePage.vue')
  },
  {
    path: "/sales-funnel/:slug",
    name: "SalesFunnelPage",
    component: () => import('@/pages/SalesFunnelPage.vue')
  },
  {
    path: "/test",
    name: "TestPage",
    component: () => import('@/pages/TestPage.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
