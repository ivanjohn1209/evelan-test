import { User } from "@/types/user.type";

export type UserListDataType = {
    data: User[],
    page: number,
    per_page: number,
    support: {},
    total: number,
    total_pages: number
}

export type UsersProps = {
    userList: UserListDataType,
}