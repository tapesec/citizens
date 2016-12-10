export default {
    isLogIn,
    getAccountName,
    get
};

function isLogIn(state) {
    return state.user.isLogIn;
}

function getAccountName(state) {
    let accountName = Boolean(state.user.accountName)? state.user.accountName : null;
    return accountName;
}

function get(state) {
    return state.user;
}
