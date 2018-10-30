import Link from 'next/link'
import {component} from 'react'
import Layout from '../components/_layout'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
    <Layout>
       <p>Login</p>
        {props.case.map((item) => (
            <li key={item.CaseNumber}>
              <Link as={`/c/${item.CaseNumber}`} href={`/case_item?casenumber=${item.CaseNumber}`}>
                <a>{item.CaseNumber}</a>
              </Link>
            </li>
          ))}
    </Layout>
)

class Login extends component {
    constructor (props) {
        super(props);
    }
    submitLogin(data) {
        fetch('http://localhost:8080/auth/login', {
          method:"post",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data);
        }).then((res) => {
            if(res.status === 200) {
                
            }            
        })
    }
}


export default Index