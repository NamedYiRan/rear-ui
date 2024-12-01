/**
 * 这段代码实现了几个高阶函数，
 * 用于在 Vue.js 应用中为组件、函数和指令提供统一的安装接口。
 */


// 从 Vue 导入 App、Plugin 和 Directive 类型  
import type { App, Plugin, Directive } from "vue";
// 从 lodash-es 导入一个无操作函数 noop  
import { noop } from "lodash-es";

// 定义一个类型别名，表示一个兼具组件和插件功能的类型  
type SFCWithInstall<T> = T & Plugin;

// 定义一个高阶函数 `withInstall`，用于为 Vue 组件添加 install 方法  
export const withInstall = <T>(component: T) => {
  // 给组件添加 install 方法，用于在 Vue 应用中注册组件  
  (component as SFCWithInstall<T>).install = (app: App) => {
    // 获取组件的名称，如果没有名称，则使用默认名称 "UnnamedComponent"  
    const name = (component as any)?.name || "UnnamedComponent";
    // 将组件注册到 Vue 应用实例中  
    app.component(name, component as SFCWithInstall<T>);
  };
  // 返回带有 install 方法的新组件类型  
  return component as SFCWithInstall<T>;
};

// 定义一个高阶函数 `withInstallFunction`，用于将普通函数安装为 Vue 的全局属性  
export const withInstallFunction = <T>(fn: T, name: string) => {
  // 给函数添加 install 方法  
  (fn as SFCWithInstall<T>).install = (app: App) => {
    // 将函数添加到 Vue 应用的全局属性中  
    app.config.globalProperties[name] = fn;
  };
  // 返回带有 install 方法的函数类型  
  return fn as SFCWithInstall<T>;
};

// 定义一个高阶函数 `withInstallDirective`，用于将自定义指令安装到 Vue 应用中  
export const withInstallDirective = <T extends Directive>(
  directive: T, // 传入的自定义指令  
  name: string   // 指令的名称  
): SFCWithInstall<T> => {
  // 给指令添加 install 方法  
  (directive as SFCWithInstall<T>).install = (app: App) => {
    // 将指令注册到 Vue 应用中  
    app.directive(name, directive);
  };
  // 返回带有 install 方法的自定义指令  
  return directive as SFCWithInstall<T>;
};

// 定义一个高阶函数 `withNoopInstall`，用于不执行安装的组件  
export const withNoopInstall = <T>(component: T) => {
  // 给组件添加 install 方法，使用无操作函数 noop  
  (component as SFCWithInstall<T>).install = noop;
  // 返回带有 noop 安装方法的组件类型  
  return component as SFCWithInstall<T>;
};