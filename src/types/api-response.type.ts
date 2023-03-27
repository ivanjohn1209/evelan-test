import { UserListDataType } from "@/types/users-props.type";

export type APIResponseType = {
    statusCode: number,
    msg: string,
    response: UserListDataType,
}