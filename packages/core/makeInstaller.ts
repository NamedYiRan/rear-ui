/**
 * 这段代码实现了一个组件安装的通用机制，可以轻松地将多个 Vue 组件注册到一个 Vue 应用中，
 * 同时提供全局配置的功能。
 */
// 从 Vue 导入 App 和 Plugin 类型  
import type { App, Plugin } from "vue";
// 从 @rear-ui/constants 导入常量 INSTALLED_KEY，用于标识应用是否已安装组件  
import { INSTALLED_KEY } from "@rear-ui/constants";
// 从 lodash-es 导入 each、get 和 set 方法，分别用于遍历、获取和设置对象属性  
import { each, get, set } from "lodash-es";
// 从 @rear-ui/components 导入提供全局配置的函数和配置类型  
import {
  provideGlobalConfig,
  type ConfigProviderProps,
} from "@rear-ui/components";

// 定义一个默认导出的函数 `makeInstaller`，用于创建安装器  
export default function makeInstaller(components: Plugin[]) {
  // 定义安装函数，接受 Vue 应用实例和可选的全局配置参数  
  const install = (app: App, options?: ConfigProviderProps) => {
    // 检查应用是否已安装组件，避免重复安装  
    if (get(app, INSTALLED_KEY)) return;
    // 设置应用的 INSTALLED_KEY 属性为 true，标记已安装  
    set(app, INSTALLED_KEY, true);

    // 遍历组件数组，为每个组件调用 app.use 注册到 Vue 应用中  
    each(components, (c) => {
      app.use(c);
    });

    // 如果提供了全局配置选项，则调用 provideGlobalConfig 函数进行配置  
    if (options) provideGlobalConfig(options, app, true);
  };

  // 返回 install 函数，使其可被调用以安装组件  
  return install;
}