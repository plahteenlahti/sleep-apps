import { graphql, PageProps } from "gatsby"
import React, { FC } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

type Review = {
  id: string
  text: string
  score: number
  title: string
  url: string
  version: string
  userName: string
  userUrl: string
}

type App = {
  appId: string
  contentRating: string
  currency: string
  currentVersionReviews: string
  currentVersionScore: string
  description: string
  developer: string
  developerId: string
  developerUrl: string
  developerWebsite: string
  free: string
  genreIds: string
  genres: string
  icon: string
  id: string
  languages: string
  price: string
  primaryGenre: string
  primaryGenreId: string
  releaseNotes: string
  released: string
  requiredOsVersion: string
  score: string
  title: string
  size: string
  updated: string
  url: string
  version: string
}

type Props = {
  allApp: {
    nodes: Array<App>
  }
}

const IndexPage: FC<PageProps<Props>> = ({
  data: {
    allApp: { nodes: apps },
  },
}) => {
  console.log(apps)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Gatsby-source-app-store</h1>
      <p>
        Display data from apps on App Store on your Website. For example like
        this:
      </p>

      <Apps>
        {apps.map(app => (
          <Card key={app.id}>
            <TitleRow>
              <Icon src={app.icon} />
              <h5>
                {app.title} ({app.currentVersionScore})
              </h5>
            </TitleRow>
            <InfoRow>
              {app.free ? <Free>Free</Free> : <Price>{app.price}</Price>}
            </InfoRow>
            <Developer>
              Developer: <a href={app.developerUrl}>{app.developer}</a>
            </Developer>
          </Card>
        ))}
      </Apps>
    </Layout>
  )
}

export default IndexPage

const Apps = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -0.5rem;
`

const Card = styled.div`
  width: calc(50% - 2 * 0.5rem);
  box-sizing: border-box;
  border-radius: 0.5rem;
  margin: 1rem 0.5rem;
  padding: 1rem;
  box-shadow: 2px 2px 9px 6px #adadad24;
`

const Developer = styled.span`
  font-size: 0.8rem;
  font-family: sans-serif;
  a {
    color: inherit;
  }
`

const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Icon = styled.img`
  height: 2rem;
  width: 2rem;
  margin-right: 1rem;
  border-radius: 0.5rem;
`

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Free = styled.span`
  background-color: #c9eac9;
  color: #166d16;
  font-weight: bold;
  text-transform: uppercase;
  font-family: sans-serif;
  padding: 0.3rem 0.7rem;
  font-size: 0.6rem;
  line-height: 0.8rem;
  border-radius: 0.5rem;
`

const Price = styled(Free)`
  background-color: #ffd9e7;
  color: #da3a74;
  font-size: 0.7rem;
`

export const query = graphql`
  {
    allApp {
      nodes {
        appId
        contentRating
        currency
        currentVersionReviews
        currentVersionScore
        description
        developer
        developerId
        developerUrl
        developerWebsite
        free
        genreIds(difference: "")
        genres
        icon
        id
        languages
        price
        primaryGenre
        primaryGenreId
        releaseNotes
        released
        requiredOsVersion
        score
        title
        size
        updated
        url
        version
      }
    }
  }
`
