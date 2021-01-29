import {appReduserType} from "./reduxStore";

export const getUsers = (state: appReduserType) => {
    return state.usersPage.users
}
export const getPageSize = (state: appReduserType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: appReduserType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: appReduserType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: appReduserType) => {
    return state.usersPage.isFetching
}
export const getFollowinInProgress = (state: appReduserType) => {
    return state.usersPage.followInProgress
}