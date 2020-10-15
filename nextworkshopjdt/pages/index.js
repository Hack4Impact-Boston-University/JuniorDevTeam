import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>
        Welcome to the home page
      </h1>
      <Link href = "/posts/first-post"><a>Go to posts</a></Link>
    </div>
  )
}
