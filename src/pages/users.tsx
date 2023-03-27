import { UsersProps } from '@/types/users-props.type';
import React, { useEffect, useState } from 'react'
import { GetUsers } from '../service/users.service';
import styles from "@/styles/Users.module.css"
import UserCard from '@/components/user-card.component';
import { User } from '@/types/user.type';

function Users({ userList }: UsersProps) {
  const [list, setlist] = useState<User[]>([])
  useEffect(() => {
    setlist(userList.data);
  }, [])

  const loadMore = async () => {
    const { response } = await GetUsers(userList.page + 1);
    setlist([...list, ...response.data])
  }
  return (
    <div className={styles['user-list_section']}>
      <div className={styles['user-list_container']}>
        {
          list.map((val, key) => {
            return (
              <div className={styles['user-list_item']} key={key}>
                <UserCard user={val} />
              </div>
            )
          })
        }
      </div>
      <button className={styles['user-list_load_btn']} disabled={list.length === userList.total} onClick={loadMore}>Load More</button>
    </div>

  )
}

export default Users;

export async function getServerSideProps() {
  const users = await GetUsers(1);
  return {
    props: {
      userList: users.response
    },
  }
}