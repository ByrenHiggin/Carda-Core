import {withRouter} from 'next/router'
import Layout from '../components/_layout.js'

const Content = withRouter((props) => (
  <div>
    <h1>{props.router.query.title}</h1>
    <p>User Page</p>
  </div>
))

const Page = (props) => (
    <Layout>
       <Content />
    </Layout>
)

export default Page