import type { Metadata } from "next";
import React from 'react';
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Users',
}

async function UsersPage() {
    const usersData: Promise<User[]> = getAllUsers();
    const users = await usersData;
    console.log("Hello")
    const content = (
        <section>
            <h2>
                <Link href={'/'}> Back to Home</Link>
            </h2>
            <br/>
            {users.map((user)=>{
                return (
                    <div key={user.id}>
                    <p>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </p>
                    <br/>
                    </div>
                )
            })}
        </section>
    )
  return content;
}

export default UsersPage
