# HOW TO USE

## Project setup

```
1. Place the plugin into the WordPress /wp-content/plugins/ folder
2. Run "npm install" in the plugin root (/wp-content/plugins/your-plugin)
3. Activate the plugin
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

---

### State

#### Selected data and app state

- ActionPage.vue → ToolsPage.vue (`gotoTools`): `appState` SAVED to local storage
- ToolsPage.vue → ActionPage.vue (`saveSelection`): `appState` SAVED to local storage
- ActionPage.vue → ActionPlanPage.vue (`gotoActionPlan`): `appState` SAVED to local storage

##### Wordpress

- ActionPage.vue → ActionPlanPage.vue (`gotoActionPlan`): `appState` SAVED to WordPress

#### User login

- stores/userStore.js (`login()`) : `appState` CLEARED from local storage
- stores/userStore.js (`login()`) : `isAuthenticated` SAVED to local storage
- stores/userStore.js (`login()`) : `userData` SAVED to local storage

##### WordPress

- stores/userStore.js (`login()`): `fetchUserData` FETCHED data from WorPress

#### User logout

- stores/userStore.js (`logout()`) : `appState` CLEARED from local storage
- stores/userStore.js (`logout()`) : `isAuthenticated` CLEARED from local storage
- stores/userStore.js (`logout()`) : `userData` CLEARED from local storage

### Email

This plugin is currently using `smtp.gmail.com` for SMTP
