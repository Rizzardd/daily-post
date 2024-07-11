/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'
import { Route as ProtectedIndexImport } from './routes/_protected/index'
import { Route as AuthRegisterImport } from './routes/auth/register'
import { Route as AuthLoginImport } from './routes/auth/login'
import { Route as ProtectedDailyImport } from './routes/_protected/daily'

// Create/Update Routes

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const ProtectedIndexRoute = ProtectedIndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthRegisterRoute = AuthRegisterImport.update({
  path: '/auth/register',
  getParentRoute: () => rootRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  path: '/auth/login',
  getParentRoute: () => rootRoute,
} as any)

const ProtectedDailyRoute = ProtectedDailyImport.update({
  path: '/daily',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/_protected/daily': {
      id: '/_protected/daily'
      path: '/daily'
      fullPath: '/daily'
      preLoaderRoute: typeof ProtectedDailyImport
      parentRoute: typeof rootRoute
    }
    '/auth/login': {
      id: '/auth/login'
      path: '/auth/login'
      fullPath: '/auth/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof rootRoute
    }
    '/auth/register': {
      id: '/auth/register'
      path: '/auth/register'
      fullPath: '/auth/register'
      preLoaderRoute: typeof AuthRegisterImport
      parentRoute: typeof rootRoute
    }
    '/_protected/': {
      id: '/_protected/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof ProtectedIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  AboutRoute,
  ProtectedDailyRoute,
  AuthLoginRoute,
  AuthRegisterRoute,
  ProtectedIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/about",
        "/_protected/daily",
        "/auth/login",
        "/auth/register",
        "/_protected/"
      ]
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/_protected/daily": {
      "filePath": "_protected/daily.tsx"
    },
    "/auth/login": {
      "filePath": "auth/login.tsx"
    },
    "/auth/register": {
      "filePath": "auth/register.tsx"
    },
    "/_protected/": {
      "filePath": "_protected/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
