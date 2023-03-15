import { lazy } from 'react';

const componentImportPaths = {
  SignIn: () => import(/* webpackChunkName: "SignIn" */ './../components/SignIn'),
  SignUp: () => import(/* webpackChunkName: "SignUp" */ './../components/SignUp'),
  UserButton: () => import(/* webpackChunkName: "UserButton" */ './../components/UserButton'),
  UserProfile: () => import(/* webpackChunkName: "UserProfile" */ './../components/UserProfile'),
  CreateOrganization: () => import(/* webpackChunkName: "CreateOrganization" */ './../components/CreateOrganization'),
  OrganizationProfile: () =>
    import(/* webpackChunkName: "OrganizationProfile" */ './../components/OrganizationProfile'),
  OrganizationSwitcher: () =>
    import(/* webpackChunkName: "OrganizationSwitcher" */ './../components/OrganizationSwitcher'),
  ImpersonationFab: () => import(/* webpackChunkName: "ImpersonationFab" */ './../components/ImpersonationFab'),
} as const;

export const SignIn = lazy(() => componentImportPaths.SignIn().then(module => ({ default: module.SignIn })));

export const SignInModal = lazy(() => componentImportPaths.SignIn().then(module => ({ default: module.SignInModal })));

export const SignUp = lazy(() => componentImportPaths.SignUp().then(module => ({ default: module.SignUp })));

export const SignUpModal = lazy(() => componentImportPaths.SignUp().then(module => ({ default: module.SignUpModal })));

export const UserButton = lazy(() =>
  componentImportPaths.UserButton().then(module => ({ default: module.UserButton })),
);
export const UserProfile = lazy(() =>
  componentImportPaths.UserProfile().then(module => ({ default: module.UserProfile })),
);
export const UserProfileModal = lazy(() =>
  componentImportPaths.UserProfile().then(module => ({ default: module.UserProfileModal })),
);
export const CreateOrganization = lazy(() =>
  componentImportPaths.CreateOrganization().then(module => ({ default: module.CreateOrganization })),
);

export const CreateOrganizationModal = lazy(() =>
  componentImportPaths.CreateOrganization().then(module => ({ default: module.CreateOrganizationModal })),
);

export const OrganizationProfile = lazy(() =>
  componentImportPaths.OrganizationProfile().then(module => ({ default: module.OrganizationProfile })),
);

export const OrganizationProfileModal = lazy(() =>
  componentImportPaths.OrganizationProfile().then(module => ({ default: module.OrganizationProfileModal })),
);

export const OrganizationSwitcher = lazy(() =>
  componentImportPaths.OrganizationSwitcher().then(module => ({ default: module.OrganizationSwitcher })),
);

export const ImpersonationFab = lazy(() =>
  componentImportPaths.ImpersonationFab().then(module => ({ default: module.ImpersonationFab })),
);

export const preloadComponent = async (component: unknown) => {
  return componentImportPaths[component as keyof typeof componentImportPaths]?.();
};

export const ClerkComponents = {
  SignIn,
  SignUp,
  UserButton,
  UserProfile,
  OrganizationSwitcher,
  OrganizationProfile,
  CreateOrganization,
  SignInModal,
  SignUpModal,
  UserProfileModal,
  OrganizationProfileModal,
  CreateOrganizationModal,
};

export type ClerkComponentName = keyof typeof ClerkComponents;