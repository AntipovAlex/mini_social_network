export type profileType = {
    aboutMe: string
    contacts: contactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    photos: photosType
}
export type contactsType = {
    facebook: string
    github: string
    instagram: string
    mainLink: string
    twitter: string
    vk: string
    website: string
    youtube: string
}
export type postType = {
    id: number
    post: string
    likeCount: string
}
export type photosType = {
    small: string | null
    large: string | null
}

export type usersType = {
    id: number
    name: string
    status: string
    photos:photosType
    followed: boolean
}