export default {
    isLogIn,
    getAccountName
};

function isLogIn(state) {
    return state.user.isLogIn;
}

function getAccountName(state) {

    let accountName = Boolean(state.user.accountName)? state.user.accountName : null;
    return accountName;
}
