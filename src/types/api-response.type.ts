import { UserListDataType } from "./users-props.type";

export type APIResponseType = {
    statusCode: number,
    msg: string,
    response: UserListDataType,
}