import Link from 'next/link'
import styles from './footer.module.css'
export default function Footer() {
  return (
    <footer className={styles.ft}>
      <a href="/">首页</a> ｜ 
      <a
        href="https://linz.im/how-to"
        target="_blank"
      >
        如何用 Fleek 在 IPFS 上托管个人主页
      </a>
    </footer>
  )
}