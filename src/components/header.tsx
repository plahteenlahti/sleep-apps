import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <Container>
    <InnerContainer>
      <Title>
        <Link to="/">{siteTitle}</Link>
      </Title>
    </InnerContainer>
  </Container>
)

const Container = styled.header`
  background-color: #f7fafc;
`

const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 1140px;
  padding: 1rem;
`

const Title = styled.h2`
  margin: 0px;
  font-size: 1rem;

  a {
    color: #345345;
    text-decoration: none;
  }
`

export default Header
