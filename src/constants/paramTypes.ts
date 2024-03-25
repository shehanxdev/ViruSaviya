export const NavtiveBaseButtonVariant = {
  solid: 'solid',
  outline: 'outline'
};

export type NativeBaseButtonVariantType =
  (typeof NavtiveBaseButtonVariant)[keyof typeof NavtiveBaseButtonVariant];
