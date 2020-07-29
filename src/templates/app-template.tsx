import React, { FC } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { PageProps, graphql } from "gatsby"
import { App } from "../pages"
import Header from "../components/header"
import styled from "styled-components"

type Props = {
  app: App
  nextApp: App
  previousApp: App
}

const AppTemplate: FC<PageProps<Props>> = ({ data: { app } }) => {
  console.log(app)
  return (
    <Layout>
      <SEO title={app.appId} />
      <h1>{app.appId}</h1>
      <Description> {app.description}</Description>
    </Layout>
  )
}

export default AppTemplate

export const pageQuery = graphql`
  query AppByID($appId: String!, $previous: String, $next: String) {
    app(appId: { eq: $appId }) {
      appId
      description
    }
    nextApp: app(appId: { eq: $next }) {
      appId
      description
    }
    previousApp: app(appId: { eq: $previous }) {
      appId
      description
    }
  }
`

const Description = styled.p`
  white-space: pre-wrap;
`
