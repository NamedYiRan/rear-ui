/**
 * 这段代码主要负责设置和配置一个 Vue 应用，
 * 特别是集成 FontAwesome 图标库、处理组件的安装以及提供全局配置。
 */

// 从 FontAwesome 导入库管理工具  
import { library } from "@fortawesome/fontawesome-svg-core";
// 导入 FontAwesome 的固态图标集合  
import { fas } from "@fortawesome/free-solid-svg-icons";
// 导入自定义的安装器函数，用于处理组件的安装  
import makeInstaller from "./makeInstaller";
// 导入组件集合  
import components from "./componens";
// 导入打印 logo 的功能  
import printLogo from "./pringLogo";

// 导入主题样式文件  
import "@rear-ui/theme/index.css";

// 调用打印 logo 的函数  
printLogo();

// 将 FontAwesome 图标库中添加固态图标集合  
library.add(fas);

// 使用 makeInstaller 函数创建一个安装器，传入组件集合  
const installer = makeInstaller(components);

// 导出 @rear-ui/locale 中的所有内容  
export * from '@rear-ui/locale';
// 导出 @rear-ui/components 中的所有内容  
export * from "@rear-ui/components";

// 导出创建的安装器作为默认导出  
export default installer;