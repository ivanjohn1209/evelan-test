import { UserCardProps } from '@/types/user-card-props.type'
import Image from 'next/image'
import React from 'react'
import styles from "@/styles/Users.module.css"
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
function UserCard({ user }: UserCardProps) {
    return (
        <div>
            <div className={styles['user-card_container']}>
                <Image height={50} width={50} alt={user.last_name} src={user.avatar} />
                <div className={styles['user-card_details']}>
                    <h4 className={inter.className}>{user.first_name} {user.last_name}</h4>
                    <h6 className={inter.className}>{user.email}</h6>
                    <h6 className={inter.className}>{user.id}</h6>
                </div>
            </div>
        </div>
    )
}

export default UserCard