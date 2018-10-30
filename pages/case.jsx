import Link from 'next/link'
import Layout from '../components/_layout'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
    <Layout>
       <p>View case details here</p>
        {props.case.map((item) => (
            <li key={item.CaseNumber}>
              <Link as={`/c/${item.CaseNumber}`} href={`/case_item?casenumber=${item.CaseNumber}`}>
                <a>{item.CaseNumber}</a>
              </Link>
            </li>
          ))}
    </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('http://localhost:8081/case')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)
  var l =  {
    case: data
  }
  l.case.map((item) => {
      console.log(item)
  })
  
  return l
}

export default Index