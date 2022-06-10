
export const types = {
    // authentication
    authLogin: '[auth] Login',
    authCheckingFinish: '[auth] Finish checking login state',
    authLogout: '[auth] Logout',

    //Course for instructor
    courseLoaded: '[course] Course for instructor loaded',
    courseStartAddNew: '[course] Start add new',
    courseAddNew: '[course] Add new',
    courseSetActive: '[course] Set active',

    courseSetActiveUpdate: '[course] Curso set active update',
    clearActiveUpdate: '[course] Clear active update',

    //Categories -> Certain roles are admin only
    categoryLoaded: '[category] Category loaded',
    
    //UI
    toggleSwitch: '[darkMode] Switch dark light mode',
}