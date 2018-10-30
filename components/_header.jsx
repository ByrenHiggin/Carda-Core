import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="/case">
          <a style={linkStyle}>View Case</a>
        </Link>
        <Link href="/user">
          <a style={linkStyle}>View Users</a>
        </Link>
    </div>
)

export default Header