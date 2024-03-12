<script setup lang="tsx">
import { reactive, ref, watch, onMounted, unref } from 'vue';
import { Form } from '@/components/Form';
import { ElCheckbox, ElLink } from 'element-plus';
import { useForm } from '@/hooks/web/useForm';

// import { loginApi, getTestRoleApi, getAdminRoleApi } from '@/api/login';
// import { useAppStore } from '@/stores/modules/app';
// import { usePermissionStore } from '@/stores/modules/permission';
// import { useRouter } from 'vue-router';
// import type { RouteLocationNormalizedLoaded, RouteRecordRaw } from 'vue-router';
// import { UserType } from '@/api/login/types';
import { useValidator } from '@/hooks/web/useValidator';
// import { Icon } from '@/components/Icon';
// import { useUserStore } from '@/stores/modules/user';
// import { BaseButton } from '@/components/Button';

const { required } = useValidator();

// const emit = defineEmits(['to-register']);

// const appStore = useAppStore();

// const userStore = useUserStore();

// const permissionStore = usePermissionStore();

// const { currentRoute, addRoute, push } = useRouter();

const rules = {
  username: [required()],
  password: [required()]
};

const schema = reactive([
  {
    field: 'title',
    colProps: {
      span: 24
    },
    formItemProps: {
      slots: {
        default: () => {
          return <h2 class='text-2xl font-bold text-center w-[100%]'>로그인</h2>;
        }
      }
    }
  },
  {
    field: 'username',
    label: '아이디',
    // value: 'admin',
    component: 'Input',
    colProps: {
      span: 24
    },
    componentProps: {
      placeholder: 'admin or test'
    }
  },
  {
    field: 'password',
    label: '비밀번호',
    // value: 'admin',
    component: 'InputPassword',
    colProps: {
      span: 24
    },
    componentProps: {
      style: {
        width: '100%'
      },
      placeholder: 'admin or test'
    }
  },
  // {
  //   field: 'tool',
  //   colProps: {
  //     span: 24
  //   },
  //   formItemProps: {
  //     slots: {
  //       default: () => {
  //         return (
  //           <>
  //             <div class='flex justify-between items-center w-[100%]'>
  //               <ElCheckbox v-model={remember.value} label={'기억하기'} size='small' />
  //               <ElLink type='primary' underline={false}>{'아이디/비밀번호 찾기'}</ElLink>
  //             </div>
  //           </>
  //         );
  //       }
  //     }
  //   }
  // },
  {
    field: 'login',
    colProps: {
      span: 24
    },
    formItemProps: {
      slots: {
        default: () => {
          return (
            <>
              <div class='w-[100%]'>
                <BaseButton loading={loading.value} type='primary' class='w-[100%]' onClick={signIn}>로그인</BaseButton>
              </div>
              <div class='w-[100%] mt-15px'>
                <BaseButton class='w-[100%]' onClick={toRegister}>회원가입</BaseButton>
              </div>
            </>
          );
        }
      }
    }
  },
  {
    field: 'other',
    component: 'Divider',
    label: '다른 로그인 방식',
    componentProps: {
      contentPosition: 'center'
    }
  },
  {
    field: 'otherIcon',
    colProps: {
      span: 24
    },
    formItemProps: {
      slots: {
        default: () => {
          return (
            <>
              <div class='flex justify-between w-[100%]'>
                <Icon icon='ant-design:github-filled' size={iconSize} class='cursor-pointer ant-icon' color={iconColor} hoverColor={hoverColor} />
                <Icon icon='ant-design:wechat-filled' size={iconSize} class='cursor-pointer ant-icon' color={iconColor} hoverColor={hoverColor} />
                <Icon icon='ant-design:alipay-circle-filled' size={iconSize} color={iconColor} hoverColor={hoverColor} class='cursor-pointer ant-icon' />
                <Icon icon='ant-design:weibo-circle-filled' size={iconSize} color={iconColor} hoverColor={hoverColor} class='cursor-pointer ant-icon' />
              </div>
            </>
          );
        }
      }
    }
  }
]);

// const iconSize = 30;

// const remember = ref(userStore.getRememberMe);

// const initLoginInfo = () => {
//   const loginInfo = userStore.getLoginInfo;
//   if (loginInfo) {
//     const { username, password } = loginInfo;
//     setValues({ username, password });
//   }
// };
// onMounted(() => {
//   initLoginInfo();
// });

const { formRegister, formMethods } = useForm();

// const { getFormData, getElFormExpose, setValues } = formMethods;

// const loading = ref(false);

// const iconColor = '#999';

// const hoverColor = 'var(--el-color-primary)';

// const redirect = ref<string>('');

// watch(
//   () => currentRoute.value,
//   (route: RouteLocationNormalizedLoaded) => {
//     redirect.value = route?.query?.redirect as string;
//   },
//   {
//     immediate: true
//   }
// );

// // 登录
const signIn = async () => {
  // const formRef = await getElFormExpose();
  // await formRef?.validate(async (isValid) => {
  //   if (isValid) {
  //     loading.value = true;
  //     const formData = await getFormData<UserType>();

  //     try {
  //       const res = await loginApi(formData);

  //       if (res) {
  //         // 是否记住我
  //         if (unref(remember)) {
  //           userStore.setLoginInfo({
  //             username: formData.username,
  //             password: formData.password
  //           });
  //         } else {
  //           userStore.setLoginInfo(undefined);
  //         }
  //         userStore.setRememberMe(unref(remember));
  //         userStore.setUserInfo(res.data);
  //         // 是否使用动态路由
  //         if (appStore.getDynamicRouter) {
  //           getRole();
  //         } else {
  //           await permissionStore.generateRoutes('static').catch(() => {});
  //           permissionStore.getAddRouters.forEach((route) => {
  //             addRoute(route as RouteRecordRaw); // 动态添加可访问路由表
  //           });
  //           permissionStore.setIsAddRouters(true);
  //           push({ path: redirect.value || permissionStore.addRouters[0].path });
  //         }
  //       }
  //     } finally {
  //       loading.value = false;
  //     }
  //   }
  // });
};

// // 获取角色信息
// const getRole = async () => {
//   const formData = await getFormData<UserType>();
//   const params = {
//     roleName: formData.username
//   };
//   const res = appStore.getDynamicRouter && appStore.getServerDynamicRouter ? await getAdminRoleApi(params) : await getTestRoleApi(params);
//   if (res) {
//     const routers = res.data || [];
//     userStore.setRoleRouters(routers);
//     appStore.getDynamicRouter && appStore.getServerDynamicRouter ? await permissionStore.generateRoutes('server', routers).catch(() => {}) : await permissionStore.generateRoutes('frontEnd', routers).catch(() => {});

//     permissionStore.getAddRouters.forEach((route) => {
//       addRoute(route as RouteRecordRaw); // 动态添加可访问路由表
//     });
//     permissionStore.setIsAddRouters(true);
//     push({ path: redirect.value || permissionStore.addRouters[0].path });
//   }
// };

// // 去注册页面
// const toRegister = () => {
//   emit('to-register');
// };
</script>

<template>
  <Form :schema="schema" :rules="rules" label-position="top" hide-required-asterisk size="large" class="dark:(border-1 border-[var(--el-border-color)] border-solid)" @register="formRegister" />
</template>
