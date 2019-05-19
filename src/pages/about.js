import React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const AboutPage = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <h1>Here is an about page</h1>
            <div className="aboutText">
                <p>Here is some text about me</p>
                <Image />
            </div>
            <Link to="/page-2/">Go to page 2</Link>
        </Layout>
    )
}

export default AboutPage