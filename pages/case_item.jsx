import Link from 'next/link'
import Layout from '../components/_layout'
import fetch from 'isomorphic-unfetch'
import Case from '../components/_case'

const Index = (props) => (
    <Layout>
        <Case case={props.case}></Case>

    </Layout>
)

Index.getInitialProps = async function(context) {
  const { casenumber } = context.query
  console.log({casenumber})
  const res = await fetch(`http://localhost:8081/case/${casenumber}`)
  console.log(`http://localhost:8081/case/${casenumber}`)
  const data = await res.json()

  console.log(`Fetched record: ${data}`)
  var l =  {
    case: data
  }
  
  return l
}

export default Index