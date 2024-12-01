// 从 Vue 导入 Component、ComputedRef 和 Ref 类型  
import { type Component, type ComputedRef, type Ref } from "vue";

// 按钮类型定义，包括不同的样式类型  
export type ButtonType = "primary" | "success" | "warning" | "danger" | "info";
// 原生按钮类型定义，常用于 form 表单中的按钮  
export type NativeType = "button" | "submit" | "reset";
// 按钮尺寸定义，表示按钮的大小  
export type ButtonSize = "default" | "large" | "small";

// 定义 Button 组件的属性接口  
export interface ButtonProps {
  // 指定渲染的标签，可以是一个字符串（如 "a", "button"）或 Vue 组件  
  tag?: string | Component;

  // 按钮的样式类型，使用 ButtonType 类型  
  type?: ButtonType;

  // 按钮的大小，使用 ButtonSize 类型  
  size?: ButtonSize;

  // 是否为朴素按钮，没有边框和背景  
  plain?: boolean;

  // 是否为圆形按钮  
  round?: boolean;

  // 是否为环形按钮  
  circle?: boolean;

  // 是否禁用按钮  
  disabled?: boolean;

  // 是否自动获取焦点  
  autofocus?: boolean;

  // 原生按钮类型，使用 NativeType 类型  
  nativeType?: NativeType;

  // 按钮的图标，可以是图标名称或路径  
  icon?: string;

  // 是否显示加载状态  
  loading?: boolean;

  // 加载状态下的图标  
  loadingIcon?: string;

  // 是否使用节流，防止短时间内多次点击  
  useThrottle?: boolean;

  // 节流持续时间，单位为毫秒  
  throttleDuration?: number;
}

// 定义 ButtonGroup 组件的属性接口  
export interface ButtonGroupProps {
  // 按钮组的大小，使用 ButtonSize 类型  
  size?: ButtonSize;

  // 按钮组的样式类型，使用 ButtonType 类型  
  type?: ButtonType;

  // 按钮组是否禁用，要禁用所有按钮时使用  
  disabled?: boolean;
}

// 定义 Button 组的上下文接口，提供 ButtonGroup 的属性  
export interface ButtonGroupContext {
  // 按钮组的大小  
  size?: ButtonSize;

  // 按钮组的样式类型  
  type?: ButtonType;

  // 按钮组是否禁用  
  disabled?: boolean;
}

// 定义 Button 组件的事件接口  
export interface ButtonEmits {
  // 定义按钮点击事件的类型  
  (e: "click", value: MouseEvent): void;
}

// 定义 Button 实例接口，用于管理按钮组件的状态  
export interface ButtonInstance {
  // 按钮 DOM 元素的引用  
  ref: Ref<HTMLButtonElement | void>;

  // 计算属性，表示按钮是否禁用  
  disabled: ComputedRef<boolean>;

  // 计算属性，表示按钮的大小  
  size: ComputedRef<string>;

  // 计算属性，表示按钮的样式类型  
  type: ComputedRef<string>;
}